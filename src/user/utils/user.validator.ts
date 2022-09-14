import { cpfRegex, emailRegex } from "./regex";

export const userValidator = {
  isValidName(name: string): string {
    if (name.length >= 3) {
      return name;
    }
    throw new Error("Name is invalid");
  },
  isValidEmail(email: string): string {
    if (email.toLowerCase().match(emailRegex)) {
      return email;
    }
    throw new Error("Email is invalid");
  },
  isValidAge(age): number {
    if (age >= 18) {
      return age;
    }
    throw new Error("Age is invalid");
  },
  isValidCpf(cpf): string {
    if (cpf.length === 11 && !cpf.match(cpfRegex)) {
      return cpf;
    }
    throw new Error("Cpf is invalid");
  },
};
