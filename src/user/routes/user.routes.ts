import express from "express";
import { user } from "../factories/user.factory";

const userRoutes = express.Router();

userRoutes.get("/", user.getAll.bind(user));
userRoutes.get("/:id", user.getById.bind(user));
userRoutes.post("/", user.create.bind(user));
userRoutes.put("/:id", user.update.bind(user));
userRoutes.delete("/:id", user.delete.bind(user));

export default userRoutes;
