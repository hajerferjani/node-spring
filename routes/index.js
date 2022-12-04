var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/home', function(req, res, next) {
  res.send('welcome to home' );
});

router.get('/inscription/:id', function(req, res, next) {
let id= req.params.id; 
  res.send('id='+id ); 
});

module.exports = router;
