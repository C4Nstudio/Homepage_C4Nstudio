require('babel-register');
var express = require('express');
var router = express.Router();

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var IndexWrapUp = React.createFactory(require('../components/IndexWrapUp'));

/* GET index page. */
router.get('/', function(req, res, next) {
  var componentsHtml = ReactDOMServer.renderToString(IndexWrapUp({pageId: 0}));

  res.render('template', { title: 'C4Nstudio_Home', reactOutput: componentsHtml});
});

module.exports = router;
