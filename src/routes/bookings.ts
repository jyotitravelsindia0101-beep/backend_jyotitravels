import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { validateRequest } from '../middleware/validate';
import { sendBookingNotificationEmail } from '../utils/mailer';

const router = Router();

export interface BookingEnquiry {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  packageId?: string;
  packageName: string;
  travelDate?: string;
  guestsCount?: number;
  message?: string;
  createdAt: string;
}

const BOOKINGS_STORAGE: BookingEnquiry[] = [];

// Zod Schema for Booking Enquiry Validation
export const createBookingSchema = z.object({
  customerName: z.string().min(2, 'Customer name must be at least 2 characters long'),
  phone: z.string().min(10, 'Valid 10-digit phone number is required'),
  email: z.string().email('Valid email address is required'),
  packageId: z.string().optional(),
  packageName: z.string().min(2, 'Package name is required'),
  travelDate: z.string().optional(),
  guestsCount: z.number().min(1, 'At least 1 guest required').optional().default(1),
  message: z.string().optional()
});

// GET /api/bookings - Get all submitted booking enquiries
router.get('/', (_req: Request, res: Response) => {
  res.json({
    status: 'success',
    count: BOOKINGS_STORAGE.length,
    data: BOOKINGS_STORAGE
  });
});

// POST /api/bookings - Submit tour booking enquiry
router.post('/', validateRequest(createBookingSchema), (req: Request, res: Response) => {
  const { customerName, phone, email, packageId, packageName, travelDate, guestsCount, message } = req.body;

  const newBooking: BookingEnquiry = {
    id: `book-${Date.now()}`,
    customerName: customerName.trim(),
    phone: phone.trim(),
    email: email.trim().toLowerCase(),
    packageId,
    packageName: packageName.trim(),
    travelDate,
    guestsCount,
    message,
    createdAt: new Date().toISOString()
  };

  BOOKINGS_STORAGE.unshift(newBooking);

  // Trigger non-blocking email dispatch if SMTP is configured
  sendBookingNotificationEmail(newBooking).catch(err => {
    console.error('Email dispatch error:', err);
  });

  res.status(201).json({
    status: 'success',
    message: 'Booking enquiry submitted successfully to Jyoti Travels!',
    data: newBooking
  });
});

export default router;
