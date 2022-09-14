import { UserService } from "./../services/user.service";
import { UserRepository } from "./../repositories/user.repository";
import { UserModel } from "../model/user.model";

export function userFactory() {
  const userRepository = new UserRepository(UserModel);
  const userService = new UserService(userRepository);
  return userService;
}
