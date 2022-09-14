import { User, UserModel } from "../models/user.model";
import { Model, Types } from "mongoose";

export class UserRepository {
  constructor(private readonly userModel: Model<User>) {}

  async getAll(): Promise<User[]> {
    const users = await this.userModel.find();
    if (!users) {
      return [] as User[];
    }
    return users;
  }

  async getById(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (user === null) {
      return {} as User;
    }
    return user;
  }

  async create(user: User): Promise<User> {
    return this.userModel.create(user);
  }

  async update(id: string, user: User): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, user, {
      new: true,
    });
    if (updatedUser === null) {
      return {} as User;
    }
    return updatedUser;
  }

  async delete(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (deletedUser === null) {
      return {} as User;
    }
    return deletedUser;
  }
}

export const repo = new UserRepository(UserModel);
