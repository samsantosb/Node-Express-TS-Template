import { User, UserModel } from "../schema/user.model";
import { Model, Types } from "mongoose";
import { UserDto } from "../dtos/user.dto";

export class UserRepository {
  constructor(private readonly userModel: Model<User>) {}

  async getAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async getById(id: string): Promise<User | null> {
    return this.userModel.findById(id);
  }

  async create(user: UserDto): Promise<User> {
    return this.userModel.create(user);
  }

  async update(id: string, user: UserDto): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}

export const repo = new UserRepository(UserModel);
