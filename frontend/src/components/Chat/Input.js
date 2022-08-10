import React from "react";
import { IconButton, InputBase, Paper } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

function Input({ message, setMessage, sendMessage }) {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        background: "rgb(255,255,255, .06) !important",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, borderWidth: "0 !important" }}
        placeholder="Message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <IconButton
        onClick={(event) => {
          sendMessage(event);
        }}
        sx={{ p: "10px", backgroundColor: "none !important" }}
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}

export default Input;
