var React = require('react');

var ToolBar = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    return (
      <div id='tool-bar' className="hide-for-small-only">
        <a className="button" href="#" title="回到顶部">∧</a>
      </div>
    );
  }
});

module.exports = ToolBar;
