import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import userRoutes from "./routes/user.js"
import certificateRoutes from "./routes/certificate.js"
dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", certificateRoutes)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))

app.use("/api/user", userRoutes)

app.listen(process.env.PORT, () =>
  console.log("Server running on port 5000")
)
