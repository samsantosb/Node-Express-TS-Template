import { UserRepository } from "../repositories/user.repository";
import { User } from "../schema/user.model";

class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.getUserById(id);
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.createUser(user);
  }

  async update(id: string, user: User): Promise<User | null> {
    return this.userRepository.update(id, user);
  }

  async delete(id: string): Promise<User | null> {
    return this.userRepository.delete(id);
  }
}
