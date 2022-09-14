import { dataValidator } from "../../utils/data.validator";

export class UserDto {
  name: string;
  email: string;
  age: number;
  cpf: string;
  constructor(name: string, email: string, age: number, cpf: string) {
    this.name = dataValidator.isValidName(name);
    this.email = dataValidator.isValidEmail(email);
    this.age = dataValidator.isValidAge(age);
    this.cpf = dataValidator.isValidCpf(cpf);
  }
}
