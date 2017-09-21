const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || 3300;
const path = require('path');

const app = express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended:true }))
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(morgan('dev'))

  app.listen(PORT, err=>{
    if (err) {
      console.log(err)
    }
    console.log('Server successfully connect on ' + PORT)
  })