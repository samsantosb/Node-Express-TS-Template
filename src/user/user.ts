import { mongoConnect } from "../db/mongo.connection";

async function user() {
  await mongoConnect();
  console.log("Hello World");
}

export default user;
