import { UserRepository } from "./../repositories/user.repository";
import { fakeUsers, updatedUser } from "./fake.user.data";

export const fakeUserRepository = {
  getAll: () => Promise.resolve(fakeUsers),
  getById: () => Promise.resolve(fakeUsers[0]),
  create: () => Promise.resolve(fakeUsers[0]),
  update: () => Promise.resolve(updatedUser),
  delete: () => Promise.resolve(fakeUsers[0]),
} as unknown as UserRepository;
