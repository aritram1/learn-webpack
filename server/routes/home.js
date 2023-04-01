const express = require('express');
const homeRouter = express.Router();

// middleware that is specific to this router
homeRouter.use((req, res, next) => {
  console.log('Time: ', new Date());
  next();
})

// define the home page route
homeRouter.get('/abc', (req, res) => {
    console.log('It\'s a get request to root!');
    res.render('index');
})
// define the about route
homeRouter.post('/', (req, res) => {
  res.send('It\'s a POST request to root!');
  //res.send('<html><head><style>.content{color: red;}</style></head><body><div class="content">Excuse me!</div></body></html>');
})

module.exports = homeRouter