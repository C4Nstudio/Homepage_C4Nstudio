var React = require('react');
var ReactDOM = require('react-dom');
var WrapUp = React.createFactory(require('../../components/WrapUp'));

ReactDOM.render(WrapUp({}), document.getElementById("global-container"));
