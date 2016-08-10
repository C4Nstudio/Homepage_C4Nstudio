var React = require('react');
var marked = require('../public/javascripts/marked.min.js');

var BlogPost = React.createClass({
  propTypes: {
    blogTitle: React.PropTypes.string.isRequired,
    blogCreatedTime: React.PropTypes.string.isRequired,
    blogCategory: React.PropTypes.string,
    blogDescription: React.PropTypes.string.isRequired,
    blogBody: React.PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {
      blogCategory: "Other"
    };
  },
  rawMarkup: function() {
    var rawMarkup = marked(this.props.blogBody, {sanitize: true});
    return {__html: rawMarkup};
  },
  render: function() {
    return (
      <div className="post-content">
        <h3>
          {this.props.blogTitle}
          <small>
            &nbsp;&nbsp;&nbsp;&nbsp;更新于:&nbsp;&nbsp;{this.props.blogCreatedTime}
          </small>
        </h3>
        <h6>
          主题:&nbsp;&nbsp;{this.props.blogCategory}
        </h6>
        <h6>
          摘要:&nbsp;&nbsp;{this.props.blogDescription}
          <br /><br />
        </h6>
        <div dangerouslySetInnerHTML={this.rawMarkup()} />
        <hr />
      </div>
    );
  }
});

module.exports = BlogPost;
