var React = require('react');
var TopNavbar = React.createFactory(require('./TopNavbar'));
var IndexMainContent = React.createFactory(require('./IndexMainContent'));
var ToolBar = React.createFactory(require('./ToolBar'));
var Footer = React.createFactory(require('./Footer'));

var IndexWrapUp = React.createClass({
  render: function() {
    return (
      <div>
        <TopNavbar />
        <IndexMainContent />
        <ToolBar />
        <Footer />
      </div>
    );
  }
});

module.exports = IndexWrapUp;
