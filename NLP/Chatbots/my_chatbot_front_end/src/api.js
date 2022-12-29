// this file is to be used to fetch data from the backend

export const getMessages = () => {
    return fetch('http://localhost:3000/api/messages')
      .then(response => response.json());
  };
  
  export const sendMessage = (message) => {
    return fetch('http://localhost:3000/api/messages', {
      method: 'POST',
      body: JSON.stringify(message),
    }).then(response => response.json());
  };

  