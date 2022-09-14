import { connection } from "../db/mongo.connection";

function user() {
  connection();
  console.log("Hello World");
}

export default user;
