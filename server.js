const express = require("express");
const mongoose = require("mongoose");
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
} = require("./config/config");

const app = express();

const PORT = process.env.PORT || 3000;

(function connectWithRetry() {
  mongoose
    .connect(
      `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => {
      console.log("MongoDB Connection Failed:", error);
      setTimeout(() => connectWithRetry, 5000);
    });
})();

app.get("/", function (req, res) {
  res.json("Hello from docker...");
});

app.listen(PORT, () => console.log(`Server runnning on port ${PORT}`));
