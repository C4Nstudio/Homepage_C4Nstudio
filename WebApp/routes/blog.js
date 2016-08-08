require('babel-register');
var express = require('express');
var router = express.Router();

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var BlogWrapUp = React.createFactory(require('../components/BlogWrapUp'));

/* GET index page. */
router.get('/', function(req, res, next) {
  var componentsHtml = ReactDOMServer.renderToString(BlogWrapUp({}))
                      + "<script>var pageId = 1;</script>";

  res.render('template', { title: 'C4Nstudio_blog', reactOutput: componentsHtml});
});

module.exports = router;
