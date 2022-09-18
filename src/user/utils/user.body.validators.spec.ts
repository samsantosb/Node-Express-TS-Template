import { invalidBody } from "./user.body.validator";
import { Request } from "express";
import { mockRequest } from "../__mocks__/fake.user.routes";

const request = mockRequest();

describe("UserBodyValidator", () => {
  it("should return true if body is invalid", () => {
    request.body = {
      name: "John Doe",
      email: "robson",
      age: 22,
      cpf: "04860724011",
      car: "fiesta",
    };
    expect(invalidBody(request)).toBe(true);
  });
  it("should return false if body is valid", () => {
    request.body = {
      name: "John Doe",
      email: "robson",
      age: 22,
      cpf: "04860724011",
    };
    expect(invalidBody(request)).toBe(false);
  });
});
