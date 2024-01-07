const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
const WebSocket = require('ws');
const crypto = require('crypto');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const sessions = new Map();

function createSession(ws) {
    const sessionId = crypto.randomBytes(3).toString('hex');
    sessions.set(sessionId, {
        ws,
        status: 'waiting',
        students: [],
        answers: []
    });
    return sessionId;
}

function startSession(ws) {
    for (const [key, session] of sessions) {
        if (session.ws === ws && session.status === 'waiting') {
            session.status = 'started';
            session.ws.send('started');
            session.students.forEach(student => student.ws.send('started'));
            return true;
        }
    }
    return false;
}

function joinSession(sessionId, studentName, ws) {
    const session = sessions.get(sessionId);
    if (!session) {
        ws.close();
        return;
    }

    const studentId = String(crypto.randomBytes(16).toString('hex'));
    session.students.push({
        studentId,
        ws,
        answers: [],
        score: 0
    });

    session.ws.send(JSON.stringify({ joined: studentName }));

    ws.send(studentId);
}

function submitAnswer(sessionId, answer, ws) {
    const session = sessions.get(sessionId);
    if (!session || session.status !== 'started') {
        return;
    }

    session.ws.send(answer );
    session.students.forEach(student => {
        if (student.ws === ws) {
            student.answers.push(answer);
        }
    });
}


wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        let data;
        try {
            data = JSON.parse(message);
        } catch (e) {
            console.error('Invalid JSON:', message);
            ws.close();
            return;
        }

        const { role, code, name, sessionId, answer } = data;

        if (role === 'instructor') {
            if (code === 'create') {
                const sessionId = createSession(ws);
                ws.send(sessionId);
            } else if (code === 'start') {
                if (!startSession(ws)) {
                    ws.send('Session not found or already started');
                }
            }
        } else if (role === 'student') {
            if (code === 'join') {
                joinSession(sessionId, name, ws);
            } else if (code === 'answer') {
                submitAnswer(sessionId, answer, ws);
            }
        }
    });

    ws.on('close', () => {
        sessions.forEach((session, sessionId) => {
            if (session.ws === ws) {
                sessions.delete(sessionId);
            }
        });
    });

    ws.send("Client connected");
});

server.listen(port, () => console.log(`Server is running on port ${port}`));
