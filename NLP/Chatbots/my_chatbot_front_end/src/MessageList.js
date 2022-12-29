
// This component is responsible for rendering the list of messages. (I think?)

import React from 'react';

const MessageList = ({ messages }) => (
  <ul>
    {messages.map(message => (
      <li key={message.id}>{message.text}</li>
    ))}
  </ul>
);

export default MessageList;
