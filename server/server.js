const compression = require("compression");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3300;
const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../dist")));

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  }
  console.log("Server successfully connect on " + PORT);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});
