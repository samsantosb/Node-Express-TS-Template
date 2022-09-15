export type PromiseError = {
  promiseError: {
    message: string;
    error: unknown;
  };
};

export function promiseError(error: unknown): PromiseError {
  return {
    promiseError: {
      message: "Promise Error",
      error: error,
    },
  };
}

export type InvalidIdError = {
  invalidIdError: {
    message: string;
    id: string;
  };
};

export function invalidIdError(id: string): InvalidIdError {
  return {
    invalidIdError: {
      message: "Invalid id",
      id: id,
    },
  };
}

export type InvalidBodyError = {
  InvalidBodyError: {
    message: string;
    body: unknown;
  };
};

export function invalidBodyError(body: unknown): InvalidBodyError {
  return {
    InvalidBodyError: {
      message: "Invalid body",
      body: body,
    },
  };
}

export type CustomErrors = PromiseError | InvalidIdError | InvalidBodyError;
