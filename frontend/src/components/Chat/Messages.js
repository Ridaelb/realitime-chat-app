import React from "react";

import ScrollTotoBottom from "react-scroll-to-bottom";

import Message from "./Message";

import './Chat.css'

function Messages({ messages, username}) {
  return (
    <ScrollTotoBottom className="messages">
      {messages.map((message, i) => <div key={i}><Message message={message} currentUser={username}/></div>)}
    </ScrollTotoBottom>
  );
}

export default Messages;
