import express from "express";
import { PORT, Logger } from "./config/index.js";
import apiRoutes from "./routes/index.js";

const app = express();

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  Logger.info("Successfully started the server.", {});
});
