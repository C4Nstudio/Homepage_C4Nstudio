var express = require('express');
var router = express.Router();

/* GET post page. */
router.get('/', function(req, res, next) {
  res.render('post', { title: 'C4Nstudio_Post' });
});

module.exports = router;
