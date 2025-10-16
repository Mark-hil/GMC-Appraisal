// Database connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
      maxPoolSize: 10, // Maintain up to 10 socket connections
      minPoolSize: 5, // Maintain at least 5 socket connections
      retryWrites: true,
      w: 'majority'
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    
    if (error.name === 'MongoServerSelectionError') {
      console.log('💡 Troubleshooting tips:');
      console.log('1. Check if MongoDB server is running');
      console.log('2. Verify connection string format');
      console.log('3. Check network connectivity');
      console.log('4. Verify authentication credentials');
      console.log('5. Ensure IP is whitelisted if using cloud MongoDB');
    }
    
    process.exit(1);
  }
};