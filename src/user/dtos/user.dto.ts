interface IUser {
  id?: string;
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

  constructor(public user: IUser) {
    this.name = user.name;
    this.email = user.email;
    this.age = user.age;
    this.cpf = user.cpf;
  }
}
