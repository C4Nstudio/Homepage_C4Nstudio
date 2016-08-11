var React = require('react');

var IndexMainContent = React.createClass({
  render: function() {
    return (
      <div id="index-main-content">
        <div className="row" id="callout">
          <div className="medium-12 column">
            <a href="#">
              <img src="/images/myPic.jpg" alt="myPic.jpg"/>
            </a>
          </div>
        </div>
        <div className="row column" id="intro">
          <div className="medium-12 column" id="contacts">
            <div className="float-left">
              <h3><strong>Get to know me</strong><small>&nbsp;关注我</small></h3>
            </div>
            <div className="float-right">
              <a href="javascript:window.open('https://about.me/CanWung')" id="me-link" title="https://about.me/CanWung">
                <img src="/images/me.png" alt="me" />
              </a>
              <a href="javascript:window.open('https://github.com/C4Nstudio')" id="github-link" title="https://github.com/C4Nstudio">
                <img src="/images/octocat.png" alt="github" />
              </a>
              <a href="javascript:window.open('https://www.facebook.com/can.wung')" id="facebook-link" title="https://www.facebook.com/can.wung">
                <img src="/images/facebook.png" alt="facebook" />
              </a>
            </div>
          </div>
          <div className="row column" id="introductions">
            <div className="medium-4 column">
              <div className="introduction-tag">
                <img src="/images/wordMosaic.png" className="introduction-img" alt="wordMosaic.png" />
                <div className="introduction-text">
                  <h3><small>我是</small>学生</h3>
                  <p>华南农业大学2013级软件工程专业</p>
                  <p>曾担任学院团委副书记</p>
                  <p>获得校二等奖学金及三好学生称号</p>
                </div>
              </div>
            </div>
            <div className="medium-4 column">
              <div className="introduction-tag">
                <img src="/images/chupin.png" className="introduction-img" alt="chupin.png" />
                <div className="introduction-text">
                  <h3><small>我爱</small>前端开发</h3>
                  <p>负责点解App主页等网站前端开发</p>
                  <p>喜欢浏览学习Alloyteam等前端博客</p>
                  <p>希望成为一名终身学习的前端开发工程师</p>
                </div>
              </div>
            </div>
            <div className="medium-4 column">
              <div className="introduction-tag">
                <img src="/images/videoClip.png" className="introduction-img" alt="videoClip.png" />
                <div className="introduction-text">
                  <h3><small>我爱</small>视频制作</h3>
                  <p>主导校运会预告片、开幕式视频后期制作</p>
                  <p>自编自导自演学院迎新视频</p>
                  <p>喜欢鼓捣PS、AE、PR修图做特效</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = IndexMainContent;
