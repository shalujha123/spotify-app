import React from "react";
import "../Styles/RightMenu.css";
import { FaBell, FaCogs, FaCrown, FaRegHeart, FaSun } from "react-icons/fa";
import Profile from '../img/profile.jpg';

const RightMenu = () => {
  return (
    <div className="rightMenu">
      <div className="goPro">
        <i>
          <FaCrown />
          <p>
            Go <span>Pro</span>
          </p>
        </i>

        <i>
          <FaBell />
        </i>

        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className="profile">
        <i>
          <FaSun />
        </i>
        <i>
          <FaCogs />
        </i>

        <div className="profileImage">
          <img src={Profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
