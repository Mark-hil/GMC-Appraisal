const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config();

const users = [
  {
    name: 'HR Admin',
    email: 'hr@gmc.com',
    password: 'password123',
    department: 'HUMAN CAPITAL',
    jobTitle: 'HR Manager',
    role: 'hr'
  },
  {
    name: 'Mine Operations HOD',
    email: 'mine.hod@gmc.com',
    password: 'password123',
    department: 'MINE OPERATION',
    jobTitle: 'Head of Department',
    role: 'hod'
  },
  {
    name: 'John Doe',
    email: 'john.doe@gmc.com',
    password: 'password123',
    department: 'MINE OPERATION',
    jobTitle: 'Mining Engineer',
    role: 'staff'
  }
];

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to database');

    await User.deleteMany();
    console.log('Data destroyed...');

    await User.create(users);
    console.log('Data imported...');

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI );

    await User.deleteMany();
    console.log('Data destroyed...');

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}