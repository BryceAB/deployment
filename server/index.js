const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/style.css"));
});

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/main.js"));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
