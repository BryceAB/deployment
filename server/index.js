const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: "49a49ba4c6c941b997cb5535e9da4b2d",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

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
