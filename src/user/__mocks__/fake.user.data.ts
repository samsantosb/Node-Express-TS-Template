import { User } from "../models/user.model";

export const fakeUsers: User[] = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    age: 25,
    cpf: "04860724011",
  },
  {
    name: "Bob Martin",
    email: "bob@gmail.com",
    age: 32,
    cpf: "61703191005",
  },
  {
    name: "Julia Smith",
    email: "jul@hotmail.com",
    age: 44,
    cpf: "56099666044",
  },
];

export const updatedUser = {
  name: "John Doe",
  email: "john@hotmail.com",
  age: 25,
  cpf: "04860724011",
};

export const fakeId = "632130d41623c49bf7b1c7e9";
