const express = require("express");

const { resolve } = require("path");

const app = express();

app.get("*", (res, res) => {
  res.sendFile(resolve(__dirname, "..", "the-gainer-frontend", "dist"));
});

app.listen("8800", () => {
  console.log("static server running");
});
