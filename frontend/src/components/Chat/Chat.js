import React, { useState, useEffect } from "react";
import { Navigate } from "react-router";
import io from "socket.io-client";
import InfoBar from "./InfoBar";
import Input from "./Input";
import Messages from "./Messages";

import "./Chat.css";

let socket;

function Chat({ username, room }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([""]);

  const [users, setUsers] = useState([]);

  const [error, setError] = useState();

  const ENDPOINT = "https://rcar.herokuapp.com/";

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("join", { username, room }, (error) => {
      if (error) {
        setError(true);
      }
    });
  }, [ENDPOINT, username, room]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
      console.log(users);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return error ? (
    <Navigate to={"/"}></Navigate>
  ) : (
    <div className="chat-container">
      <InfoBar room={room} users={users} />
      <div className="chat">
        <Messages messages={messages} username={username} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

export default Chat;
