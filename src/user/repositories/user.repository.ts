import { User, UserModel } from "../schema/user.model";
import { Model, Types } from "mongoose";

export class UserRepository {
  constructor(private readonly userModel: Model<User>) {}

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find({});
  }

  async getUserById(id: string): Promise<User | null> {
    if (Types.ObjectId.isValid(id)) {
      return this.userModel.findById(id);
    }
    return null;
  }

  async createUser(user: User): Promise<User> {
    return this.userModel.create(user);
  }

  async update(id: string, user: User): Promise<User | null> {
    if (Types.ObjectId.isValid(id)) {
      return this.userModel.findByIdAndUpdate(id, user, { new: true });
    }
    return null;
  }

  async delete(id: string) {
    if (Types.ObjectId.isValid(id)) {
      return this.userModel.findByIdAndDelete(id);
    }
    return null;
  }
}

export const repo = new UserRepository(UserModel);
