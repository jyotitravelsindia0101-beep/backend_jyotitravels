"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
(0, globals_1.describe)('Jyoti Travels Backend REST API Test Suite', () => {
    (0, globals_1.describe)('GET /api/health', () => {
        (0, globals_1.it)('should return 200 OK and health status message', async () => {
            const response = await (0, supertest_1.default)(app_1.default).get('/api/health');
            (0, globals_1.expect)(response.status).toBe(200);
            (0, globals_1.expect)(response.body.status).toBe('success');
            (0, globals_1.expect)(response.body.message).toContain('Jyoti Travels');
        });
    });
    (0, globals_1.describe)('GET /api/tours', () => {
        (0, globals_1.it)('should return 200 OK and all 9 tour packages', async () => {
            const response = await (0, supertest_1.default)(app_1.default).get('/api/tours');
            (0, globals_1.expect)(response.status).toBe(200);
            (0, globals_1.expect)(response.body.status).toBe('success');
            (0, globals_1.expect)(response.body.count).toBe(9);
            (0, globals_1.expect)(Array.isArray(response.body.data)).toBe(true);
            (0, globals_1.expect)(response.body.data[0]).toHaveProperty('title');
            (0, globals_1.expect)(response.body.data[0]).toHaveProperty('price');
        });
        (0, globals_1.it)('should return 200 OK for a valid single tour package ID', async () => {
            const response = await (0, supertest_1.default)(app_1.default).get('/api/tours/1');
            (0, globals_1.expect)(response.status).toBe(200);
            (0, globals_1.expect)(response.body.status).toBe('success');
            (0, globals_1.expect)(response.body.data.id).toBe('1');
            (0, globals_1.expect)(response.body.data.title).toContain('Grand All Himachal');
        });
        (0, globals_1.it)('should return 404 Not Found for non-existent tour ID', async () => {
            const response = await (0, supertest_1.default)(app_1.default).get('/api/tours/999');
            (0, globals_1.expect)(response.status).toBe(404);
            (0, globals_1.expect)(response.body.status).toBe('fail');
        });
    });
    (0, globals_1.describe)('GET & POST /api/reviews', () => {
        (0, globals_1.it)('should return 200 OK and list of reviews', async () => {
            const response = await (0, supertest_1.default)(app_1.default).get('/api/reviews');
            (0, globals_1.expect)(response.status).toBe(200);
            (0, globals_1.expect)(response.body.status).toBe('success');
            (0, globals_1.expect)(Array.isArray(response.body.data)).toBe(true);
        });
        (0, globals_1.it)('should create a new review with 201 Created when valid payload is sent', async () => {
            const newReviewPayload = {
                name: 'Test Traveler',
                location: 'Chandigarh',
                packageName: 'Paradise Kashmir Tour (5N/6D)',
                rating: 5,
                comment: 'Fantastic tour organized by Jyoti Travels!'
            };
            const response = await (0, supertest_1.default)(app_1.default)
                .post('/api/reviews')
                .send(newReviewPayload);
            (0, globals_1.expect)(response.status).toBe(201);
            (0, globals_1.expect)(response.body.status).toBe('success');
            (0, globals_1.expect)(response.body.data.name).toBe('Test Traveler');
            (0, globals_1.expect)(response.body.data.verified).toBe(true);
        });
        (0, globals_1.it)('should return 400 Bad Request when validation fails (short comment / missing name)', async () => {
            const invalidPayload = {
                name: 'A', // Name too short (<2 chars)
                comment: 'Hi' // Comment too short (<5 chars)
            };
            const response = await (0, supertest_1.default)(app_1.default)
                .post('/api/reviews')
                .send(invalidPayload);
            (0, globals_1.expect)(response.status).toBe(400);
            (0, globals_1.expect)(response.body.status).toBe('fail');
            (0, globals_1.expect)(response.body.errors).toBeDefined();
        });
    });
    (0, globals_1.describe)('POST /api/bookings', () => {
        (0, globals_1.it)('should create a booking enquiry with 201 Created on valid payload', async () => {
            const bookingPayload = {
                customerName: 'Amit Kumar',
                phone: '9876543210',
                email: 'amit.kumar@example.com',
                packageName: 'Manali Volvo Scenic Getaway (3N/4D)',
                guestsCount: 2
            };
            const response = await (0, supertest_1.default)(app_1.default)
                .post('/api/bookings')
                .send(bookingPayload);
            (0, globals_1.expect)(response.status).toBe(201);
            (0, globals_1.expect)(response.body.status).toBe('success');
            (0, globals_1.expect)(response.body.data.customerName).toBe('Amit Kumar');
        });
        (0, globals_1.it)('should return 400 Bad Request for invalid email or phone', async () => {
            const invalidBooking = {
                customerName: 'Amit',
                phone: '123', // Invalid phone
                email: 'invalid-email-address',
                packageName: 'Manali'
            };
            const response = await (0, supertest_1.default)(app_1.default)
                .post('/api/bookings')
                .send(invalidBooking);
            (0, globals_1.expect)(response.status).toBe(400);
            (0, globals_1.expect)(response.body.status).toBe('fail');
        });
    });
    (0, globals_1.describe)('Server Keep-Alive Cron Task', () => {
        (0, globals_1.it)('should initialize keep-alive cron job without error', () => {
            const { initKeepAliveCron } = require('../src/utils/cron');
            const task = initKeepAliveCron();
            (0, globals_1.expect)(task).toBeDefined();
            if (task && task.stop) {
                task.stop();
            }
        });
    });
});
