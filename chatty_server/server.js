// server.js

const express = require('express');
const SocketServer = require('ws').Server;
// Generating a unique ID to each message.
const uuidv1 = require('uuid/v1');


// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () =>
   console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });
// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.

wss.on('connection', (ws) => { //Connecting to the server
  // console.log('Client connected');
  ws.on('message', (message) => { // receiving data FROM the app.jsx
    let data = JSON.parse(message);
    let dataUser = {
      username: data.username,
      id: uuidv1(),
      content: data.content
    }
  wss.broadcast(JSON.stringify(dataUser))
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});

wss.broadcast = (data)=> {
  console.log(data, " this is the data");
  wss.clients.forEach((client)=> {
    console.log( " this is the data");
    client.send(data);
    }
  );
};

// wss.on('connection', (ws)=> {
//   ws.on('message', (data) => {
//     // Broadcast to everyone else.
//     wss.clients.forEach((client)=> {
//       if (client !== ws && client.readyState === wss.OPEN) {
//         client.send(data);
//       }
//     });
//   });
// });














