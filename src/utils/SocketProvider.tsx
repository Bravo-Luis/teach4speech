import { createContext, useContext } from 'react';
import { io } from 'socket.io-client';

const dummySocketManager = {
  connect: () => {},
  disconnect: () => {},
  on: (event :any, callback :any) => {
    console.log("Listening for event: ", event);
    callback();
  },
  off: (event:any) => {
    console.log("Stopped listening for event: ", event);
  },
  emit: (event:any, data:any) => {
    console.log("Emitting event: ", event, " with data: ", data);
  },
  isConnected: () => false,
};

const SocketContext = createContext(dummySocketManager);

function SocketProvider({ children }: any) {
  const sharedState = new SocketManager();

  return (
    <SocketContext.Provider value={sharedState}>
      {children}
    </SocketContext.Provider>
  );
}

function SocketConsumer() {
  const sharedState = useContext(SocketContext);
  return sharedState;
}

class SocketManager {
  socket;
  
  constructor() {
    const storedSocketId = this.getStoredSocketId();
    this.socket = io(import.meta.env.VITE_SERVER_URL, {
      autoConnect: false,
      query: {
        socketId: storedSocketId
      }
    });

    this.socket.on('connect', () => {
      this.storeSocketId(this.socket.id);
      console.log(`Connected with socket ID: ${this.socket.id}`);
    });
  }

  getStoredSocketId() {
    return localStorage.getItem('socketId');
  }

  storeSocketId(socketId:any) {
    localStorage.setItem('socketId', socketId);
  }

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  on(event:any, callback:any) {
    this.socket.on(event, callback);
  }

  off(event:any) {
    this.socket.off(event);
  }

  emit(event:any, data:any) {
    this.socket.emit(event, data);
  }

  isConnected() {
    return this.socket.connected;
  }
}

export { SocketProvider, SocketConsumer };
