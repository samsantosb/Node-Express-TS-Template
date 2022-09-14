import { User, UserModel } from "../schema/user.model";
import { Model } from "mongoose";

class userRepository {
  constructor(private readonly UserModel: Model<User>) {}
  async getAllUsers(): Promise<User[]> {
    return await this.UserModel.find({});
  }
}

export const repo = new userRepository(UserModel);
