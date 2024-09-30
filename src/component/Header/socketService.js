import { io } from 'socket.io-client';

let socket;

const connect = (serverURL, userId) => {
  console.log('Connecting to:', serverURL);
  console.log('User ---------------:', userId);
  socket = io(serverURL, {
    // transports: ['websocket'], // Force WebSocket transport
  });

  socket.on('connect', () => {
    console.log('Socket connected:', socket.id);
  });
  socket.on('notification', (notification) => {
    console.log('-------- Notified from the server !!! --------', notification);
    callback(notification);
  });
  socket.on('connect_error', (error) => {
    console.error('Connection error:', error);
  });

  socket.on('disconnect', (reason) => {
    console.log('Socket disconnected:', reason);
  });
};

// Function to listen for notifications
const onNotification = (callback) => {
  if (socket) {
    socket.on('notification', (notification) => {
      console.log('-------- Notified from the server !!! --------', notification);
      callback(notification);
    });
  } else {
    console.error('Socket not connected. Unable to listen for notifications.');
  }
};

// Function to disconnect from the socket server
const disconnect = () => {
  if (socket) {
    socket.disconnect();
  }
};

export default {
  connect,
  disconnect
  
};
