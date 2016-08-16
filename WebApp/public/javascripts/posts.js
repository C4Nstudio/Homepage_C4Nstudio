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
    blogTitle: "谈谈主页开发过程",
    blogCreatedTime: "08-02-2016",
    blogCategory: "工作室",
    blogDescription: "C4Nstudio.com开发过程中使用的窍门、遇到的问题与解决办法",
    blogBody: "#### 想法来源\n\n其实许久之前就已经知道对前端开发工程师（更广地说Web开发工程师吧）来说，开发一个个人主页或个人博客是一种很好的全面提升动手能力，增进对网站全貌了解，和理解Web工作原理的方式，但是由于种种原因并没有把这件事情“提上日程”。\n\n而在这个暑假刚刚开始的时候，正巧在由学院联系一些公司开展的一个实习（更应该说是一个十几天的培训班）中，我们小组在短短几天的时间里合作开发了一个类似“超级课程表”的网页应用，实际作品效果如何暂且不说，但在这个过程中给我带来的一个最大的收获就是让我对后台操作的难度预期明显放低了。也正巧在这个时候我正在了解一款影响力日渐提升的Javascript运行环境——Node.js，使用它可以编写出大部分，甚至全部的服务器端代码，所以我想到能不能借此工具开发一个完整的网站。这个网站一个目标就是像我在申请Github学生优惠时填写的那样，作为一个“技术试验场“，另一个就是能够把自己的一些想法通过这个渠道分享给身边的前端爱好者（虽说目前搜索引擎排名都还没有...）。\n\n#### 开发过程\n\n可能在这短短的篇幅中我没办法对整个网站开发的过程进行详实的记录，但是在此我想尽量把我遇到的一些坑和最有感触的地方写下来。\n\n##### 一、创建项目\n\n最初进行项目准备的时候遇到的问题就是到底应该以怎样的项目结构来创建项目，简单地说就是如何创建各种文件夹以及设置它们之间的关系。首先我不得不提到的就是阮一峰老师的《Node.js学习笔记》系列教程，它对我的一整个开发过程都起到了很大的帮助。而在这个问题上，由于我使用的是轻量级且简单易用的Node.js Web MVC开发框架——Express，在教程中我了解到可以简单地通过命令行的方式创建项目结构（事实上npm中的许多模块都有这样的功能），具体操作可在命令行中输入“express”及项目名称。\n\n通过这个简单的过程就可以创建一个完整的项目目录，其中也包括用于存放依赖文件的node_modules文件夹、用于定义依赖项的配置文件package.json、用于存放图片脚本和样式文件的public文件夹、用于存放路由文件的routes文件夹，以及用于存放模板文件的views文件夹。不仅如此，在各个文件夹当中也已经生成了一份可供直接运行的样板文件，只需要在app.js文件中添加对一个端口的监听即可在命令行中运行文件并用浏览器运行页面查看结果。\n\n##### 二、版本控制\n\n使用版本控制工具不仅仅能帮助他人追溯进度和合并代码，更大的受益者还是自己。使用版本控制工具可以让自己从开发的整个过程上宏观地记录自己的进度、所做的修改和亟待完善的地方，还能在编写一些可能破坏主干的代码时通过创建分支的方式来规避风险，并在完善后合并到主干中去。\n\n我在项目中使用的是分布式版本控制工具Git的服务提供商Github，除了使用Git shell来以命令行的方式进行操作以外，Github还提供了一个桌面客户端工具Github desktop，可以方便地管理本地项目。在使用Github desktop的过程中遇到的一个可能会令人感到哭笑不得的问题是当提交的修改数量超过3000个左右的时候，用desktop是提交不了的，为此我到google上和stackover flow上都没有找到太好的解决办法，但是其实这个问题很好解决。第一，提交的修改如此之多的情况本来就不应该出现，因为其实这些修改基本上都来自依赖文件，而依赖文件和编译文件不应该包含到提交的文件当中，它们要么是不会也不应该变动的，要么是可以即时生成的。对于依赖文件来说在用Node.js开发时只需要把包含的所有依赖文件记录在package.json当中，然后在提交代码前在项目目录中与node_modules同级位置新建一个.gitignore文件把该文件夹忽略即可。第二，假设确实需要提交大量的修改，使用Github desktop提交失败时，可以直接打开Git shell通过命令行方式手动进行提交，如果遇到文件名过长的问题也有对应的修改配置的方法。\n\n#### 使用到的技术和工具\n\n前端框架：Foundation\n\n用户界面开发类库：React.js\n\n后台开发环境：Node.js\n\n数据库：MongoDB\n\n版本控制工具：Github\n\n模块打包工具：Webpack\n\n服务器：腾讯云服务器\n\n#### 参考相关书籍\n\n《Node.js+MongoDB+AngularJS Web开发》\n\n《React 引领未来的用户界面开发框架》\n\n《Web全栈工程师的自我修养》\n\n《高性能网站建设指南》\n\n《跟我学SEO》\n\n"
  },
  {
    blogTitle: "Hi, everybody!",
    blogCreatedTime: "08-01-2016",
    blogCategory: "杂七杂八",
    blogDescription: "简单介绍下个人主页",
    blogBody: "**C4Nstudio.com**是笔者C4N独立开发的个人主页及博客，使用包括[React](https://facebook.github.io/react/)、[Node.js](https://nodejs.org/en/)、[Foundation](http://foundation.zurb.com/)和[Webpack](https://webpack.github.io/)等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：\n\n* **工作室**：笔者个人学习笔记分享，记录前端探索路上的点（ge）点（zhong）滴（keng）滴（shi）\n\n* **玩点啥**：分享笔者个人兴趣爱好，PS、AE、PR修图做特效有空耍耍，书法、篆刻、写剧本偶尔玩玩\n\n* **杂七杂八**：总有那么一些不合群的小家伙\n\n* **全部文章**：（就以上及其他一些分类的文章总和啦）\n\nHope you enjoy."
  }
]
