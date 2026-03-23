import express from 'express';
import dns from 'dns/promises';

const app = express();
app.use(express.json());

const PORT = parseInt(process.env.PORT || '3000');
const DNS_TIMEOUT = parseInt(process.env.DNS_TIMEOUT || '5000');
const RECORD_TYPES = (process.env.RECORD_TYPES || 'A,AAAA,MX,CNAME,TXT')
  .split(',')
  .map(t => t.trim().toUpperCase());

app.post('/scan', async (req, res) => {
  const { domain } = req.body;
  if (!domain) return res.status(400).json({ error: 'Domain is required' });

  const results = {};

  try {
    for (const type of RECORD_TYPES) {
      try {
        const records = await Promise.race([
          dns.resolve(domain, type),
          new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), DNS_TIMEOUT))
        ]);
        results[type] = records;
      } catch (err) {
        results[type] = [];
      }
    }

    res.json({ domain, records: results });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`DNS Record Scanner running on port ${PORT}`);
});
