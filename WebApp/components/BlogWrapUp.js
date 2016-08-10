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
        <TopNavbar />
        <BlogMainContent categorys={this.props.categorys} posts={this.props.posts}/>
        <ToolBar />
        <Footer />
        {script({children: this.props.pageId})}
      </div>
    );
  }
});

module.exports = BlogWrapUp;
