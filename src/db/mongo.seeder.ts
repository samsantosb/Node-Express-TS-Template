import { UserModel } from "../user/schema/user.model";
import { mongoConnect, mongoDisconnect } from "./mongo.connection";

async function seed() {
  const users = [
    {
      name: "John Doe",
      email: "john@gmail.com",
      age: 25,
      CPF: "048.607.240-11",
    },
    {
      name: "Bob Martin",
      email: "bob@gmail.com",
      age: 32,
      CPF: "617.031.910-05",
    },
    {
      name: "Julia Smith",
      email: "jul@hotmail.com",
      age: 44,
      CPF: "560.996.660-44",
    },
  ];

  mongoConnect();

  for (const user of users) {
    const newUser = new UserModel(user);
    try {
      await newUser.save();
    } catch (error) {
      console.log(`failed to seed user ${user.name}`);
      console.log(error);
    }
  }

  console.log("DB successfully seeded");

  mongoDisconnect();
}
seed();
