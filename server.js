const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.json("Hello from docker");
});

app.listen(PORT, () => console.log(`Server runnning on port ${PORT}`));
