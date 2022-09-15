import { CustomErrors } from "../../utils/error.handling";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user.model";
import { Types } from "mongoose";
import { invalidIdError, promiseError } from "../../utils/error.handling";
import { response } from "express";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAll(): Promise<User[] | CustomErrors> {
    try {
      const users = await this.userRepository.getAll();

      return users;
    } catch (error) {
      return promiseError(error);
    }
  }

  async getById(id: string): Promise<User | CustomErrors> {
    try {
      if (Types.ObjectId.isValid(id)) {
        const user = await this.userRepository.getById(id);
        return user;
      }
      return invalidIdError(id);
    } catch (error) {
      return promiseError(error);
    }
  }

  async create(user: User): Promise<User | CustomErrors> {
    try {
      const response = await this.userRepository.create(user);
      return response;
    } catch (error) {
      return promiseError(error);
    }
  }

  async update(id: string, user: User): Promise<User | CustomErrors> {
    try {
      if (Types.ObjectId.isValid(id)) {
        const updatedUser = await this.userRepository.update(id, user);
        return updatedUser;
      }
      return invalidIdError(id);
    } catch (error) {
      return promiseError(error);
    }
  }

  async delete(id: string): Promise<User | CustomErrors> {
    try {
      if (Types.ObjectId.isValid(id)) {
        const deletedUser = await this.userRepository.delete(id);
        return deletedUser;
      }
      return invalidIdError(id);
    } catch (error) {
      return promiseError(error);
    }
  }
}
