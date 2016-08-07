var React = require('react');
var TopNavbar = React.createFactory(require('./TopNavbar'));
var MainContent = React.createFactory(require('./MainContent'));
var ToolBar = React.createFactory(require('./ToolBar'));
var Footer = React.createFactory(require('./Footer'));

var WrapUp = React.createClass({
  render: function() {
    return (
      <div>
        <TopNavbar />
        <MainContent />
        <ToolBar />
        <Footer />
      </div>
    );
  }
});

module.exports = WrapUp;
