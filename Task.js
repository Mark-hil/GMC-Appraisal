const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Task title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Task description is required']
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
  jobTitle: String,
  staffEmail: {
    type: String,
    required: true,
    validate: {
      validator: function(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
      message: 'Please provide a valid staff email'
    }
  },
  peerEmail: {
    type: String,
    validate: {
      validator: function(email) {
        return !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
      message: 'Please provide a valid peer email'
    }
  },
  hodEmail: String,
  type: {
    type: String,
    enum: ['objective', 'kpa', 'training', 'review'],
    required: true
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  deadline: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['assigned', 'in-progress', 'completed', 'overdue'],
    default: 'assigned'
  },
  taskCode: {
    type: String,
    unique: true,
    required: true
  },
  assignedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Indexes
taskSchema.index({ staffEmail: 1 });
taskSchema.index({ department: 1 });
taskSchema.index({ deadline: 1 });
taskSchema.index({ status: 1 });
taskSchema.index({ taskCode: 1 });

// Check if task is overdue
taskSchema.virtual('isOverdue').get(function() {
  return new Date() > this.deadline && this.status !== 'completed';
});

// Update status to overdue if deadline passed
taskSchema.pre('save', function(next) {
  if (this.isOverdue && this.status !== 'completed') {
    this.status = 'overdue';
  }
  next();
});

module.exports = mongoose.model('Task', taskSchema);