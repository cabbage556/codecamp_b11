import mongoose from 'mongoose'

const boardSchema = new mongoose.Schema({
    writer: String,
    title: String,
    contents: String
})

export const Board = mongoose.model("Board", boardSchema) // Board model : 실제 DB에 저장되는 컬렉션

