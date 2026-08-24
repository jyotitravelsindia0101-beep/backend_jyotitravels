"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initKeepAliveCron = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const initKeepAliveCron = () => {
    // Schedule cron job to run every 14th minute: */14 * * * *
    const task = node_cron_1.default.schedule('*/14 * * * *', () => {
        const timeString = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        console.log(`⏰ [CRON 14-MIN HEARTBEAT]: wake up server - ${timeString}`);
    });
    console.log('⏰ Server keep-alive cron job initialized (Scheduled for every 14 minutes).');
    return task;
};
exports.initKeepAliveCron = initKeepAliveCron;
