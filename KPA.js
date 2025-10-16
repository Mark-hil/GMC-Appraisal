const mongoose = require('mongoose');

const kpaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'KPA title is required'],
    trim: true
  },
  description: String,
  bullets: [String],
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
  jobTitle: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Compound index for department and jobTitle
kpaSchema.index({ department: 1, jobTitle: 1 });
kpaSchema.index({ isActive: 1 });

module.exports = mongoose.model('KPA', kpaSchema);