import express from 'express';
import net from 'net';

const app = express();
app.use(express.json());

const PORT = parseInt(process.env.PORT || '3000');
const TIMEOUT = parseInt(process.env.TIMEOUT || '2000');

async function checkPort(host, port) {
    return new Promise((resolve) => {
        const socket = new net.Socket();
        let status = 'closed';

        socket.setTimeout(TIMEOUT);
        socket.on('connect', () => {
            status = 'open';
            socket.destroy();
        });
        socket.on('timeout', () => socket.destroy());
        socket.on('error', () => {});
        socket.on('close', () => resolve({ port, status }));

        socket.connect(port, host);
    });
}

app.post('/scan', async (req, res) => {
    const { host, ports } = req.body;
    if (!host) return res.status(400).json({ error: 'Host/IP is required' });
    if (!ports || !Array.isArray(ports)) {
        return res.status(400).json({ error: 'Ports must be an array of numbers' });
    }

    const results = await Promise.all(ports.map(p => checkPort(host, p)));
    res.json({ host, results });
});

app.listen(PORT, () => {
    console.log(`Port Scanner running on port ${PORT}`);
});
