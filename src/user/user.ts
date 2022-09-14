import { mongoConnect } from "../db/mongo.connection";
import { repo } from "./repositories/user.repository";

function user() {
  mongoConnect();
  repo.getAllUsers().then((users) => console.log(users));
  console.log("Hello World");
}

export default user;
