//create a user schema using mongoose ts
import { Schema, Model, InferSchemaType, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
});

export type User = InferSchemaType<typeof UserSchema>;

export const UserModel: Model<User> = model("User", UserSchema);
