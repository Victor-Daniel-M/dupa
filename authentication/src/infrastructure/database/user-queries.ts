import { User } from '../../domain/entities/user';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const UserModel = mongoose.model<User & mongoose.Document>('User', userSchema);

export async function findUsers(): Promise<User[]> {
  return await UserModel.find();
}

export async function findUserByEmail(email: string): Promise<User | null> {
  return await UserModel.findOne({ email });
}

export async function saveUser(user: User): Promise<User> {
  const userModel = new UserModel(user);
  await userModel.save();
  return userModel;
}

export async function deleteUser(id: string): Promise<void> {
  await UserModel.findByIdAndDelete(id);
}
