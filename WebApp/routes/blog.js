require('babel-register');
var express = require('express');
var router = express.Router();

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var BlogWrapUp = React.createFactory(require('../components/BlogWrapUp'));
var Posts = require("../public/javascripts/posts");

/* GET blog page. */
router.get('/', function(req, res, next) {
  var data = new Posts();
  var props = {
    pageId: "1",
    categorys: data.getCategorys(),
    posts: data.getPosts()
  }
  var componentsHtml = ReactDOMServer.renderToString(BlogWrapUp(props));

  res.render('template', { title: 'C4Nstudio_Blog', reactOutput: componentsHtml});
});

module.exports = router;
