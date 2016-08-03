var React = require('react');

var TopNavbar = React.createClass({
  render: function() {
    return (
      React.createElement(
        "nav",
        { className: "top-bar", id: "top-navbar" },
        React.createElement(
          "div",
          { className: "column row" },
          React.createElement(
            "div",
            { className: "top-bar-left" },
            React.createElement(
              "ul",
              { className: "menu" },
              React.createElement(
                "li",
                { className: "menu-text" },
                "C4N blog"
              ),
              React.createElement(
                "li",
                { className: "active" },
                React.createElement(
                  "a",
                  { href: "#" },
                  "主页"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#" },
                  "关于"
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "top-bar-right hide-for-small-only" },
            React.createElement(
              "ul",
              { className: "menu" },
              React.createElement(
                "li",
                { className: "menu-text" },
                "Powered by React & Foundation"
              )
            )
          )
        )
      )
    );
  }
});

module.exports = TopNavbar;
