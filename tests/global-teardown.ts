require('tsconfig-paths/register');
// import { UserSchema } from '@src/auth/domain/user.entity';
// import * as mongoose from 'mongoose';

async function tearDown() {
  // await mongoose.connect(
  //   `mongodb://127.0.0.1:27017/chapChapIdentityServiceDB`,
  //   // { useNewUrlParser: true, useUnifiedTopology: true },
  // );
  // await mongoose.model('users', UserSchema).deleteMany({});
  // await mongoose.disconnect();
}

export default tearDown;
