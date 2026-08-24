import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import toursRouter from './routes/tours';
import reviewsRouter from './routes/reviews';
import bookingsRouter from './routes/bookings';

dotenv.config();

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Health Check Endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'success',
    message: 'Jyoti Travels REST API Backend is running smoothly',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/tours', toursRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/bookings', bookingsRouter);

// 404 Route Handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: 'Requested API endpoint not found'
  });
});

// Global Error Handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  });
});

export default app;
