import { cpfRegex } from "./../utils/regex";
import { emailRegex } from "../utils/regex";
import { User } from "../models/user.model";

export interface IUserDto {
  new (name: string, email: string, age: number, cpf: string): User;
}

export class UserDto {
  name: string;
  email: string;
  age: number;
  cpf: string;

  constructor(name: string, email: string, age: number, cpf: string) {
    this.name = this.isValidName(name);
    this.email = this.isValidEmail(email);
    this.age = this.isValidAge(age);
    this.cpf = this.isValidCpf(cpf);
  }

  private isValidName(name: string): string {
    if (name.length >= 3) {
      return name;
    }
    throw new Error("Name is invalid");
  }
  private isValidEmail(email: string): string {
    if (email.toLowerCase().match(emailRegex)) {
      return email;
    }
    throw new Error("Email is invalid");
  }
  private isValidAge(age: number): number {
    if (age >= 18) {
      return age;
    }
    throw new Error("Age is invalid");
  }
  private isValidCpf(cpf: string): string {
    if (cpf.length === 11 && cpf.match(cpfRegex)) {
      return cpf;
    }
    throw new Error("Cpf is invalid");
  }
}
