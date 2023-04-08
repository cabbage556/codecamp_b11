import mongoose from "mongoose";

// token 컬렉션 스키마
const tokenSchema = new mongoose.Schema({
  token: String,
  phone: String,
  isAuth: Boolean,
});

// token 컬렉션 생성
export const Token = mongoose.model("Token", tokenSchema);
