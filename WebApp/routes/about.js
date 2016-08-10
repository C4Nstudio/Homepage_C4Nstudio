require('babel-register');
var express = require('express');
var router = express.Router();

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var AboutWrapUp = React.createFactory(require('../components/AboutWrapUp'));

/* GET about page. */
router.get('/', function(req, res, next) {
  var componentsHtml = ReactDOMServer.renderToString(AboutWrapUp({pageId: 2}));

  res.render('template', { title: 'C4Nstudio_About', reactOutput: componentsHtml});
});

module.exports = router;
