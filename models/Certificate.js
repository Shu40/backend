import mongoose from "mongoose"

const certificateSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true }, // Clerk user id
    userName: { type: String, required: true },
    email: { type: String, required: true },

    memberId: { type: String, unique: true }, // CV-01, CV-02...
    certificateId: { type: String, unique: true },

    issuedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

export default mongoose.model("Certificate", certificateSchema)
