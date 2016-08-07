var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer id="footer" className='text-center'>
        <small>Copyright&nbsp;&copy;&nbsp;<a href='#'>C4Nstudio.com</a> . All Rights Reserved. Powered By React & Foundation</small>
      </footer>
    );
  }
});

module.exports = Footer;
