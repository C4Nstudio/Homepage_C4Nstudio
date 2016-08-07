var React = require('react');
var LeftSidebar = React.createFactory(require('./LeftSidebar'));
var RightContent = React.createFactory(require('./RightContent'));

var MainContent = React.createClass({
  getInitialState: function() {
    return {
      currentCategory: "All",
      linkDisabled: true,
      categorys: [
        "Lifestyle",
        "Workshop",
        "Other",
        "All"
      ],
      posts: [
        {
          blogTitle: "第一篇博文",
          blogCreatedTime: "Aug 1st",
          blogCategory: "Other",
          blogDescription: "简单介绍个人主页",
          blogBody: "**Homepage_C4Nstudio**是笔者C4N个人开发的个人主页，使用技术包括[React](https://facebook.github.io/react/)、[Node.js](https://nodejs.org/en/)、[Foundation](http://foundation.zurb.com/)和[Webpack](https://webpack.github.io/)等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。主页包括几个主要板块：\n\n" +
                    "* **Workshop**：技术内容分享区，以码农知识为主\n\n" +
                    "* **Lifestyle**：趣味生活分享区，包括笔者日常生活中的一些所见所闻\n\n" +
                    "* **Other**：杂项，放置一些可能不属于以上板块的内容"
        },
        {
          blogTitle: "第二篇博文",
          blogCreatedTime: "Aug 2nd",
          blogCategory: "Workshop",
          blogDescription: "简单介绍个人主页",
          blogBody: "**Homepage_C4Nstudio**是笔者C4N个人开发的个人主页，使用技术包括[React](https://facebook.github.io/react/)、[Node.js](https://nodejs.org/en/)、[Foundation](http://foundation.zurb.com/)和[Webpack](https://webpack.github.io/)等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。主页包括几个主要板块：\n\n" +
                    "* **Workshop**：技术内容分享区，以码农知识为主\n\n" +
                    "* **Lifestyle**：趣味生活分享区，包括笔者日常生活中的一些所见所闻\n\n" +
                    "* **Other**：杂项，放置一些可能不属于以上板块的内容"
        }
      ]
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
      <div className="row" id="main-content">
        <LeftSidebar categorys = {this.state.categorys} linkDisabled = {this.state.linkDisabled} onChanged = {this.handleChanged}/>
        <RightContent posts = {this.state.posts} category = {this.state.currentCategory}/>
      </div>
    );
  }
});

module.exports = MainContent;
