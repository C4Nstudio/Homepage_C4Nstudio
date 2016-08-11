var React = require('react');

var LeftSidebar = React.createClass({
  propTypes: {
    categorys: React.PropTypes.array.isRequired,
    linkDisabled: React.PropTypes.bool.isRequired,
    onChanged: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      currentCategory: "全部文章"
    };
  },
  handleChanged: function(value) {
    this.props.onChanged(value);
    this.setState({currentCategory: value});
  },
  render: function() {
    return (
      <div id="left-sidebar" className="medium-2 column">
        <SidebarMenu currentCategory={this.state.currentCategory} categorys={this.props.categorys} onChanged={this.handleChanged} linkDisabled={this.props.linkDisabled}/>
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
    var currentCate = this.props.currentCategory;
    return this.props.categorys.map(function(cate, i){
      return <MenuItem key={"SidebarMenu-" + i} currentCategory={currentCate} categoryName={cate} onChanged={changeHandler} linkDisabled={disabled}/>
    });
  },
  render: function() {
    return (
      <ul className="menu vertical">
        <li className="menu-text" id="menu-text">主题：</li>
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
      <li><a className={this.props.categoryName == this.props.currentCategory ? "menu-item menu-active" : "menu-item"} href="javascript:void(0)" onClick={this.handleClicked} disabled={this.props.linkDisabled}>{this.props.categoryName}</a></li>
    );
  }
});


module.exports = LeftSidebar;
