const express = require('express');
const reviewController = require('../controllers/reviewController');
const { validateReview } = require('../middleware/validation');
const { protect, restrictTo } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(validateReview, reviewController.createReview);

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(reviewController.updateReview);

router
  .route('/:id/staff-assessment')
  .patch(reviewController.submitStaffAssessment);

router
  .route('/:id/peer-assessment')
  .patch(reviewController.submitPeerAssessment);

router
  .route('/:id/hod-assessment')
  .patch(restrictTo('hod'), reviewController.submitHODAssessment);

module.exports = router;