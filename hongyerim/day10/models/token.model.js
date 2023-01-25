import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  token: String,
  isAuth: Boolean,
});

const Tokens = mongoose.model("Token", tokenSchema);
export default Tokens;
