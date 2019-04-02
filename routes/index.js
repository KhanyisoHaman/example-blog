var express = require('express');
var router = express.Router();
var Posts = require('../db.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });


var data = {
  title: "Name of the Title",
  posts: Posts,
  message: false
};

res.render('index', data);
});

module.exports = router;

//That is our index 