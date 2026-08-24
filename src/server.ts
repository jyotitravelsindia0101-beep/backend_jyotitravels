import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { connectDB } from './config/db';
import { initKeepAliveCron } from './utils/cron';

const PORT = Number(process.env.PORT) || 5000;

// Connect to MongoDB Atlas and start server
connectDB().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Jyoti Travels Backend Server running on port ${PORT}`);
    // Start 14-minute keep-alive cron job
    initKeepAliveCron();
  });
});
