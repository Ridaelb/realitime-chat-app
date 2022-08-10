import React from "react";

import { Link } from "react-router-dom";

import { Button, InputAdornment, TextField} from "@mui/material";

import "./Join.css";
import PersonIcon from '@mui/icons-material/Person';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';

function Join({ username, setUsername, room, setRoom }) {
  return (
    <div className="join-container">
      <div className="form-container">
        <h1>Join a room</h1>
        <div className="input-container">
          <TextField
            placeholder="Username"
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            placeholder="Room"
            fullWidth
            onChange={(e) => {
              setRoom(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Grid3x3Icon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button
          onClick={(e) => (!username || !room ? e.preventDefault() : null)}
          to={"/chat"}
          component={Link}
          type="submit"
          variant="contained"
          fullWidth
          className="join-btn"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Join;