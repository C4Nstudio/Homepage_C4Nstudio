var React = require('react');
var LeftSidebar = React.createFactory(require('./LeftSidebar'));
var RightContent = React.createFactory(require('./RightContent'));

var BlogMainContent = React.createClass({
  getInitialState: function() {
    return {
      currentCategory: "All",
      linkDisabled: true
    };
  },
  componentDidmount: function() {
    this.setState(
      {
        linkDisabled: false
      }
    );
  },
  handleChanged: function(value) {
    this.setState({currentCategory: value});
  },
  render: function() {
    return (
      <div className="row" id="blog-main-content">
        <LeftSidebar categorys = {this.props.categorys} linkDisabled = {this.state.linkDisabled} onChanged = {this.handleChanged}/>
        <RightContent posts = {this.props.posts} category = {this.state.currentCategory}/>
      </div>
    );
  }
});

module.exports = BlogMainContent;
