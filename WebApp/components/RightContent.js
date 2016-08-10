var React = require('react');
var BlogPost = React.createFactory(require('./BlogPost'));
var PlaceholderPost = React.createFactory(require('./PlaceholderPost'));

var RightContent = React.createClass({
  propTypes: {
    posts: React.PropTypes.array.isRequired,
    category: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      category: "All"
    }
  },
  renderPosts: function() {
    var category = this.props.category;
    var postsAmount = 0;
    var renderedPosts = this.props.posts.map(function(post, i){
      if(category == "全部文章" || post.blogCategory == category) {
        postsAmount++;
        return <BlogPost key={"blogPost-" + i} blogTitle={post.blogTitle} blogCreatedTime={post.blogCreatedTime} blogCategory={post.blogCategory} blogDescription={post.blogDescription} blogBody={post.blogBody}/>
      }
    });
    if(postsAmount == 0) {
      return <PlaceholderPost />
    }
    return renderedPosts;
  },
  render: function() {
    return (
      <div id="right-content" className="medium-9 medium-offset-1 column">
          {this.renderPosts()}
      </div>
    );
  }
});

module.exports = RightContent;
