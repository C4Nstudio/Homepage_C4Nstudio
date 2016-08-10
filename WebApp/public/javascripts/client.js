var React = require('react');
var ReactDOM = require('react-dom');
var IndexWrapUp = React.createFactory(require('../../components/IndexWrapUp'));
var BlogWrapUp = React.createFactory(require('../../components/BlogWrapUp'));
var Posts = require("./posts");

if(window.pageId === 0) {
  ReactDOM.render(IndexWrapUp({}), document.getElementById("global-container"));
} else if(window.pageId ===1) {
  var data = new Posts();
  var props = {
    categorys: data.getCategorys(),
    posts: data.getPosts()
  }
  ReactDOM.render(BlogWrapUp(props), document.getElementById("global-container"));
}
