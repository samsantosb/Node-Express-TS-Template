import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongo: string = process.env.MONGO || "";

export function connection() {
  mongoose.connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
}
