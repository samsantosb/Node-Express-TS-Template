import { Model } from "mongoose";
import { User, UserModel } from "../models/user.model";
import { fakeUsers, updatedUser } from "./fake.user.data";

export const fakeUserModel = {
  find: () => Promise.resolve(fakeUsers as User[]),
  findById: () => Promise.resolve(fakeUsers[0] as User),
  create: () => Promise.resolve(fakeUsers[0] as User),
  findByIdAndUpdate: () => Promise.resolve(updatedUser as User),
  findByIdAndDelete: () => Promise.resolve(fakeUsers[0] as User),
} as unknown as Model<User>;
