import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendCustomerBookingMail = async ({
  customerName,
  customerEmail,
  bookingDate,
  bookingTime,
}) => {
  try {
    await resend.emails.send({
      from: `Wellness Vitality <${process.env.FROM_EMAIL}>`,
      to: customerEmail,
      subject: "Booking Confirmation - Wellness Vitality",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #3b3f69;">Booking Confirmed</h2>
          <p>Hello ${customerName},</p>
          <p>Your appointment has been confirmed. We look forward to seeing you!</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Date:</strong> ${bookingDate}</p>
            <p style="margin: 5px 0;"><strong>Time:</strong> ${bookingTime}</p>
          </div>
          
          <p>If you need to reschedule or have any questions, please contact us.</p>
          <p>Thank you,</p>
          <p><strong>Wellness Vitality Team</strong></p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Error sending customer booking email:", error);
  }
};

export const sendAdminBookingMail = async ({
  customerName,
  customerEmail,
  bookingDate,
  bookingTime,
}) => {
  try {
    await resend.emails.send({
      from: `Wellness Vitality <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Booking Received",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #ca1254;">New Booking Received</h2>
          <p>A new appointment has been scheduled via Calendly.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Customer Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${customerName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Customer Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${customerEmail}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Date:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${bookingDate}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Time:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${bookingTime}</td>
            </tr>
          </table>
          
          <p style="margin-top: 30px; font-size: 12px; color: #777;">
            This is an automated notification from your website's booking system.
          </p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Error sending admin booking email:", error);
  }
};