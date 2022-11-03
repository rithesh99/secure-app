import React from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/inlove.svg";

function HomePage() {
  return (
    <div className="home-page">
      <img className="home-page-icon" src={Icon} alt="" />
      <p className="home-page-text">Welcome back My love ❤️🔥</p>
      <p className="home-page-text-2">
        😍Let's make our love❤️more spicy👅and horny🔞🤳
      </p>
      <div className="home-page-btn-section">
        <Link to="/video" className="home-page-btn">
          Record Videos
        </Link>
        <Link to="/image" className="home-page-btn">
          Take Pics
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
