import React from "react";

import ReactEmoji from "react-emoji";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Message({ message: { username, text }, currentUser }) {
  let isSentByCurrentUser = false;

  const trimmedName = currentUser.trim().toLowerCase();

  if (username === trimmedName) {
    isSentByCurrentUser = true;
  }
  return !username || username === "admin" ? (
    <div style={{ textAlign: "center" }}>
      <p>{text}</p>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: isSentByCurrentUser ? "rgb(255,255,255, 0.04)" : null,
        paddingInline: "10px",
      }}
    >
      <AccountCircleIcon fontSize="large" />
      <p style={{ marginLeft: "1rem" }}>
        <b>{username}</b>
        <br />
        {ReactEmoji.emojify(text)}
      </p>
    </div>
  );
}

export default Message;
