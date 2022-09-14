import { UserRepository } from "../repositories/user.repository";
import { User } from "../schema/user.model";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.getById(id);
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  async update(id: string, user: User): Promise<User | null> {
    return this.userRepository.update(id, user);
  }

  async delete(id: string): Promise<User | null> {
    return this.userRepository.delete(id);
  }
}
