var React = require('react');

var LeftSidebar = React.createClass({
  propTypes: {
    categorys: React.PropTypes.array.isRequired,
    linkDisabled: React.PropTypes.bool.isRequired,
    onChanged: React.PropTypes.func.isRequired
  },
  handleChanged: function(value) {
    this.props.onChanged(value);
  },
  render: function() {
    return (
      <div id="left-sidebar" className="medium-2 column">
        <SidebarMenu categorys={this.props.categorys} onChanged={this.handleChanged} linkDisabled={this.props.linkDisabled}/>
      </div>
    );
  }
});

var SidebarMenu = React.createClass({
  propTypes: {
    categorys: React.PropTypes.array.isRequired,
    linkDisabled: React.PropTypes.bool.isRequired,
    onChanged: React.PropTypes.func.isRequired
  },
  handleChanged: function(value) {
    this.props.onChanged(value);
  },
  renderMenuItems: function() {
    var changeHandler = this.handleChanged;
    var disabled = this.props.linkDisabled;
    return this.props.categorys.map(function(cate, i){
      return <MenuItem key={"SidebarMenu-" + i} categoryName={cate} onChanged={changeHandler} linkDisabled={disabled}/>
    });
  },
  render: function() {
    return (
      <ul className="menu vertical">
        <li className="menu-text">分类</li>
        {this.renderMenuItems()}
      </ul>
    );
  }
});

var MenuItem = React.createClass({
  propTypes: {
    categoryName: React.PropTypes.string.isRequired,
    linkDisabled: React.PropTypes.bool.isRequired,
    onChanged: React.PropTypes.func.isRequired
  },
  handleClicked: function() {
    this.props.onChanged(this.props.categoryName);
  },
  render: function() {
    return (
      <li><a className="menu-item" href="#" onClick={this.handleClicked} disabled={this.props.linkDisabled}>{this.props.categoryName}</a></li>
    );
  }
});


module.exports = LeftSidebar;
