var React = require('react');
var TopNavbar = React.createFactory(require('./TopNavbar'));
var BlogMainContent = React.createFactory(require('./BlogMainContent'));
var ToolBar = React.createFactory(require('./ToolBar'));
var Footer = React.createFactory(require('./Footer'));

var DOM = React.DOM;
var script = DOM.script;

var BlogWrapUp = React.createClass({
  render: function() {
    return (
      <div>
        <TopNavbar pageId = "1" />
        <BlogMainContent categorys={this.props.categorys} posts={this.props.posts}/>
        <ToolBar />
        <Footer />
        {script({children: "var pageId = 1;"})}
      </div>
    );
  }
});

module.exports = BlogWrapUp;
