import mongoose from 'mongoose'

const tokenSchema = new mongoose.Schema({
    phone: String
})

export const Token = mongoose.model("Token", tokenSchema) // model : 실제 DB에 저장되는 컬렉션