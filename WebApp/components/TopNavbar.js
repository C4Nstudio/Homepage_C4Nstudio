var React = require('react');

var TopNavbar = React.createClass({
  render: function() {
    return (
      <nav className="top-bar" id="top-navbar">
        <div className="column row">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">C4Nstudio</li>
              <li className="active"><a href="../" title="Homepage">主页</a></li>
              <li><a href="/blog" title="Blog">博客</a></li>
              <li><a href="/about" title="About">关于</a></li>
            </ul>
          </div>
          <div className="top-bar-right hide-for-small-only">
            <ul className="menu">
              <li className="menu-text">Powered by React & Foundation</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = TopNavbar;
