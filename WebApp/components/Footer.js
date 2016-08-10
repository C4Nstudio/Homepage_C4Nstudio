var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer id="footer" className='text-center'>
        <div>
          <small>Copyright&nbsp;&copy;&nbsp;<a href='http://C4Nstudio.com'>C4Nstudio.com</a> . All Rights Reserved.</small>
        </div>
        <div>
          <small>Powered By React & Foundation</small>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
