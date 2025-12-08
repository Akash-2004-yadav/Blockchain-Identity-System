import cors from "cors";
import express from "express";
import fs from "fs";
import path from "path";

import usersRouter from "./routes/users.js";
import verifyRouter from "./routes/verify.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",                                   // for local development
      "https://blockchain-identity-system.vercel.app",          // your Vercel production URL
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

/* Ensure SQLite exists (Render deploy fix) */
const dbPath = path.resolve("database.sqlite");
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, "");
  console.log("📌 Created new database.sqlite (auto)");
}

/* API Routes */
app.use("/verify", verifyRouter);
app.use("/users", usersRouter);

/* Health check route for Render */
app.get("/health", (_, res) => res.json({ status: "ok" }));

app.get("/", (_, res) => res.send("Backend running 🚀"));

/* Dynamic PORT for Render */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Backend API running on port ${PORT}`));
