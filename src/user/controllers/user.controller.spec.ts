import { mockResponse, mockRequest } from "../__mocks__/fake.routes";
import { fakeUserService } from "../__mocks__/fake.user.service";
import { UserController } from "./user.controller";
import { fakeUsers } from "../__mocks__/fake.user.data";
import { StatusCode } from "../../global.utils/status.code";

const userController = new UserController(fakeUserService);
const req = mockRequest();
const res = mockResponse();

describe("User Controller", () => {
  describe("getAll", () => {
    it("should return all users", async () => {
      await userController.getAll(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeUsers);
    });
    it("should return error if response is error", async () => {
      fakeUserService.getAll = jest
        .fn()
        .mockReturnValueOnce({ promiseError: "error" });
      await userController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
      expect(res.json).toHaveBeenCalledWith({ promiseError: "error" });
    });
  });

  describe("getById", () => {
    it("should return user by id", async () => {
      req.params.id = "1";
      await userController.getById(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeUsers[0]);
    });
    it("should return error if response is error", async () => {
      fakeUserService.getById = jest
        .fn()
        .mockReturnValueOnce({ promiseError: "error" });
      await userController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
      expect(res.json).toHaveBeenCalledWith({ promiseError: "error" });
    });
    it("should return error if id is invalid", async () => {
      fakeUserService.getById = jest
        .fn()
        .mockReturnValueOnce({ invalidIdError: "error" });
      await userController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
      expect(res.json).toHaveBeenCalledWith({ invalidIdError: "error" });
    });
  });

  describe("create", () => {
    it("should create user", async () => {
      req.body = fakeUsers[0];
      await userController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED);
      expect(res.json).toHaveBeenCalledWith(fakeUsers[0]);
    });
    it("should return error if response is error", async () => {
      fakeUserService.create = jest
        .fn()
        .mockReturnValueOnce({ promiseError: "error" });
      await userController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
      expect(res.json).toHaveBeenCalledWith({ promiseError: "error" });
    });
  });

  describe("update", () => {
    it("should update user", async () => {
      req.body = fakeUsers[0];
      await userController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
      expect(res.json).toHaveBeenCalledWith(fakeUsers[0]);
    });
    it("should return error if response is error", async () => {
      fakeUserService.update = jest
        .fn()
        .mockReturnValueOnce({ error: "error" });
      await userController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
      expect(res.json).toHaveBeenCalledWith({ promiseError: "error" });
    });
  });

  describe("delete", () => {
    it("should delete user", async () => {
      req.params.id = "1";
      await userController.delete(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
      expect(res.json).toHaveBeenCalledWith(fakeUsers[0]);
    });
    it("should return error if response is error", async () => {
      fakeUserService.delete = jest
        .fn()
        .mockReturnValueOnce({ promiseError: "error" });
      await userController.delete(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
      expect(res.json).toHaveBeenCalledWith({ promiseError: "error" });
    });
  });
});
