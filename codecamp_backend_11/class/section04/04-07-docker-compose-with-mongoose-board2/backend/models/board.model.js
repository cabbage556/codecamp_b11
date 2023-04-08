import mongoose from "mongoose";

// board 컬렉션의 스키마
const boardSchema = new mongoose.Schema({
  writer: String,
  title: String,
  contents: String,
});

// board 컬렉션 생성
export const Board = mongoose.model("Board", boardSchema);
