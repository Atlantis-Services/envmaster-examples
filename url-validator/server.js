import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const TIMEOUT = parseInt(process.env.TIMEOUT || '5000');
const PROXY_URL = process.env.PROXY_URL || null;

app.post('/validate', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT);

    const fetchOptions = { signal: controller.signal };

    if (PROXY_URL) {
      fetchOptions.agent = new (await import('https-proxy-agent')).default(PROXY_URL);
    }

    const response = await fetch(url, fetchOptions);
    clearTimeout(timeout);

    res.json({ url, status: response.status, statusText: response.statusText });
  } catch (err) {
    res.json({ url, status: 'unreachable', error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`URL Validator running on port ${PORT}`);
});
