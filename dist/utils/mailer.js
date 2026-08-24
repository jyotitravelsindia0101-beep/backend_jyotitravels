"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBookingNotificationEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendBookingNotificationEmail = async (booking) => {
    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const port = Number(process.env.SMTP_PORT) || 587;
    if (!host || !user || !pass) {
        console.log('ℹ️ SMTP credentials not configured in .env. Skipping instant email dispatch.');
        return false;
    }
    try {
        const transporter = nodemailer_1.default.createTransport({
            host,
            port,
            secure: port === 465,
            auth: { user, pass }
        });
        const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #2d5a27; margin-top: 0;">New Tour Booking Enquiry - Jyoti Travels</h2>
        <p>You received a new tour package enquiry from your website:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Customer Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.customerName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone Number:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>${booking.phone}</strong></td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email Address:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Package Requested:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee; color: #2d5a27; font-weight: bold;">${booking.packageName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Travel Date:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.travelDate || 'Flexible / Not Specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Number of Guests:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.guestsCount || 1} Person(s)</td>
          </tr>
          ${booking.message ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Special Message:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.message}</td>
          </tr>
          ` : ''}
        </table>

        <div style="margin-top: 20px; padding: 12px; background: #f8fafc; border-radius: 8px; font-size: 13px; color: #64748b;">
          Submitted via Jyoti Travels Official Website REST API
        </div>
      </div>
    `;
        await transporter.sendMail({
            from: `"Jyoti Travels Website" <${user}>`,
            to: process.env.NOTIFICATION_EMAIL || 'jyotitravels.info@gmail.com',
            subject: `🚨 New Tour Booking: ${booking.customerName} - ${booking.packageName}`,
            html: htmlContent
        });
        console.log(`✉️ Booking email notification dispatched to ${process.env.NOTIFICATION_EMAIL || 'jyotitravels.info@gmail.com'}`);
        return true;
    }
    catch (err) {
        console.error('⚠️ Failed to dispatch SMTP email notification:', err.message);
        return false;
    }
};
exports.sendBookingNotificationEmail = sendBookingNotificationEmail;
