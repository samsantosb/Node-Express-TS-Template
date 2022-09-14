import { User } from "../model/user.model";

export const fakeUsers: User[] = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    age: 25,
    cpf: "048.607.240-11",
  },
  {
    name: "Bob Martin",
    email: "bob@gmail.com",
    age: 32,
    cpf: "617.031.910-05",
  },
  {
    name: "Julia Smith",
    email: "jul@hotmail.com",
    age: 44,
    cpf: "560.996.660-44",
  },
];

export const updatedUser = {
  name: "John Doe",
  email: "john@hotmail.com",
  age: 25,
  cpf: "048.607.240-11",
};
