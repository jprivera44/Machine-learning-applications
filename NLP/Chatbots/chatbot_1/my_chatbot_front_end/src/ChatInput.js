//Test: This component is for the chat input box. (I think?)

import React from 'react';
import { useState } from 'react';

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text) {
      onSend(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;