import { UserService } from "./../services/user.service";
import { fakeUsers } from "./fake.user.data";

export const fakeUserService = {
  getAll: () => Promise.resolve(fakeUsers),
  getById: () => Promise.resolve(fakeUsers[0]),
  create: () => Promise.resolve(fakeUsers[0]),
  update: () => Promise.resolve(fakeUsers[0]),
  delete: () => Promise.resolve(fakeUsers[0]),
} as any as UserService;
