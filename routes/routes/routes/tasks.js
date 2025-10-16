const express = require('express');
const taskController = require('../controllers/taskController');
const { validateTask } = require('../middleware/validation');
const { protect, restrictTo } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router
  .route('/')
  .get(taskController.getAllTasks)
  .post(restrictTo('hr', 'hod'), validateTask, taskController.createTask);

router
  .route('/:id')
  .get(taskController.getTask)
  .patch(taskController.updateTask)
  .delete(restrictTo('hr', 'hod'), taskController.deleteTask);

router
  .route('/code/:code')
  .get(taskController.getTaskByCode);

router
  .route('/:id/status')
  .patch(taskController.updateTaskStatus);

module.exports = router;