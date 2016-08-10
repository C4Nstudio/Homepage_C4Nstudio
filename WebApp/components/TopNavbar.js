var React = require('react');

var TopNavbar = React.createClass({
  render: function() {
    return (
      <nav className="top-bar" id="top-navbar">
        <div className="column row">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">C4Nstudio</li>
              <TopNavItem pageId={this.props.pageId} currentId="0" linkHref="../" pageTitle="Homepage" pageName="主页"/>
              <TopNavItem pageId={this.props.pageId} currentId="1" linkHref="/blog" pageTitle="Blog" pageName="博客"/>
              <TopNavItem pageId={this.props.pageId} currentId="2" linkHref="/about" pageTitle="About" pageName="关于"/>
            </ul>
          </div>
          <div className="top-bar-right hide-for-small-only">
            <ul className="menu">
              <li className="menu-text"><small>Powered by React & Foundation</small></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

var TopNavItem = React.createClass({
  render: function() {
    return (
      <li className={this.props.pageId == this.props.currentId ? "active" : ""}>
        <a href={this.props.linkHref} title={this.props.pageTitle}>{this.props.pageName}</a>
      </li>
    )
  }
});

module.exports = TopNavbar;
