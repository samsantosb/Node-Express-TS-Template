import { mockResponse, mockRequest } from "../__mocks__/fake.user.routes";
import { fakeUserService } from "../__mocks__/fake.user.service";
import { UserController } from "./user.controller";
import { fakeId, fakeUsers } from "../__mocks__/fake.user.data";
import { StatusCode } from "../../global.utils/status.code.ts";

const userController = new UserController(fakeUserService);
const req = mockRequest();
const res = mockResponse();

describe("User Controller", () => {
  describe("getAll", () => {
    it("should return all users", async () => {
      await userController.getAll(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeUsers);
    });
    it("should return status code 200", async () => {
      await userController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("should call userService getAll", async () => {
      const spy = jest.spyOn(fakeUserService, "getAll");
      await userController.getAll(req, res);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe("getById", () => {
    it("should return user by id", async () => {
      req.params.id = fakeId;
      await userController.getById(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeUsers[0]);
    });
    it("should return status code 200", async () => {
      req.params.id = fakeId;
      await userController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("should call userService getById", async () => {
      const spy = jest.spyOn(fakeUserService, "getById");
      req.params.id = fakeId;
      await userController.getById(req, res);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe("create", () => {
    it("should create user", async () => {
      req.body = fakeUsers[0];
      await userController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED);
      expect(res.json).toHaveBeenCalledWith(fakeUsers[0]);
    });
    it("should return status code 201", async () => {
      req.body = fakeUsers[0];
      await userController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED);
    });
    it("should call userService create", async () => {
      const spy = jest.spyOn(fakeUserService, "create");
      req.body = fakeUsers[0];
      await userController.create(req, res);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe("update", () => {
    it("should update user", async () => {
      req.body = fakeUsers[0];
      await userController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
      expect(res.json).toHaveBeenCalledWith(fakeUsers[0]);
    });
    it("should return status code 200", async () => {
      req.body = fakeUsers[0];
      await userController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("should call userService update", async () => {
      const spy = jest.spyOn(fakeUserService, "update");
      req.body = fakeUsers[0];
      await userController.update(req, res);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe("delete", () => {
    it("should delete user", async () => {
      req.params.id = fakeId;
      await userController.delete(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
      expect(res.json).toHaveBeenCalledWith(fakeUsers[0]);
    });
    it("should return status code 200", async () => {
      req.params.id = fakeId;
      await userController.delete(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("should call userService delete", async () => {
      const spy = jest.spyOn(fakeUserService, "delete");
      req.params.id = fakeId;
      await userController.delete(req, res);
      expect(spy).toHaveBeenCalled();
    });
  });
});
