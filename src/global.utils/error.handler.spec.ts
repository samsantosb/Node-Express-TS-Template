import { promiseError, invalidIdError } from "./error.handler";

describe("ErrorHandler", () => {
  it("should create the promise error", () => {
    const error = promiseError("error");
    expect(error).toBeDefined();
  });

  it("should create the invalid id error", () => {
    const error = invalidIdError("id");
    expect(error).toBeDefined();
  });
});
