import { updatedUser } from "./../__mocks__/fake.user.data";
import { fakeUserModel } from "../__mocks__/fake.user.model";
import { fakeUsers } from "../__mocks__/fake.user.data";
import { UserRepository } from "./user.repository";
import { jest } from "@jest/globals";

const userRepository = new UserRepository(fakeUserModel);

describe("User Repository", () => {
  describe("getAll", () => {
    it("should return all users", async () => {
      const users = await userRepository.getAll();
      expect(users).toEqual(fakeUsers);
    });
    it("should return an empty array if there is no users", async () => {
      jest.spyOn(fakeUserModel, "find").mockResolvedValueOnce([]);
      const users = await userRepository.getAll();
      expect(users).toEqual([]);
    });
    it("should call userModel.find method", () => {
      jest.spyOn(fakeUserModel, "find");
      userRepository.getAll();
      expect(fakeUserModel.find).toHaveBeenCalled();
    });
  });
  describe("getUserById", () => {
    it("should return a user", async () => {
      const user = await userRepository.getById("1");
      expect(user).toEqual(fakeUsers[0]);
    });
    it("should return null if user is not found", async () => {
      jest.spyOn(fakeUserModel, "findById").mockResolvedValueOnce(null);
      const user = await userRepository.getById("1");
      expect(user).toBeNull();
    });
    it("should call userModel.findById method", () => {
      jest.spyOn(fakeUserModel, "findById");
      userRepository.getById("1");
    });
  });
  describe("create", () => {
    it("should create a user", async () => {
      const user = await userRepository.create(fakeUsers[0]);
      expect(user).toEqual(fakeUsers[0]);
    });
    it("should call userModel.create method", () => {
      jest.spyOn(fakeUserModel, "create");
      userRepository.create(fakeUsers[0]);
      expect(fakeUserModel.create).toHaveBeenCalled();
    });
  });
  describe("update", () => {
    it("should update a user", async () => {
      const user = await userRepository.update("1", updatedUser);
      expect(user).toEqual(updatedUser);
    });
    it("should call userModel.findByIdAndUpdate method", () => {
      jest.spyOn(fakeUserModel, "findByIdAndUpdate");
      userRepository.update("1", fakeUsers[0]);
      expect(fakeUserModel.findByIdAndUpdate).toHaveBeenCalled();
    });
  });
  describe("delete", () => {
    it("should delete a user", async () => {
      const user = await userRepository.delete("1");
      expect(user).toEqual(fakeUsers[0]);
    });
    it("should call userModel.findByIdAndDelete method", () => {
      jest.spyOn(fakeUserModel, "findByIdAndDelete");
      userRepository.delete("1");
      expect(fakeUserModel.findByIdAndDelete).toHaveBeenCalled();
    });
  });
});
