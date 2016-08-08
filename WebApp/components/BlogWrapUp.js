var React = require('react');
var TopNavbar = React.createFactory(require('./TopNavbar'));
var BlogMainContent = React.createFactory(require('./BlogMainContent'));
var ToolBar = React.createFactory(require('./ToolBar'));
var Footer = React.createFactory(require('./Footer'));

var BlogWrapUp = React.createClass({
  render: function() {
    return (
      <div>
        <TopNavbar />
        <BlogMainContent />
        <ToolBar />
        <Footer />
      </div>
    );
  }
});

module.exports = BlogWrapUp;
