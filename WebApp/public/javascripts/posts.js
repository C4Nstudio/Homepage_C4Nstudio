module.exports = function() {
  this.getPosts = function() {
    return postsExample;              //Data should be fetch from data base
  };
  this.getCategorys = function() {
    var posts = this.getPosts();
    var categorys = new Array();

    var cateAmount = 0;
    var cateExists = false;
    for(var i = 0; i < posts.length; i++) {
      cateExists = false;
      for(var j = 0; j < cateAmount; j++) {
        if(posts[i].blogCategory === categorys[j]) {
          cateExists = true;
          break;
        }
      }
      if(cateExists == false) {
        categorys[cateAmount] = posts[i].blogCategory;
        cateAmount++;
      }
    }
    categorys[cateAmount] = "全部文章";

    return categorys;
  };
};

// var getPosts = function() {
//   return postsExample;              //Data should be fetch from data base
// };
//
// var getCategorys = function() {
//   var posts = getPosts();
//   var categorys = new Array();
//
//   var cateAmount = 0;
//   var cateExists = false;
//   for(var i = 0; i < posts.length; i++) {
//     cateExists = false;
//     for(var j = 0; j < cateAmount; j++) {
//       if(posts[i].blogCategory === categorys[j]) {
//         cateExists = true;
//         break;
//       }
//     }
//     if(cateExists == false) {
//       categorys[cateAmount] = posts[i].blogCategory;
//       cateAmount++;
//     }
//   }
//   categorys[cateAmount] = "All";
//
//   return categorys;
// };

var postsExample = [
  {
    blogTitle: "Hi, everybody!",
    blogCreatedTime: "08-01-2016",
    blogCategory: "杂七杂八",
    blogDescription: "简单介绍下个人主页",
    blogBody: "**C4Nstudio.com**是笔者C4N独立开发的个人主页及博客，使用包括[React](https://facebook.github.io/react/)、[Node.js](https://nodejs.org/en/)、[Foundation](http://foundation.zurb.com/)和[Webpack](https://webpack.github.io/)等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。主页包括几个主要板块：\n\n* **工作室**：笔者个人学习笔记分享，记录前端探索路上的点（ge）点（zhong）滴（keng）滴（shi）\n\n* **玩点啥**：分享笔者个人兴趣爱好，PS、AE、PR修图做特效有空耍耍，书法、篆刻、写剧本偶尔玩玩\n\n* **杂七杂八**：总有那么一些不合群的小家伙\n\n* **全部文章**：（就以上及其他一些分类的文章总和啦）\n\n"
  }
]
