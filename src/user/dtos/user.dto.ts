import { cpfRegex } from "./../utils/regex";
import { emailRegex } from "../utils/regex";

interface IUser {
  id?: string;
  name: string;
  email: string;
  age: number;
  cpf: string;
}
interface IUserDto extends IUser {
  user: IUser;
  isValidName: (name: string) => string;
  isValidEmail: (email: string) => string;
  isValidAge: (age: number) => number;
  isValidCpf: (cpf: string) => string;
}
export class UserDto implements IUserDto {
  user: IUser;
  name: string;
  email: string;
  age: number;
  cpf: string;

  constructor(user: string) {
    this.user = this.jsonParser(user);
    this.name = this.isValidName(this.user.name);
    this.email = this.isValidEmail(this.user.email);
    this.age = this.isValidAge(this.user.age);
    this.cpf = this.isValidCpf(this.user.cpf);
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
    if (cpf.length === 11 && cpf.match(cpfRegex)) {
      return cpf;
    }
    throw new Error("Cpf is invalid");
  }
  jsonParser(data: string): IUser {
    return JSON.parse(data);
  }
}
export interface IDtoConstructor {
  new (user: {
    name: string;
    email: string;
    age: number;
    cpf: string;
  }): IUserDto;
}
