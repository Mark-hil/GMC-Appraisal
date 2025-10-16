const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      errors: errors.array()
    });
  }
  next();
};

const validateReview = [
  body('staffName').notEmpty().withMessage('Staff name is required'),
  body('staffEmail').isEmail().withMessage('Valid staff email is required'),
  body('department').isIn([
    'MINE OPERATION', 'MINE PLANNING AND ENGINEERING', 'PORT OPERATION', 
    'SECURITY', 'SUPPLY CHAIN', 'ASSAY LAB', 'ASSET MANAGEMENT', 
    'CARBONATE PLANT', 'CIVIL', 'COMMUNITY RELATIONS', 'ELECTRIC SHOP',
    'ENVIRONMENT', 'FINANCE', 'GEOLOGY & SURVEY', 'HD/EME', 
    'HEALTH & SAFETY', 'HOSPITAL', 'HUMAN CAPITAL', 'I.T.', 
    'LIGHT DUTY', 'MECHANICAL WORKSHOP', 'METALLURGY'
  ]).withMessage('Valid department is required'),
  body('jobTitle').notEmpty().withMessage('Job title is required'),
  body('periodFrom').isDate().withMessage('Valid period from date is required'),
  body('periodTo').isDate().withMessage('Valid period to date is required'),
  handleValidationErrors
];

const validateTask = [
  body('title').notEmpty().withMessage('Task title is required'),
  body('description').notEmpty().withMessage('Task description is required'),
  body('department').isIn([
    'MINE OPERATION', 'MINE PLANNING AND ENGINEERING', 'PORT OPERATION', 
    'SECURITY', 'SUPPLY CHAIN', 'ASSAY LAB', 'ASSET MANAGEMENT', 
    'CARBONATE PLANT', 'CIVIL', 'COMMUNITY RELATIONS', 'ELECTRIC SHOP',
    'ENVIRONMENT', 'FINANCE', 'GEOLOGY & SURVEY', 'HD/EME', 
    'HEALTH & SAFETY', 'HOSPITAL', 'HUMAN CAPITAL', 'I.T.', 
    'LIGHT DUTY', 'MECHANICAL WORKSHOP', 'METALLURGY'
  ]).withMessage('Valid department is required'),
  body('staffEmail').isEmail().withMessage('Valid staff email is required'),
  body('peerEmail').optional().isEmail().withMessage('Valid peer email is required'),
  body('type').isIn(['objective', 'kpa', 'training', 'review']).withMessage('Valid task type is required'),
  body('priority').isIn(['low', 'medium', 'high', 'urgent']).withMessage('Valid priority is required'),
  body('deadline').isDate().withMessage('Valid deadline is required'),
  handleValidationErrors
];

const validateKPA = [
  body('title').notEmpty().withMessage('KPA title is required'),
  body('department').isIn([
    'MINE OPERATION', 'MINE PLANNING AND ENGINEERING', 'PORT OPERATION', 
    'SECURITY', 'SUPPLY CHAIN', 'ASSAY LAB', 'ASSET MANAGEMENT', 
    'CARBONATE PLANT', 'CIVIL', 'COMMUNITY RELATIONS', 'ELECTRIC SHOP',
    'ENVIRONMENT', 'FINANCE', 'GEOLOGY & SURVEY', 'HD/EME', 
    'HEALTH & SAFETY', 'HOSPITAL', 'HUMAN CAPITAL', 'I.T.', 
    'LIGHT DUTY', 'MECHANICAL WORKSHOP', 'METALLURGY'
  ]).withMessage('Valid department is required'),
  handleValidationErrors
];

module.exports = {
  validateReview,
  validateTask,
  validateKPA,
  handleValidationErrors
};