const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || 3300;
const path = require('path');
const compression = require('compression');

const app = express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(morgan('dev'))

app.use(compression());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.listen(PORT, err => {
  if (err) {
    console.log(err)
  }
  console.log('Server successfully connect on ' + PORT)
})