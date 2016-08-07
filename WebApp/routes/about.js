require('babel-register');
var express = require('express');
var router = express.Router();

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var WrapUp = React.createFactory(require('../components/WrapUp'));

/* GET about page. */
router.get('/', function(req, res, next) {
  var componentsHtml = ReactDOMServer.renderToString(WrapUp({}));

  res.render('index', { title: 'C4Nstudio_Home', reactOutput: componentsHtml});
});

module.exports = router;
