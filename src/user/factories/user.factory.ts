import { UserService } from "./../services/user.service";
import { UserRepository } from "./../repositories/user.repository";
import { UserModel } from "../models/user.model";
import { UserController } from "../controllers/user.controller";

export function userFactory() {
  const userRepository = new UserRepository(UserModel);
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);
  return userController;
}

export const user = userFactory();
