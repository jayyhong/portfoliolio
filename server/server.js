const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3300;
const path = require("path");
const compression = require("compression");

const app = express()
  .use(compression({level: 9}))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(express.static(path.resolve(__dirname, "../dist")));
  
app.listen(PORT, err => {
  if (err) {
    console.log(err);
  }
  console.log("Server successfully connect on " + PORT);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});
