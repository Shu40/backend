import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  clerkId: { type: String, unique: true },
  name: String,
  email: String,
  image: String,
})

export default mongoose.model("User", userSchema)
