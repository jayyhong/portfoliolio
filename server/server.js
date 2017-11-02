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
app.get('/events', function (req, res) {
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')

  // send a ping approx every 2 seconds
  var timer = setInterval(function () {
    res.write('data: ping\n\n')

    // !!! this is the important part
    res.flush()
  }, 2000)

  res.on('close', function () {
    clearInterval(timer)
  })
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.listen(PORT, err => {
  if (err) {
    console.log(err)
  }
  console.log('Server successfully connect on ' + PORT)
})