import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Password from "./models/Password.js";
// import cors from "cors";


dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB (Compass local)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Compass"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// API Routes
app.get("/", (req, res) => res.send("Password Keeper API is running 🚀"));

// Fetch all passwords
app.get("/api/passwords", async (req, res) => {
  const passwords = await Password.find();
  res.json(passwords);
});

// Add new password
app.post("/api/passwords", async (req, res) => {
  const { site, username, password } = req.body;
  const newPassword = new Password({ site, username, password });
  await newPassword.save();
  res.json(newPassword);
});

// Delete password
app.delete("/api/passwords/:id", async (req, res) => {
  await Password.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

// Update password
app.put("/api/passwords/:id", async (req, res) => {
  const { site, username, password } = req.body;
  const updated = await Password.findByIdAndUpdate(
    req.params.id,
    { site, username, password },
    { new: true }
  );
  res.json(updated);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌍 Server running on port ${PORT}`));

// app.use(cors({ origin: "*" }));

