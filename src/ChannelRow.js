import { Avatar } from "@mui/material";
import React from "react";
import "./ChannelRow.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" src={image} alt={channel} />
      <div className="channel__text">
        <h4>
          {channel} {verified && <CheckCircleIcon className="tick" />}
        </h4>
        <p>
          {subs} subcribers <CircleIcon className="dot" /> {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
      
    </div>
  );
}

export default ChannelRow;
