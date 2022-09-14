import { User, UserModel } from "../schema/user.model";
import { Model, Types } from "mongoose";

export class UserRepository {
  constructor(private readonly userModel: Model<User>) {}

  async getAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async getById(id: string): Promise<User | null> {
    return this.userModel.findById(id);
  }

  async create(user: User): Promise<User> {
    return this.userModel.create(user);
  }

  async update(id: string, user: User): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}

export const repo = new UserRepository(UserModel);
