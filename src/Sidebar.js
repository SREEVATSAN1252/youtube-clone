import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ExploreIcon from "@mui/icons-material/Explore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TheatersIcon from "@mui/icons-material/Theaters";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import FeedbackIcon from "@mui/icons-material/Feedback";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} tittle="Home" />
      <SidebarRow Icon={WhatshotIcon} tittle="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} tittle="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} tittle="VideoLibrary" />
      <SidebarRow Icon={HistoryIcon} tittle="History" />
      <SidebarRow Icon={OndemandVideoIcon} tittle="Ondemand" />
      <SidebarRow Icon={WatchLaterIcon} tittle="WatchLater" />
      <SidebarRow Icon={ThumbUpOffAltIcon} tittle="ThumbUp" />
      <SidebarRow Icon={ExploreIcon} tittle="Explore" />

      <SidebarRow Icon={LiveTvIcon} tittle="Live" />
      <SidebarRow Icon={TheatersIcon} tittle="Movies" />
      <SidebarRow Icon={SportsEsportsIcon} tittle="Sports" />
      <SidebarRow Icon={SettingsIcon} tittle="Settings" />
      <SidebarRow Icon={HelpOutlineIcon} tittle="Help" />
      <SidebarRow Icon={ReportGmailerrorredIcon} tittle="Report" />
      <SidebarRow Icon={FeedbackIcon} tittle="Feedback" />
      <SidebarRow Icon={ExpandMoreIcon} tittle="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
