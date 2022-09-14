import { updatedUser } from "./../__mocks__/fake.user.data";
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
    it("should throw error if there is an error", async () => {
      jest
        .spyOn(fakeUserRepository, "getAll")
        .mockRejectedValueOnce(new Error("Error"));
      await expect(userService.getAll()).rejects.toThrowError(
        new Error("Error")
      );
    });
  });

  describe("getById", () => {
    it("should return a user", async () => {
      const user = await userService.getById("1");
      expect(user).toEqual(fakeUsers[0]);
    });
    it("should throw error if user not found", async () => {
      jest
        .spyOn(fakeUserRepository, "getById")
        .mockRejectedValueOnce(new Error("Error"));
      await expect(userService.getById("1")).rejects.toThrowError(
        new Error("Error")
      );
    });
    it("should call userRepository.getById method", () => {
      jest.spyOn(fakeUserRepository, "getById");
      userService.getById("1");
      expect(fakeUserRepository.getById).toHaveBeenCalled();
    });
    it("should throw error if there is an error", async () => {
      jest
        .spyOn(fakeUserRepository, "getById")
        .mockRejectedValueOnce(new Error("Error"));

      await expect(userService.getById("1")).rejects.toThrowError(
        new Error("Error")
      );
    });
  });

  describe("create", () => {
    it("should create a user", async () => {
      const user = await userService.create(fakeUsers[0]);
      expect(user).toEqual(fakeUsers[0]);
    });
    it("should throw error if there is an error", async () => {
      jest
        .spyOn(fakeUserRepository, "create")
        .mockRejectedValueOnce(new Error("Error"));
      await expect(userService.create(updatedUser)).rejects.toThrowError(
        new Error("Error")
      );
    });
    it("should call userRepository.create method", () => {
      jest.spyOn(fakeUserRepository, "create");
      userService.create(updatedUser);
      expect(fakeUserRepository.create).toHaveBeenCalled();
    });
  });

  describe("update", () => {
    it("should update a user", async () => {
      const user = await userService.update("1", updatedUser);
      expect(user).toEqual(updatedUser);
    });
    it("should throw error if there is an error", async () => {
      jest
        .spyOn(fakeUserRepository, "update")
        .mockRejectedValueOnce(new Error("Error"));
      await expect(userService.update("1", updatedUser)).rejects.toThrowError(
        new Error("Error")
      );
    });
    it("should call userRepository.update method", () => {
      jest.spyOn(fakeUserRepository, "update");
      userService.update("1", updatedUser);
      expect(fakeUserRepository.update).toHaveBeenCalled();
    });

    describe("delete", () => {
      it("should delete a user", async () => {
        const user = await userService.delete("1");
        expect(user).toEqual(fakeUsers[0]);
      });
      it("should throw error if there is an error", async () => {
        jest
          .spyOn(fakeUserRepository, "delete")
          .mockRejectedValueOnce(new Error("Error"));
        await expect(userService.delete("1")).rejects.toThrowError(
          new Error("Error")
        );
      });
      it("should call userRepository.delete method", () => {
        jest.spyOn(fakeUserRepository, "delete");
        userService.delete("1");
        expect(fakeUserRepository.delete).toHaveBeenCalled();
      });
    });
  });
});
