const express = require("express");

const helmet = require("helmet");

const { resolve } = require("path");

const app = express();
app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use(
  helmet({
    contentSecurityPolicy: false
  })
);
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
