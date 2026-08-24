"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookingSchema = void 0;
const express_1 = require("express");
const zod_1 = require("zod");
const validate_1 = require("../middleware/validate");
const mailer_1 = require("../utils/mailer");
const router = (0, express_1.Router)();
const BOOKINGS_STORAGE = [];
// Zod Schema for Booking Enquiry Validation
exports.createBookingSchema = zod_1.z.object({
    customerName: zod_1.z.string().min(2, 'Customer name must be at least 2 characters long'),
    phone: zod_1.z.string().min(10, 'Valid 10-digit phone number is required'),
    email: zod_1.z.string().email('Valid email address is required'),
    packageId: zod_1.z.string().optional(),
    packageName: zod_1.z.string().min(2, 'Package name is required'),
    travelDate: zod_1.z.string().optional(),
    guestsCount: zod_1.z.number().min(1, 'At least 1 guest required').optional().default(1),
    message: zod_1.z.string().optional()
});
// GET /api/bookings - Get all submitted booking enquiries
router.get('/', (_req, res) => {
    res.json({
        status: 'success',
        count: BOOKINGS_STORAGE.length,
        data: BOOKINGS_STORAGE
    });
});
// POST /api/bookings - Submit tour booking enquiry
router.post('/', (0, validate_1.validateRequest)(exports.createBookingSchema), (req, res) => {
    const { customerName, phone, email, packageId, packageName, travelDate, guestsCount, message } = req.body;
    const newBooking = {
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
    (0, mailer_1.sendBookingNotificationEmail)(newBooking).catch(err => {
        console.error('Email dispatch error:', err);
    });
    res.status(201).json({
        status: 'success',
        message: 'Booking enquiry submitted successfully to Jyoti Travels!',
        data: newBooking
    });
});
exports.default = router;
