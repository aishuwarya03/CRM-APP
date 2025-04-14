// seedAdmin.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // adjust path if needed

const MONGO_URI = 'mongodb://127.0.0.1:27017/your-db-name'; // replace with your actual DB name

const seedAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI, {});

    const existingAdmin = await User.findOne({ username: 'admin' });
    if (existingAdmin) {
      console.log('Admin user already exists.');
      return process.exit();
    }

    const hashedPassword = await bcrypt.hash('password', 10);
    const adminUser = new User({
      username: 'admin@gmail.com',
      password: hashedPassword,
      role: 'admin',
    });

    await adminUser.save();
    console.log('✅ Admin user created!');
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding admin user:', err);
    process.exit(1);
  }
};

seedAdmin();
