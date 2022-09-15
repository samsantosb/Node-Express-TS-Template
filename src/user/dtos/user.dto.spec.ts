import { fakeUsers } from "./../__mocks__/fake.user.data";
import { UserDto } from "./user.dto";

const user = new UserDto(fakeUsers[0]);

describe("UserDto", () => {
  it("should be defined", () => {
    expect(user).toBeDefined();
  });
  it("should throw error if CPF is invalid", () => {
    expect(() => new UserDto({ ...fakeUsers[0], cpf: "123" })).toThrowError();
  });
  it("should throw error if email is invalid", () => {
    expect(() => new UserDto({ ...fakeUsers[0], email: "123" })).toThrowError();
  });
  it("should throw error if age is invalid", () => {
    expect(() => new UserDto({ ...fakeUsers[0], age: 17 })).toThrowError();
  });
  it("should throw error if name is invalid", () => {
    expect(() => new UserDto({ ...fakeUsers[0], name: "12" })).toThrowError();
  });
});
