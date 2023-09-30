const express = require("express");
const mongoose = require("mongoose");

const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
} = require("./config/config");
const cors = require("cors");

const postRouter = require("./routes/posts.routes");
const userRouter = require("./routes/user.routes");

const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await mongoose.connect(
      `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
})();

app.set("trust proxy", "127.0.0.1");
app.enable("trust proxy");

app.get("/api/v1", (req, res) => {
  res.send("Hello from Docker!!!");
  console.log("ran!!");
});

app.use("/api/posts", postRouter);
app.use("/api/auth", userRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
