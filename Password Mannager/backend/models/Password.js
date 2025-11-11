import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema({
  site: String,
  username: String,
  password: String,
});

export default mongoose.model("Password", passwordSchema);
