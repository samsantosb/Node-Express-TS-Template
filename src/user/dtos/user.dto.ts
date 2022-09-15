import { emailRegex } from "../utils/regex";

interface IUser {
  id?: string;
  name: string;
  email: string;
  age: number;
  cpf: string;
}

export class UserDto {
  user: IUser;
  name: string;
  email: string;
  age: number;
  cpf: string;

  constructor(user: IUser) {
    this.name = this.isValidName(user.name);
    this.email = this.isValidEmail(user.email);
    this.age = this.isValidAge(user.age);
    this.cpf = this.isValidCpf(user.cpf);
  }

  isValidName(name: string): string {
    if (name.length >= 3) {
      return name;
    }
    throw new Error("Name is invalid");
  }
  isValidEmail(email: string): string {
    if (email.toLowerCase().match(emailRegex)) {
      return email;
    }
    throw new Error("Email is invalid");
  }
  isValidAge(age: number): number {
    if (age >= 18) {
      return age;
    }
    throw new Error("Age is invalid");
  }
  isValidCpf(cpf: string): string {
    if (cpf.length === 11) {
      return cpf;
    }
    throw new Error("Cpf is invalid");
  }
}
