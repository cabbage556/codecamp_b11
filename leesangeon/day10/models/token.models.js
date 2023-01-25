import mongoose from "mongoose";

const certifySchema = new mongoose.Schema({
  phone: String,
  token: String,
  isAuth: Boolean,
});

export const Certify = mongoose.model("Certify", certifySchema);
