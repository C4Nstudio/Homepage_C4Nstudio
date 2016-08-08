var React = require('react');
var ReactDOM = require('react-dom');
var IndexWrapUp = React.createFactory(require('../../components/IndexWrapUp'));
var BlogWrapUp = React.createFactory(require('../../components/BlogWrapUp'));

if(window.pageId === 0) {
  ReactDOM.render(IndexWrapUp({}), document.getElementById("global-container"));  
} else if(window.pageId ===1) {
  ReactDOM.render(BlogWrapUp({}), document.getElementById("global-container"));
}
