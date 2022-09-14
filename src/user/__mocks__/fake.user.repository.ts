import { UserRepository } from "./../repositories/user.repository";
import { Model } from "mongoose";
import { User } from "../schema/user.model";
import { fakeUsers } from "./fake.user.data";

export const fakeUserRepository = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      resolve(fakeUsers);
      reject(new Error("Error"));
    });
  },
  getById: () => {
    return new Promise((resolve, reject) => {
      resolve(fakeUsers[0]);
      reject(new Error("Error"));
    });
  },
  create: () => {
    return new Promise((resolve, reject) => {
      resolve(fakeUsers[0]);
      reject(new Error("Error"));
    });
  },
  update: () => {
    return new Promise((resolve, reject) => {
      resolve(fakeUsers[0]);
      reject(new Error("Error"));
    });
  },
  delete: () => {
    return new Promise((resolve, reject) => {
      resolve(fakeUsers[0]);
      reject(new Error("Error"));
    });
  },
} as any as UserRepository;
