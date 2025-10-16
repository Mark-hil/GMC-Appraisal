const express = require('express');
const userController = require('../controllers/userController');
const { protect, restrictTo } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router
  .route('/')
  .get(restrictTo('hr', 'hod'), userController.getAllUsers)
  .post(restrictTo('hr'), userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(restrictTo('hr'), userController.deleteUser);

router
  .route('/department/:department')
  .get(userController.getUsersByDepartment);

module.exports = router;