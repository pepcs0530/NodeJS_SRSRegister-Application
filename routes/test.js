var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Welcome to test');
  res.sendfile('./public/html/register_form.html');
});

module.exports = router;