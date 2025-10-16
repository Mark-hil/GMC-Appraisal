const mongoose = require('mongoose');

const objectiveSchema = new mongoose.Schema({
  text: String,
  period: String,
  selfRating: Number,
  peerRating: Number,
  hodRating: Number,
  staffComment: String,
  hodComment: String
});

const detailedAssessmentSchema = new mongoose.Schema({
  kpaTitle: String,
  period: String,
  selfRating: Number,
  peerRating: Number,
  hodRating: Number,
  staffComment: String,
  hodComment: String
});

const trainingNeedSchema = new mongoose.Schema({
  need: String,
  activity: String
});

const signatureSchema = new mongoose.Schema({
  staff: String, // Base64 encoded signature
  peer: String,
  hod: String,
  signedAt: {
    staff: Date,
    peer: Date,
    hod: Date
  }
});

const scoreSchema = new mongoose.Schema({
  sectionA: {
    average: Number,
    totalItems: Number
  },
  sectionB: {
    average: Number,
    totalItems: Number
  },
  finalScore: Number,
  calculatedAt: Date
});

const reviewSchema = new mongoose.Schema({
  staff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  staffName: {
    type: String,
    required: true
  },
  staffEmail: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true,
    enum: [
      'MINE OPERATION', 'MINE PLANNING AND ENGINEERING', 'PORT OPERATION', 
      'SECURITY', 'SUPPLY CHAIN', 'ASSAY LAB', 'ASSET MANAGEMENT', 
      'CARBONATE PLANT', 'CIVIL', 'COMMUNITY RELATIONS', 'ELECTRIC SHOP',
      'ENVIRONMENT', 'FINANCE', 'GEOLOGY & SURVEY', 'HD/EME', 
      'HEALTH & SAFETY', 'HOSPITAL', 'HUMAN CAPITAL', 'I.T.', 
      'LIGHT DUTY', 'MECHANICAL WORKSHOP', 'METALLURGY'
    ]
  },
  jobTitle: {
    type: String,
    required: true
  },
  periodFrom: {
    type: Date,
    required: true
  },
  periodTo: {
    type: Date,
    required: true
  },
  objectives: [objectiveSchema],
  detailedAssessments: [detailedAssessmentSchema],
  trainingNeeds: [trainingNeedSchema],
  suggestions: String,
  signatures: signatureSchema,
  status: {
    type: String,
    enum: ['Draft', 'Pending Peer', 'Pending HOD', 'Completed'],
    default: 'Draft'
  },
  scores: scoreSchema,
  assignedPeer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  assignedHOD: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  completedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  completionDate: Date,
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Indexes for better query performance
reviewSchema.index({ staff: 1 });
reviewSchema.index({ department: 1 });
reviewSchema.index({ status: 1 });
reviewSchema.index({ createdAt: -1 });
reviewSchema.index({ staffEmail: 1 });

// Virtual for review period duration
reviewSchema.virtual('periodDuration').get(function() {
  if (this.periodFrom && this.periodTo) {
    return Math.ceil((this.periodTo - this.periodFrom) / (1000 * 60 * 60 * 24));
  }
  return 0;
});

module.exports = mongoose.model('Review', reviewSchema);