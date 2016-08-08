var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="row column" id="footer" className='text-center'>
        <div className="medium-12 column">
          <small>Copyright&nbsp;&copy;&nbsp;<a href='#'>C4Nstudio.com</a> . All Rights Reserved. Powered By React & Foundation</small>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
