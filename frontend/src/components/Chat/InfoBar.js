import React from "react";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import OnlineUsers from "./OnlineUsers";

function InfoBar({ room, users }) {
  return (
    <>
      <OnlineUsers users={users} />
      <div className="infobar-container">
        <h2># {room}</h2>
      </div>
      <div style={{ position: "absolute", top: 30, right: 30}}>
        <a href="/">
          <ExitToAppIcon fontSize="large" />{" "}
        </a>
      </div>
    </>
  );
}

export default InfoBar;
