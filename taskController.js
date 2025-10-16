const Task = require('../models/Task');
const User = require('../models/User');
const Review = require('../models/Review');
const Notification = require('../models/Notification');
const AppError = require('../utils/appError');
const emailService = require('../utils/email');

exports.getAllTasks = async (req, res, next) => {
  try {
    const {
      department,
      status,
      type,
      priority,
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    const filter = { isActive: true };
    
    if (department) filter.department = department;
    if (status) filter.status = status;
    if (type) filter.type = type;
    if (priority) filter.priority = priority;
    
    if (req.user.role === 'staff') {
      filter.staffEmail = req.user.email;
    } else if (req.user.role === 'hod') {
      filter.department = req.user.department;
    }

    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const tasks = await Task.find(filter)
      .populate('assignedBy', 'name email')
      .populate('review')
      .sort(sortOptions)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Task.countDocuments(filter);

    res.status(200).json({
      status: 'success',
      results: tasks.length,
      data: {
        tasks,
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

exports.getTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id)
      .populate('assignedBy', 'name email')
      .populate('review');

    if (!task) {
      return next(new AppError('No task found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        task
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const taskCode = `TASK-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    const taskData = {
      ...req.body,
      taskCode,
      assignedBy: req.user._id
    };

    const task = await Task.create(taskData);

    await Notification.create({
      user: req.user._id,
      type: 'task_assigned',
      title: 'Task Created',
      message: `Task "${task.title}" has been created and assigned.`,
      relatedTask: task._id
    });

    if (req.body.sendEmail) {
      const staffLink = `${process.env.CLIENT_URL}/assessment/staff/${task.taskCode}`;
      const peerLink = task.peerEmail ? 
        `${process.env.CLIENT_URL}/assessment/peer/${task.taskCode}` : null;

      await emailService.sendTaskAssignment(task, staffLink, peerLink);
      
      if (task.staffEmail) {
        await emailService.sendStaffNotification(task, staffLink);
      }
      
      if (task.peerEmail) {
        await emailService.sendPeerNotification(task, peerLink);
      }
    }

    res.status(201).json({
      status: 'success',
      data: {
        task
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!task) {
      return next(new AppError('No task found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        task
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!task) {
      return next(new AppError('No task found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    next(error);
  }
};

exports.getTaskByCode = async (req, res, next) => {
  try {
    const task = await Task.findOne({ 
      taskCode: req.params.code,
      isActive: true 
    }).populate('review');

    if (!task) {
      return next(new AppError('No task found with that code', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        task
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.updateTaskStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status },
      {
        new: true,
        runValidators: true
      }
    );

    if (!task) {
      return next(new AppError('No task found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        task
      }
    });
  } catch (error) {
    next(error);
  }
};