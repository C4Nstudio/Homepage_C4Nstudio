module.exports = function() {
  this.getCategorys = function(posts) {
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

  this.getPosts = function(postsData) {
    var posts = new Array();

    for(var i = 0; i < postsData.length; i++) {
      var post = {
        blogTitle: postsData[i]['blogTitle'],
        blogCreatedTime: postsData[i]['blogCreatedTime'],
        blogCategory: postsData[i]['blogCategory'],
        blogDescription: postsData[i]['blogDescription'],
        blogBody: postsData[i]['blogBody']
      };

      posts.push(post);
    }

    return (posts.length == 0 ? null : posts);
  };

}
