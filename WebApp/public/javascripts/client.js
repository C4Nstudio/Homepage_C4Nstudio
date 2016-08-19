var React = require('react');
var ReactDOM = require('react-dom');
var IndexWrapUp = React.createFactory(require('../../components/IndexWrapUp'));
var BlogWrapUp = React.createFactory(require('../../components/BlogWrapUp'));
var AboutWrapUp = React.createFactory(require('../../components/AboutWrapUp'));
var Posts = require("./posts");
// var Posts = require("./DBOperations");

if(window.pageId === 0) {
  ReactDOM.render(IndexWrapUp({pageId: 0}), document.getElementById("global-container"));
} else if(window.pageId === 1) {
  var data = new Posts();
  var props = {
    pageId: 1,
    posts: data.getPosts(),
    categorys: data.getCategorys()
  }
  ReactDOM.render(BlogWrapUp(props), document.getElementById("global-container"));
} else if(window.pageId === 2) {
  ReactDOM.render(AboutWrapUp({pageId: 2}), document.getElementById("global-container"));
}
