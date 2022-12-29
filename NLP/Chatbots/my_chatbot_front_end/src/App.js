import logo from './logo.svg';
import './App.css';

//test importing the getMessages and sendMessage functions from the api.js file
import { getMessages, sendMessage } from './api';
import { useState, useEffect } from 'react';

// test: importing the MessageList and ChatInput components
import MessageList from './MessageList';
import ChatInput from './ChatInput';

//this function renders the front end of the app
function App() {

  //test: setting up the constant to hold the messages for the current state
  const [messages, setMessages] = useState([]);

  // test not sure what this does
  useEffect(() => {

    getMessages().then(messages => {
      setMessages(messages);
    });

  }, []);

  //test: I think this section sends a message to the backend?

  const handleSendMessage = (message) => {
    sendMessage(message).then(() => {
      // Update the messages list
      setMessages([...messages, message]);
    });
  };



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <MessageList messages={messages} />
          <ChatInput onSend={handleSendMessage} />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


