import { userFactory } from "./user.factory";

describe("UserFactory", () => {
  it("should create the user Domain", () => {
    expect(userFactory()).toBeDefined();
  });
});
