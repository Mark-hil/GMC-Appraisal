const Review = require('../models/Review');
const User = require('../models/User');
const Task = require('../models/Task');
const Notification = require('../models/Notification');
const AppError = require('../utils/appError');
const emailService = require('../utils/email');

exports.getAllReviews = async (req, res, next) => {
  try {
    const {
      department,
      status,
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    const filter = { isActive: true };
    
    if (department) filter.department = department;
    if (status) filter.status = status;
    
    if (req.user.role === 'staff') {
      filter.staff = req.user._id;
    } else if (req.user.role === 'hod') {
      filter.department = req.user.department;
    }

    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const reviews = await Review.find(filter)
      .populate('staff', 'name email')
      .populate('assignedPeer', 'name email')
      .populate('assignedHOD', 'name email')
      .sort(sortOptions)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Review.countDocuments(filter);

    res.status(200).json({
      status: 'success',
      results: reviews.length,
      data: {
        reviews,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.getReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id)
      .populate('staff', 'name email department jobTitle')
      .populate('assignedPeer', 'name email')
      .populate('assignedHOD', 'name email');

    if (!review) {
      return next(new AppError('No review found with that ID', 404));
    }

    if (!this.canAccessReview(req.user, review)) {
      return next(new AppError('You do not have permission to view this review', 403));
    }

    res.status(200).json({
      status: 'success',
      data: {
        review
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.createReview = async (req, res, next) => {
  try {
    const reviewData = {
      ...req.body,
      staff: req.user._id,
      staffName: req.user.name,
      staffEmail: req.user.email,
      department: req.user.department,
      jobTitle: req.user.jobTitle
    };

    const review = await Review.create(reviewData);

    await Notification.create({
      user: req.user._id,
      type: 'review_submitted',
      title: 'Review Created',
      message: `Performance review for period ${new Date(review.periodFrom).toLocaleDateString()} to ${new Date(review.periodTo).toLocaleDateString()} has been created.`,
      relatedReview: review._id
    });

    res.status(201).json({
      status: 'success',
      data: {
        review
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.updateReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return next(new AppError('No review found with that ID', 404));
    }

    if (!this.canModifyReview(req.user, review)) {
      return next(new AppError('You do not have permission to modify this review', 403));
    }

    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      status: 'success',
      data: {
        review: updatedReview
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.submitStaffAssessment = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return next(new AppError('No review found with that ID', 404));
    }

    if (review.staff.toString() !== req.user._id.toString()) {
      return next(new AppError('You can only submit your own assessment', 403));
    }

    review.objectives = req.body.objectives || review.objectives;
    review.detailedAssessments = req.body.detailedAssessments || review.detailedAssessments;
    review.trainingNeeds = req.body.trainingNeeds || review.trainingNeeds;
    review.suggestions = req.body.suggestions || review.suggestions;
    
    if (req.body.signatures && req.body.signatures.staff) {
      review.signatures.staff = req.body.signatures.staff;
      review.signatures.signedAt.staff = new Date();
    }

    review.status = 'Pending Peer';
    
    await review.save();
    await this.calculateScores(review);

    await emailService.sendHODNotification(review, 'Staff');

    res.status(200).json({
      status: 'success',
      data: {
        review
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.submitPeerAssessment = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return next(new AppError('No review found with that ID', 404));
    }

    if (review.assignedPeer?.toString() !== req.user._id.toString()) {
      return next(new AppError('You are not assigned as peer for this review', 403));
    }

    review.objectives = review.objectives.map((obj, index) => ({
      ...obj.toObject(),
      peerRating: req.body.objectives[index]?.peerRating || obj.peerRating
    }));

    review.detailedAssessments = review.detailedAssessments.map((assess, index) => ({
      ...assess.toObject(),
      peerRating: req.body.detailedAssessments[index]?.peerRating || assess.peerRating
    }));

    if (req.body.signatures && req.body.signatures.peer) {
      review.signatures.peer = req.body.signatures.peer;
      review.signatures.signedAt.peer = new Date();
    }

    review.status = 'Pending HOD';
    
    await review.save();
    await this.calculateScores(review);

    await emailService.sendHODNotification(review, 'Peer');

    res.status(200).json({
      status: 'success',
      data: {
        review
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.submitHODAssessment = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return next(new AppError('No review found with that ID', 404));
    }

    if (review.department !== req.user.department || req.user.role !== 'hod') {
      return next(new AppError('You are not the HOD for this department', 403));
    }

    review.objectives = review.objectives.map((obj, index) => ({
      ...obj.toObject(),
      hodRating: req.body.objectives[index]?.hodRating || obj.hodRating,
      hodComment: req.body.objectives[index]?.hodComment || obj.hodComment
    }));

    review.detailedAssessments = review.detailedAssessments.map((assess, index) => ({
      ...assess.toObject(),
      hodRating: req.body.detailedAssessments[index]?.hodRating || assess.hodRating,
      hodComment: req.body.detailedAssessments[index]?.hodComment || assess.hodComment
    }));

    if (req.body.signatures && req.body.signatures.hod) {
      review.signatures.hod = req.body.signatures.hod;
      review.signatures.signedAt.hod = new Date();
    }

    review.status = 'Completed';
    review.completedBy = req.user._id;
    review.completionDate = new Date();
    
    await review.save();
    await this.calculateScores(review);

    await emailService.sendHRCompletionNotification(review);

    res.status(200).json({
      status: 'success',
      data: {
        review
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.calculateScores = async (review) => {
  try {
    const sectionAScores = [];
    const sectionBScores = [];

    review.objectives.forEach(obj => {
      if (obj.hodRating) sectionAScores.push(obj.hodRating);
    });

    review.detailedAssessments.forEach(assess => {
      if (assess.hodRating) sectionBScores.push(assess.hodRating);
    });

    const sectionAAvg = sectionAScores.length > 0 ? 
      sectionAScores.reduce((a, b) => a + b, 0) / sectionAScores.length : 0;
    
    const sectionBAvg = sectionBScores.length > 0 ? 
      sectionBScores.reduce((a, b) => a + b, 0) / sectionBScores.length : 0;

    const finalScore = (sectionAAvg * 0.6) + (sectionBAvg * 0.4);

    review.scores = {
      sectionA: {
        average: parseFloat(sectionAAvg.toFixed(2)),
        totalItems: sectionAScores.length
      },
      sectionB: {
        average: parseFloat(sectionBAvg.toFixed(2)),
        totalItems: sectionBScores.length
      },
      finalScore: parseFloat(finalScore.toFixed(2)),
      calculatedAt: new Date()
    };

    await review.save();
  } catch (error) {
    console.error('Error calculating scores:', error);
  }
};

exports.canAccessReview = (user, review) => {
  if (user.role === 'hr') return true;
  if (user.role === 'hod' && user.department === review.department) return true;
  if (user._id.toString() === review.staff._id.toString()) return true;
  if (review.assignedPeer && user._id.toString() === review.assignedPeer._id.toString()) return true;
  if (review.assignedHOD && user._id.toString() === review.assignedHOD._id.toString()) return true;
  
  return false;
};

exports.canModifyReview = (user, review) => {
  if (user.role === 'hr') return true;
  if (user._id.toString() === review.staff._id.toString() && review.status === 'Draft') return true;
  if (review.assignedPeer && user._id.toString() === review.assignedPeer._id.toString() && review.status === 'Pending Peer') return true;
  if (user.role === 'hod' && user.department === review.department && review.status === 'Pending HOD') return true;
  
  return false;
};