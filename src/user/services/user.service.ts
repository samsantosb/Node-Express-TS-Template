import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user.model";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    try {
      const users = await this.userRepository.getAll();

      return users;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUserById(id: string): Promise<User> {
    try {
      return this.userRepository.getById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async createUser(user: User): Promise<User> {
    try {
      return this.userRepository.create(user);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, user: User): Promise<User> {
    try {
      return this.userRepository.update(id, user);
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<User> {
    try {
      return this.userRepository.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
