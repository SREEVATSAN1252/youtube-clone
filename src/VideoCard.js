import { Avatar } from "@mui/material";
import React from "react";
import "./VideoCard.css"
import CircleIcon from '@mui/icons-material/Circle';
function VideoCard({ image, tittle, channel, views, timestamp, channelimage }) {
  return (
    <div className="videoCard">
      <img className="videocard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt="{channel}"
          src={channelimage}
        />
        <div className="video__text">
          <h4>{tittle}</h4>
          <p>{channel}</p>
          <p>
              {views} <CircleIcon className="dot"/> {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
