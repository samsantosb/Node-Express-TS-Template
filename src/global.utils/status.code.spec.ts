import { StatusCode } from "./status.code";

describe("StatusCode", () => {
  it("should create the status code", () => {
    expect(StatusCode).toBeDefined();
  });
  it("should create the status code 200", () => {
    expect(StatusCode.OK).toEqual(200);
  });
  it("should create the status code 201", () => {
    expect(StatusCode.CREATED).toEqual(201);
  });
  it("should create the status code 204", () => {
    expect(StatusCode.NO_CONTENT).toEqual(204);
  });
  it("should create the status code 400", () => {
    expect(StatusCode.BAD_REQUEST).toEqual(400);
  });
  it("should create the status code 401", () => {
    expect(StatusCode.UNAUTHORIZED).toEqual(401);
  });
  it("should create the status code 403", () => {
    expect(StatusCode.FORBIDDEN).toEqual(403);
  });
  it("should create the status code 404", () => {
    expect(StatusCode.NOT_FOUND).toEqual(404);
  });
  it("should create the status code 500", () => {
    expect(StatusCode.INTERNAL_SERVER_ERROR).toEqual(500);
  });
  it("should create the status code 501", () => {
    expect(StatusCode.NOT_IMPLEMENTED).toEqual(501);
  });
  it("should create the status code 502", () => {
    expect(StatusCode.BAD_GATEWAY).toEqual(502);
  });
  it("should create the status code 503", () => {
    expect(StatusCode.SERVICE_UNAVAILABLE).toEqual(503);
  });
  it("should create the status code 504", () => {
    expect(StatusCode.GATEWAY_TIMEOUT).toEqual(504);
  });
});
