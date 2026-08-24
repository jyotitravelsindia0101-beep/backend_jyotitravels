"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
const db_1 = require("./config/db");
const cron_1 = require("./utils/cron");
const PORT = Number(process.env.PORT) || 5000;
// Start server immediately so Render port binding succeeds instantly
app_1.default.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Jyoti Travels Backend Server listening on 0.0.0.0:${PORT}`);
    // Connect to MongoDB Atlas
    (0, db_1.connectDB)();
    // Start 14-minute keep-alive cron job
    (0, cron_1.initKeepAliveCron)();
});
