import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaLinkedinIn,
} from "react-icons/fa";
import FootballPlayer from "../../assets/images/FootballPlayer.png";

const FollowUs = () => {
  return (
    <div className="follow-us-container">
      <div className="follow-us-content">
        <h2>FOLLOW US</h2>
        <div className="social-icons">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaSnapchatGhost />
          <FaLinkedinIn />
        </div>
        <p className="hashtag">#UTTRAKHANDGAMES2024</p>
      </div>
      <div className="follow-us-image">
        <img src={FootballPlayer} alt="Athlete with football" />
      </div>
    </div>
  );
};

export default FollowUs;
