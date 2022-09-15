import { fakeUsers } from "./../__mocks__/fake.user.data";
import { UserDto } from "./user.dto";

const user = new UserDto(fakeUsers[0]);

describe("UserDto", () => {
  it("should be defined", () => {
    expect(user).toBeDefined();
  });
  it("should have name", () => {
    expect(user.name).toBeDefined();
  });
  it("should have email", () => {
    expect(user.email).toBeDefined();
  });
  it("should have age", () => {
    expect(user.age).toBeDefined();
  });
  it("should have cpf", () => {
    expect(user.cpf).toBeDefined();
  });
});
