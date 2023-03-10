//Original code from Adrian Twarog
//https://www.youtube.com/watch?v=bB7xkRsEq-g&list=WL&index=19&t=1419s


// create a react componenet that inputs a textarea message then performs a fetch request to localhost:3001 gets back a response as a data.message and displays that message in a box below

import React, { useState } from 'react';
import './App.css';


function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div>{response}</div>
    </div>
  );
}

export default App