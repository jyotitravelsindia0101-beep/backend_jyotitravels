import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { connectDB } from './config/db';
import { initKeepAliveCron } from './utils/cron';

const PORT = Number(process.env.PORT) || 5000;

// Start server immediately so Render port binding succeeds instantly
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Jyoti Travels Backend Server listening on 0.0.0.0:${PORT}`);
  // Connect to MongoDB Atlas
  connectDB();
  // Start 14-minute keep-alive cron job
  initKeepAliveCron();
});
