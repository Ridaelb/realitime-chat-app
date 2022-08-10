import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import PeopleIcon from "@mui/icons-material/People";

export default function OnlineUsers({ users }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          alignItems: "center",
          top: 20,
          right: 80,
        }}
      >
        <Typography>{users.length}</Typography>
        <IconButton onClick={handleClick}>
          <PeopleIcon fontSize="large" />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {users.map(({ username }) => (
          <div key={username} className="online-users">
            <svg height="40" width="33">
              <circle cx="20" cy="20" r="5" fill="green" />
            </svg>
            <Typography sx={{ minWidth: 100 }}>{username}</Typography>
          </div>
        ))}
      </Menu>
    </React.Fragment>
  );
}
