import React, { createContext, useContext, ReactNode } from 'react';
import WSInstructorManager from './WSInstructorManager';

interface IWSInstructorManager {
    sendMessage(message: string): void;
}

const WebSocketInstructorContext = createContext<IWSInstructorManager | null>(null);

interface WebSocketProviderProps {
    children: ReactNode;
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
    const websocketInstance = WSInstructorManager.getInstance('ws://your-websocket-url');

    return (
        <WebSocketInstructorContext.Provider value={websocketInstance}>
            {children}
        </WebSocketInstructorContext.Provider>
    );
};

export const useWebSocket = (): IWSInstructorManager | null => useContext(WebSocketInstructorContext);
