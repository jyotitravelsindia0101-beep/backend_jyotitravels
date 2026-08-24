"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const tours_1 = __importDefault(require("./routes/tours"));
const reviews_1 = __importDefault(require("./routes/reviews"));
const bookings_1 = __importDefault(require("./routes/bookings"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// API Health Check Endpoint
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'success',
        message: 'Jyoti Travels REST API Backend is running smoothly',
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString()
    });
});
// API Routes
app.use('/api/tours', tours_1.default);
app.use('/api/reviews', reviews_1.default);
app.use('/api/bookings', bookings_1.default);
// 404 Route Handler
app.use((_req, res) => {
    res.status(404).json({
        status: 'fail',
        message: 'Requested API endpoint not found'
    });
});
// Global Error Handler
app.use((err, _req, res, _next) => {
    console.error('Unhandled Server Error:', err);
    res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    });
});
exports.default = app;
