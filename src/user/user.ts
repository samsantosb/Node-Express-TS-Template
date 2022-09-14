import { mongoConnect } from "../db/mongo.connection";
import { repo } from "./repositories/user.repository";

function user() {
  mongoConnect();
  repo.getAllUsers().then((users) => console.log(users));
  repo
    .getUserById("632130d51623c49bf7b1c7ec")
    .then((user) => console.log(user));
}

export default user;
