import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: clientOrigin }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'xmaxify-api',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/site', (_req, res) => {
  res.json({
    name: 'Xmaxify',
    tagline: 'React and Node.js website foundation',
    contactEmail: 'hello@xmaxify.com',
  });
});

app.listen(port, () => {
  console.log(`Xmaxify API running on http://localhost:${port}`);
});
