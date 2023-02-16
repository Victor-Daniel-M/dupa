import mongoose from 'mongoose';

export function connectToMongoDB() {
  mongoose.connect('mongodb://localhost:27017/mydb', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  });
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
  });
  return connection;
}
