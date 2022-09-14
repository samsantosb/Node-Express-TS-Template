import express from "express";
import { user } from "../factories/user.factory";

const router = express.Router();

router.get("/", user.getAll.bind(user));
router.get("/:id", user.getById.bind(user));
router.post("/", user.create.bind(user));
router.put("/:id", user.update.bind(user));
router.delete("/:id", user.delete.bind(user));
