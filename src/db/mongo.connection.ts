import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongo: string = process.env.MONGO || "";

export function mongoConnect() {
  new Promise((resolve, reject) => {
    mongoose.connection

      .on("error", (error) => {
        console.log("ERROR: Connection to MongoDB failed");
        reject(error);
      })

      .on("close", () => {
        console.log("Connection to MongoDB ended");
        process.exit(1);
      })

      .once("open", () => {
        const infos = mongoose.connections;

        infos.map((info) =>
          console.log(
            `Connected to ${info.host}:${info.port}/${info.name} mongo Database`
          )
        );

        resolve(undefined);
      });

    mongoose.connect(mongo, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  });
}

export function mongoDisconnect() {
  new Promise((resolve, reject) => {
    mongoose.connection.close((error) => {
      if (error) {
        reject(error);
      }
      resolve(undefined);
    });
  });
}
