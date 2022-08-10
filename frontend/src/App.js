import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = () => {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Join
                username={username}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
              />
            }
          />
          <Route
            path="/chat"
            element={
              !username || !room ? (
                <Navigate to="/"></Navigate>
              ) : (
                <Chat username={username} room={room} />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
