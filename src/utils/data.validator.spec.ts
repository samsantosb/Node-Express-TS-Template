import { dataValidator } from "./data.validator";

describe("Data Validator", () => {
  it("should return a valid name", () => {
    expect(dataValidator.isValidName("John Doe")).toBe("John Doe");
  });
  it("should return a message if name is invalid", () => {
    expect(() => dataValidator.isValidName("Jo")).toThrowError(
      "Name is invalid"
    );
  });
  it("should return a valid email", () => {
    expect(dataValidator.isValidEmail("samsantosb@gmail.com")).toBe(
      "samsantosb@gmail.com"
    );
  });
  it("should return a message if email is invalid", () => {
    expect(() =>
      dataValidator.isValidEmail("samsantosbgmail.com")
    ).toThrowError("Email is invalid");
  });
  it("should return a valid age", () => {
    expect(dataValidator.isValidAge(25)).toBe(25);
  });
  it("should return a message if age is invalid", () => {
    expect(() => dataValidator.isValidAge(17)).toThrowError("Age is invalid");
  });
  it("should return a valid cpf", () => {
    expect(dataValidator.isValidCpf("04860724011")).toBe("04860724011");
  });
  it("should return a message if cpf is invalid", () => {
    expect(() => dataValidator.isValidCpf("0486072401")).toThrowError(
      "Cpf is invalid"
    );
  });
});
