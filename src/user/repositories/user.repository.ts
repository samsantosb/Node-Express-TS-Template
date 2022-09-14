import { User, UserModel } from "../schema/user.model";
import { Model, Types } from "mongoose";

export class userRepository {
  constructor(private readonly UserModel: Model<User>) {}

  async getAllUsers(): Promise<User[]> {
    return this.UserModel.find({});
  }

  async getUserById(id: string): Promise<User | null> {
    if (Types.ObjectId.isValid(id)) {
      return this.UserModel.findById(id);
    }
    return null;
  }

  async createUser(user: User): Promise<User> {
    return this.UserModel.create(user);
  }

  async update(id: string, user: User): Promise<User | null> {
    if (Types.ObjectId.isValid(id)) {
      return this.UserModel.findByIdAndUpdate(id, user, { new: true });
    }
    return null;
  }

  async delete(id: string) {
    if (Types.ObjectId.isValid(id)) {
      return this.UserModel.findByIdAndDelete(id);
    }
    return null;
  }
}

export const repo = new userRepository(UserModel);
