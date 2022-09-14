import { dataValidator } from "../../utils/data.validator";

interface IUserDto {
  name: string;
  email: string;
  age: number;
  cpf: string;
}
export class UserDto {
  name: string;
  email: string;
  age: number;
  cpf: string;
  constructor(user: IUserDto) {
    this.name = dataValidator.isValidName(user.name);
    this.email = dataValidator.isValidEmail(user.email);
    this.age = dataValidator.isValidAge(user.age);
    this.cpf = dataValidator.isValidCpf(user.cpf);
  }
}
