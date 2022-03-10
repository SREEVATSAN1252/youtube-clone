import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to={`/`}>
          <img
            className="header__logo"
            src="https://www.theheadboardworkshop.co.uk/advice/wp-content/uploads/2020/02/502px-Logo_of_YouTube_2015-2017.svg_.png"
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder=" Search"
        />
        <div className="header__inputButton">
          <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__inputButton" />
          </Link>
        </div>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
    </div>
  );
}

export default Header;
