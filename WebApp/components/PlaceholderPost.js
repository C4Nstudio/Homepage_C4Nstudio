var React = require('react');

var PlaceholderPost = React.createClass({
  render: function() {
    return (
      <div className="post-placeholder">
        <h3>
          Oops, 当前分类没有对应文章
        </h3>
      </div>
    );
  }
});

module.exports = PlaceholderPost;
