import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
  token: String,
  phone: String,
  isAuth: Boolean,
});

export const Token = mongoose.model("Token", boardSchema);
