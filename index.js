const express = require("express");

const { resolve } = require("path");

const app = express();
app.set("trust proxy", 1);
app.use(
  express.static(resolve(__dirname, "..", "the-gainer-frontend", "dist"))
);

app.get("*", (req, res) => {
  res.sendFile(
    resolve(__dirname, "..", "the-gainer-frontend", "dist", "index.html")
  );
});

app.listen("8800", () => {
  console.log("static server running");
});
