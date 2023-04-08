import mongoose from "mongoose";

// user 컬렉션 스키마
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  personal: String,
  prefer: String,
  pwd: String,
  phone: String,
  og: {
    title: String,
    description: String,
    image: String,
  },
});

// user 컬렉션 생성
export const User = mongoose.model("User", userSchema);
