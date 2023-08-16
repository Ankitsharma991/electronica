import React from "react";
import playStore from "../../../images/playStore.png";
import appStore from "../../../images/appStore.png";
import "./footer.css"

function Footer() {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download our App</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="appstore" />
      </div>
      <div className="midFooter">
        <h1>Electronica</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2023 &copy; AnkitSharma991</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://Instagram.com/An_kit.11">Instagram</a>
        <a href="http://twitter.com/Ankitsharma991">Twitter</a>
        <a href="http://linkedin.com/ankitsharma991">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
