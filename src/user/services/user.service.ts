import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user.model";
import { Types } from "mongoose";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAll(): Promise<User[]> {
    try {
      const users = await this.userRepository.getAll();

      return users;
    } catch (error) {
      throw new Error("Error");
    }
  }

  async getById(id: string): Promise<User> {
    try {
      if (!Types.ObjectId.isValid(id)) {
        const user = await this.userRepository.getById(id);
        return user;
      }
      throw new Error(`Invalid id: ${id}`);
    } catch (error) {
      throw new Error("Error");
    }
  }

  async create(user: User): Promise<User> {
    try {
      return this.userRepository.create(user);
    } catch (error) {
      throw new Error("Error");
    }
  }

  async update(id: string, user: User): Promise<User> {
    try {
      if (!Types.ObjectId.isValid(id)) {
        const updatedUser = await this.userRepository.update(id, user);
        return updatedUser;
      }
      throw new Error(`Invalid id: ${id}`);
    } catch (error) {
      throw new Error("Error");
    }
  }

  async delete(id: string): Promise<User> {
    try {
      if (!Types.ObjectId.isValid(id)) {
        const deletedUser = await this.userRepository.delete(id);
        return deletedUser;
      }
      throw new Error(`Invalid id: ${id}`);
    } catch (error) {
      throw new Error("Error");
    }
  }
}
