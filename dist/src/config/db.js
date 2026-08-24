"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
        console.warn('⚠️ MONGO_URI is missing in .env file, running with local in-memory dataset.');
        return;
    }
    try {
        const conn = await mongoose_1.default.connect(mongoUri, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log(`🍃 MongoDB Connected Successfully: ${conn.connection.host}`);
    }
    catch (error) {
        console.warn(`⚠️ MongoDB Connection Error: ${error.message}. Operating with fallback dataset.`);
    }
};
exports.connectDB = connectDB;
