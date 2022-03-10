import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Avatar } from "@mui/material";
import "./SearchVideos.css";
function SearchVideos({
  image,
  channel,
  channelimage,
  tittle,
  views,
  timestamp,
}) {
  return (
    <div className="searchVideos">
      <img className="searchVideos__thumbnail" src={image} alt="" />
      <div className="searchVideos__info">
        <h4>{tittle}</h4>
        <div className="searchVideo__text">
          <Avatar
            className="searchAvatar__avatar"
            alt="{channel}"
            src={channelimage}
          />
          <p>{channel}</p>
          <p>
            {views} <CircleIcon className="dot" /> {timestamp}
          </p>
        </div>
        <h5>
          In this FREE LIVE training, Qazi will show you how to create a full
          stack, LinkedIn CLONE using React, Firebase, Redux, and ...
        </h5>
      </div>
    </div>
  );
}

export default SearchVideos;
