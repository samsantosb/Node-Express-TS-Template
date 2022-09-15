import doetenv from "dotenv";
import express from "express";
import { mongoConnect } from "./db/mongo.connection";
import userRoutes from "./user/routes/user.routes";

mongoConnect();
const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.listen(3000, () => console.log("Server is running on port 3000"));
