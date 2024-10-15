import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import snapRoutes from "./routes/snap.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/snaps", snapRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
