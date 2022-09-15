import { Request } from "express";

export function invalidBody(req: Request) {
  const user = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    cpf: req.body.cpf,
  };

  const jsonUser = JSON.stringify(user);
  const jsonBody = JSON.stringify(req.body);

  if (jsonUser !== jsonBody) {
    return true;
  }
  return false;
}
