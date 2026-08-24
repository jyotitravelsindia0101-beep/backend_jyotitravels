import request from 'supertest';
import app from '../src/app';

describe('Jyoti Travels Backend REST API Test Suite', () => {

  describe('GET /api/health', () => {
    it('should return 200 OK and health status message', async () => {
      const response = await request(app).get('/api/health');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe('success');
      expect(response.body.message).toContain('Jyoti Travels');
    });
  });

  describe('GET /api/tours', () => {
    it('should return 200 OK and all 9 tour packages', async () => {
      const response = await request(app).get('/api/tours');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe('success');
      expect(response.body.count).toBe(9);
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.data[0]).toHaveProperty('title');
      expect(response.body.data[0]).toHaveProperty('price');
    });

    it('should return 200 OK for a valid single tour package ID', async () => {
      const response = await request(app).get('/api/tours/1');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe('success');
      expect(response.body.data.id).toBe('1');
      expect(response.body.data.title).toContain('Grand All Himachal');
    });

    it('should return 404 Not Found for non-existent tour ID', async () => {
      const response = await request(app).get('/api/tours/999');
      expect(response.status).toBe(404);
      expect(response.body.status).toBe('fail');
    });
  });

  describe('GET & POST /api/reviews', () => {
    it('should return 200 OK and list of reviews', async () => {
      const response = await request(app).get('/api/reviews');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe('success');
      expect(Array.isArray(response.body.data)).toBe(true);
    });

    it('should create a new review with 201 Created when valid payload is sent', async () => {
      const newReviewPayload = {
        name: 'Test Traveler',
        location: 'Chandigarh',
        packageName: 'Paradise Kashmir Tour (5N/6D)',
        rating: 5,
        comment: 'Fantastic tour organized by Jyoti Travels!'
      };

      const response = await request(app)
        .post('/api/reviews')
        .send(newReviewPayload);

      expect(response.status).toBe(201);
      expect(response.body.status).toBe('success');
      expect(response.body.data.name).toBe('Test Traveler');
      expect(response.body.data.verified).toBe(true);
    });

    it('should return 400 Bad Request when validation fails (short comment / missing name)', async () => {
      const invalidPayload = {
        name: 'A', // Name too short (<2 chars)
        comment: 'Hi' // Comment too short (<5 chars)
      };

      const response = await request(app)
        .post('/api/reviews')
        .send(invalidPayload);

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('fail');
      expect(response.body.errors).toBeDefined();
    });
  });

  describe('POST /api/bookings', () => {
    it('should create a booking enquiry with 201 Created on valid payload', async () => {
      const bookingPayload = {
        customerName: 'Amit Kumar',
        phone: '9876543210',
        email: 'amit.kumar@example.com',
        packageName: 'Manali Volvo Scenic Getaway (3N/4D)',
        guestsCount: 2
      };

      const response = await request(app)
        .post('/api/bookings')
        .send(bookingPayload);

      expect(response.status).toBe(201);
      expect(response.body.status).toBe('success');
      expect(response.body.data.customerName).toBe('Amit Kumar');
    });

    it('should return 400 Bad Request for invalid email or phone', async () => {
      const invalidBooking = {
        customerName: 'Amit',
        phone: '123', // Invalid phone
        email: 'invalid-email-address',
        packageName: 'Manali'
      };

      const response = await request(app)
        .post('/api/bookings')
        .send(invalidBooking);

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('fail');
    });
  });

});
