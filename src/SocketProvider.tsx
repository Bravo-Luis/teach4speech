import  { createContext, useContext } from 'react';
import { io } from 'socket.io-client';

const dummySocketManager = {
  connect: () => {},
  disconnect: () => {},
  on: (event: string, callback: Function) => {},
  off: (event: string) => {},
  emit: (event: string, data: any) => {},
  isConnected: () => false,
};

const SocketContext = createContext(dummySocketManager);

function SocketProvider({ children } : any) {
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

  socket : any;

  constructor() {
    this.socket = io(import.meta.env.VITE_SERVER_URL , {autoConnect: false});
  }

  connect() {
    this.socket.connect();
    if (this.socket.connected) {
      console.log("Socket connected.");
    }
  }

  disconnect() {
    this.socket.disconnect();
  }

  on(event : string, callback : any) {
    this.socket.on(event, callback);
  }

  off(event : string) {
    this.socket.off(event);
  }

  emit(event : string, data : any) {
    this.socket.emit(event, data);
  }

  isConnected() {
    return this.socket.connected as boolean;
  }

}

export { SocketProvider, SocketConsumer};
