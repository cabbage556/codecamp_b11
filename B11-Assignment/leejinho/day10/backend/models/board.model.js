import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
    writer : String,
    title : String,
    contents : String
})
//                  모델
export const Board = mongoose.model("Board", boardSchema)
