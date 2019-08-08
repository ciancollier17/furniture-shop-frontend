import React from 'react';

const Footer = (props) => {
  return (
    <footer id="footer">
      <a href="#collections" id="scrolldown"><h3>Scroll Down</h3></a>
      <div id="footer-menu">
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
        <div id="social-media-buttons">
          <a className="facebook" href="#"><i className="fab fa-facebook-square"></i></a>
          <a className="instagram" href="#"><i className="fab fa-instagram"></i></a>
          <a className="twitter" href="#"><i className="fab fa-twitter-square"></i></a>
        </div>
        <a href="/" onClick={(e) => {e.preventDefault(); props.showcaseUpdateHandler(0)}}><div className="arrow"><h3>&lt;</h3></div></a>
        <a href="/" onClick={(e) => {e.preventDefault(); props.showcaseUpdateHandler(1)}}><div className="arrow"><h3>&gt;</h3></div></a>
      </div>
    </footer>
  );
}

export default Footer;
