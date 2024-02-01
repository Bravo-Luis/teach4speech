class WSInstructorManager {
    private static instance: WSInstructorManager;
    private ws: WebSocket;
    private url: string;
    private reconnectInterval: number = 1000; 
    private maxReconnectInterval: number = 30000; 
    private shouldReconnect: boolean = true;

    private constructor() {
        this.url = process.env.VITE_WEBSOCKET_URL || 'ws://localhost:8080/ws';
        this.ws = new WebSocket(url);
        this.setupListeners();
    }

    public static getInstance(url: string): WSInstructorManager {
        if (!WSInstructorManager.instance) {
            WSInstructorManager.instance = new WSInstructorManager(url);
        }
        return WSInstructorManager.instance;
    }

    private setupListeners(): void {
        this.ws.onopen = () => {
            console.log("WebSocket connected");
            this.reconnectInterval = 1000; 
            this.rejoinGameSession();
        };


        this.ws.onmessage = (event: MessageEvent) => {
            console.log("Message received:", event.data);
            const data = JSON.parse(event.data);
        };

        this.ws.onerror = (error: Event) => {
            console.error("WebSocket error:", error);
        };

        this.ws.onclose = () => {
            console.log("WebSocket disconnected");
            if (this.shouldReconnect && this.ws.readyState !== WebSocket.CLOSED) {
                setTimeout(() => {
                    this.ws = new WebSocket(this.url);
                    this.setupListeners();
                }, this.reconnectInterval);
                this.reconnectInterval = Math.min(this.reconnectInterval * 2, this.maxReconnectInterval);
            }
        };
    }

    private rejoinGameSession(): void {
        const gameSessionId = localStorage.getItem('gameSessionId');
        if (gameSessionId) {
            this.sendMessage(JSON.stringify({ action: 'rejoin', gameSessionId }));
        }
    }

    public sendMessage(message: string): void {
        if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(message);
        } else {
            console.error("WebSocket is not open. Message not sent.");
        }
    }
}

export default WSInstructorManager;
