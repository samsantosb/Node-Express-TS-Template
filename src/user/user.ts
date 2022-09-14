import { mongoConnect } from "../db/mongo.connection";
import { repo } from "./repositories/user.repository";

function users() {
  mongoConnect();
  repo.getAll().then((users) => console.log(users));
  repo.getById("632130d51623c49bf7b1c7ec").then((user) => console.log(user));
}

export default users;
