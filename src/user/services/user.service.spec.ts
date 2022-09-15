import { fakeId, updatedUser } from "./../__mocks__/fake.user.data";
import { fakeUserRepository } from "../__mocks__/fake.user.repository";
import { fakeUsers } from "../__mocks__/fake.user.data";
import { UserService } from "./user.service";
import { jest } from "@jest/globals";

const userService = new UserService(fakeUserRepository);

describe("User Service", () => {
  describe("getAll", () => {
    it("should return all users", async () => {
      const users = await userService.getAll();
      expect(users).toEqual(fakeUsers);
    });
    it("should return an empty array if there is no users", async () => {
      jest.spyOn(fakeUserRepository, "getAll").mockResolvedValueOnce([]);
      const users = await userService.getAll();
      expect(users).toEqual([]);
    });
    it("should call userRepository.getAll method", () => {
      jest.spyOn(fakeUserRepository, "getAll");
      userService.getAll();
      expect(fakeUserRepository.getAll).toHaveBeenCalled();
    });
    it("should send the correct message if a promise Error Occurs", async () => {
      jest.spyOn(fakeUserRepository, "getAll").mockRejectedValueOnce("Error");
      const users = await userService.getAll();
      expect(users).toEqual({
        promiseError: { error: "Error", message: "Promise Error" },
      });
    });
  });

  describe("getById", () => {
    it("should return a user", async () => {
      const user = await userService.getById(fakeId);
      expect(user).toEqual(fakeUsers[0]);
    });
    it("should call userRepository.getById method", () => {
      jest.spyOn(fakeUserRepository, "getById");
      userService.getById(fakeId);
      expect(fakeUserRepository.getById).toHaveBeenCalled();
    });
    it("should send an error message in catch sentence", async () => {
      jest.spyOn(fakeUserRepository, "getById").mockRejectedValueOnce("Error");
      const user = await userService.getById(fakeId);
      expect(user).toEqual({
        promiseError: { error: "Error", message: "Promise Error" },
      });
    });
    it("should send an error message if the id is invaliod", async () => {
      const user = await userService.getById("invalidId");
      expect(user).toEqual({
        invalidIdError: {
          message: "Invalid id",
          id: "invalidId",
        },
      });
    });
  });

  describe("create", () => {
    it("should create a user", async () => {
      const user = await userService.create(fakeUsers[0]);
      expect(user).toEqual(fakeUsers[0]);
    });
    it("should call userRepository.create method", () => {
      jest.spyOn(fakeUserRepository, "create");
      userService.create(fakeUsers[0]);
      expect(fakeUserRepository.create).toHaveBeenCalled();
    });
    it("should send an error message in catch sentence", async () => {
      jest.spyOn(fakeUserRepository, "create").mockRejectedValueOnce("Error");
      const user = await userService.create(fakeUsers[0]);
      expect(user).toEqual({
        promiseError: { error: "Error", message: "Promise Error" },
      });
    });
  });

  describe("update", () => {
    it("should update a user", async () => {
      const user = await userService.update(fakeId, updatedUser);
      expect(user).toEqual(updatedUser);
    });
    it("should call userRepository.update method", () => {
      jest.spyOn(fakeUserRepository, "update");
      userService.update(fakeId, updatedUser);
      expect(fakeUserRepository.update).toHaveBeenCalled();
    });
    it("should send an error message in catch sentence", async () => {
      jest.spyOn(fakeUserRepository, "update").mockRejectedValueOnce("Error");
      const user = await userService.update(fakeId, updatedUser);
      expect(user).toEqual({
        promiseError: { error: "Error", message: "Promise Error" },
      });
    });
    it("should send an error message if the id is invaliod", async () => {
      const user = await userService.update("invalidId", updatedUser);
      expect(user).toEqual({
        invalidIdError: {
          message: "Invalid id",
          id: "invalidId",
        },
      });
    });
  });

  describe("delete", () => {
    it("should delete a user", async () => {
      const user = await userService.delete(fakeId);
      expect(user).toEqual(fakeUsers[0]);
    });
    it("should call userRepository.delete method", () => {
      jest.spyOn(fakeUserRepository, "delete");
      userService.delete(fakeId);
      expect(fakeUserRepository.delete).toHaveBeenCalled();
    });
    it("should send an error message in catch sentence", async () => {
      jest.spyOn(fakeUserRepository, "delete").mockRejectedValueOnce("Error");
      const user = await userService.delete(fakeId);
      expect(user).toEqual({
        promiseError: { error: "Error", message: "Promise Error" },
      });
    });
    it("should send an error message if the id is invaliod", async () => {
      const user = await userService.delete("invalidId");
      expect(user).toEqual({
        invalidIdError: {
          message: "Invalid id",
          id: "invalidId",
        },
      });
    });
  });
});
