import { IUserDto } from "./../dtos/user.dto";
import { UserDto } from "../dtos/user.dto";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../schema/user.model";

export class UserService {
  constructor(
    private readonly UserDto: IUserDto,
    private readonly userRepository: UserRepository
  ) {}

  async getAllUsers(): Promise<User[]> {
    try {
      return this.userRepository.getAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUserById(id: string): Promise<User | null> {
    try {
      return this.userRepository.getById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async createUser(user: User): Promise<User> {
    const newUser = new this.UserDto(user.name, user.email, user.age, user.cpf);
    try {
      return this.userRepository.create(newUser);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, user: User): Promise<User | null> {
    const newUser = new this.UserDto(user.name, user.email, user.age, user.cpf);
    try {
      return this.userRepository.update(id, newUser);
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<User | null> {
    try {
      return this.userRepository.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
