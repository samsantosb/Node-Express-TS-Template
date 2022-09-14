import { userValidator } from "./user.validator";

describe("Data Validator", () => {
  it("should return a valid name", () => {
    expect(userValidator.isValidName("John Doe")).toBe("John Doe");
  });
  it("should return a message if name is invalid", () => {
    expect(() => userValidator.isValidName("Jo")).toThrowError(
      "Name is invalid"
    );
  });
  it("should return a valid email", () => {
    expect(userValidator.isValidEmail("samsantosb@gmail.com")).toBe(
      "samsantosb@gmail.com"
    );
  });
  it("should return a message if email is invalid", () => {
    expect(() =>
      userValidator.isValidEmail("samsantosbgmail.com")
    ).toThrowError("Email is invalid");
  });
  it("should return a valid age", () => {
    expect(userValidator.isValidAge(25)).toBe(25);
  });
  it("should return a message if age is invalid", () => {
    expect(() => userValidator.isValidAge(17)).toThrowError("Age is invalid");
  });
  it("should return a valid cpf", () => {
    expect(userValidator.isValidCpf("04860724011")).toBe("04860724011");
  });
  it("should return a message if cpf is invalid", () => {
    expect(() => userValidator.isValidCpf("0486072401")).toThrowError(
      "Cpf is invalid"
    );
  });
});
