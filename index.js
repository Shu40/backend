import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/user.js";
import certificateRoutes from "./routes/certificate.js";

dotenv.config();

const app = express();

/* =======================
   MIDDLEWARES
======================= */
app.use(
  cors({
    origin: "*", // abhi open, baad me frontend URL daal dena
    credentials: true,
  })
);

app.use(express.json());

/* =======================
   ROOT ROUTE (IMPORTANT)
======================= */
app.get("/", (req, res) => {
  res.status(200).send("Backend is live 🚀");
});

/* =======================
   API ROUTES
======================= */
app.use("/api/user", userRoutes);
app.use("/api/certificate", certificateRoutes);

/* =======================
   MONGODB CONNECTION
======================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

/* =======================
   SERVER LISTEN
======================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
