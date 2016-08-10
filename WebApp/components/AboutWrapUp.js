var React = require('react');
var TopNavbar = React.createFactory(require('./TopNavbar'));
var ToolBar = React.createFactory(require('./ToolBar'));
var Footer = React.createFactory(require('./Footer'));

var DOM = React.DOM;
var script = DOM.script;

var AboutWrapUp = React.createClass({
  render: function() {
    return (
      <div>
        <TopNavbar pageId = "2" />
        <div style={{height: "650px"}}></div>
        <ToolBar />
        <Footer />
        {script({children: "var pageId = 2;"})}
      </div>
    );
  }
});

module.exports = AboutWrapUp;
