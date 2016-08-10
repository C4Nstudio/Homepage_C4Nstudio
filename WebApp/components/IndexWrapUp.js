var React = require('react');
var TopNavbar = React.createFactory(require('./TopNavbar'));
var IndexMainContent = React.createFactory(require('./IndexMainContent'));
var ToolBar = React.createFactory(require('./ToolBar'));
var Footer = React.createFactory(require('./Footer'));

var DOM = React.DOM;
var script = DOM.script;

var IndexWrapUp = React.createClass({
  render: function() {
    return (
      <div>
        <TopNavbar pageId = "0" />
        <IndexMainContent />
        <ToolBar />
        <Footer />
        {script({children: "var pageId = 0;"})}
      </div>
    );
  }
});

module.exports = IndexWrapUp;
