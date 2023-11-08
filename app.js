import express from "express";
import config from "config";
import mongoose from "mongoose";
import cors from "cors";
import shopRoute from "./routes/shopRouters.js";

const app = express();

//Routes
app.use(cors());
app.use("/api/shop", shopRoute);

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUrl"), {});
    app.listen(PORT, () => console.log(`Server working in PORT: ${PORT}`));
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();
