const mongoose = require('mongoose');
require('dotenv').config();

const testConnection = async () => {
  console.log('🔗 Testing MongoDB connection...');
  console.log(`Connection string: ${process.env.MONGODB_URI.replace(/:[^:]*@/, ':****@')}`);
  
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });
    
    console.log('✅ MongoDB connection successful!');
    
    // Test basic operations
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    console.log(`📁 Available collections: ${collections.map(c => c.name).join(', ') || 'None'}`);
    
    await mongoose.connection.close();
    console.log('🔌 Connection closed.');
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:');
    console.error('Error:', error.message);
    
    if (error.name === 'MongoParseError') {
      console.log('💡 Check your MONGODB_URI format in .env file');
    } else if (error.name === 'MongoServerSelectionError') {
      console.log('💡 Cannot reach MongoDB server. Check:');
      console.log('   - Server is running');
      console.log('   - Network connectivity');
      console.log('   - Firewall settings');
      console.log('   - Authentication credentials');
    } else if (error.name === 'MongoAuthenticationError') {
      console.log('💡 Authentication failed. Check username/password');
    }
  }
};

testConnection();