// models/user.ts
import mongoose, { models, Schema, Model, Document } from 'mongoose';

export interface UserDocument extends Document {
  address: string;
}

const UserSchema = new Schema<UserDocument>({
  address: {
    type: String,
    required: true,
  },
});

const UserModel: Model<UserDocument> = models.User || mongoose.model<UserDocument>('User', UserSchema);

export default UserModel;
