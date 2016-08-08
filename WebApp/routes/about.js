require('babel-register');
var express = require('express');
var router = express.Router();

var React = require('react');
var ReactDOMServer = require('react-dom/server');

/* GET index page. */
router.get('/', function(req, res, next) {
  var componentsHtml = "<script>var pageId = 2;</script>";

  res.render('template', { title: 'C4Nstudio_blog', reactOutput: componentsHtml});
});

module.exports = router;
