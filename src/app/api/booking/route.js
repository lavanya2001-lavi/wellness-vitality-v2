import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { 
      selectedServices = [], 
      selectedPackages = [], 
      appointmentType = null, 
      userDetails = {}, 
      selectedDate = '', 
      selectedTime = '', 
      total = 0 
    } = data;

    // Build standard nodemailer transporter using Environment Variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Formatting selections
    const packagesHtml = selectedPackages.length > 0 
      ? selectedPackages.map(pkg => `<li><b>${pkg.name}</b> - $${pkg.price}</li>`).join('') 
      : '<li>No specific packages selected</li>';
      
    const isTeleconsultation = appointmentType?.id === 'teleconsultation';
    const addressStr = isTeleconsultation 
      ? 'Teleconsultation (Online Link to be Sent)' 
      : (userDetails.address || 'Mobile Visit - Address to be confirmed');

    // 1. Admin Email HTML
    const adminHtml = `
      <h2>New Booking Received!</h2>
      <p>A new client has completed the booking flow on your website.</p>
      <h3>Client Details</h3>
      <ul>
        <li><b>Name:</b> ${userDetails.name}</li>
        <li><b>Email:</b> ${userDetails.email}</li>
        <li><b>Phone:</b> ${userDetails.phone}</li>
        <li><b>Address/Location:</b> ${addressStr}</li>
      </ul>
      <h3>Appointment Request</h3>
      <ul>
        <li><b>Type:</b> ${appointmentType?.title || 'Not specified'}</li>
        ${!isTeleconsultation ? `<li><b>Preferred Date:</b> ${selectedDate}</li><li><b>Preferred Time:</b> ${selectedTime}</li>` : `<li><b>Note:</b> Client will book directly via Calendly link.</li>`}
      </ul>
      <h3>Selected Services:</h3>
      <ul>${packagesHtml}</ul>
      <p><b>Estimated Total Subtotal:</b> $${total}</p>
    `;

    // 2. User Email HTML
    const userHtml = `
      <h2>Thank you for booking with Wellness Vitality!</h2>
      <p>Hi ${userDetails.name},</p>
      <p>We've received your booking request and our clinical team will be in touch shortly to confirm your appointment details.</p>
      
      <h3>Your Requested Appointment</h3>
      <ul>
        <li><b>Type:</b> ${appointmentType?.title || 'Not specified'}</li>
        ${!isTeleconsultation ? `<li><b>Date:</b> ${selectedDate}</li><li><b>Time:</b> ${selectedTime}</li>` : `<li><b>Note:</b> As this is a teleconsultation, you will select your time via our dedicated calendar link.</li>`}
        <li><b>Location:</b> ${addressStr}</li>
      </ul>

      <h3>Your Services</h3>
      <ul>${packagesHtml}</ul>
      <p><b>Estimated Total:</b> $${total} (Subject to consultation & clinical variance)</p>

      <p>If you need to make any changes or have any questions, you can contact us securely at <a href="mailto:admin@wellnessvitality.com.au">admin@wellnessvitality.com.au</a>.</p>
      <p>Warm Regards,<br><b>The Wellness Vitality Clinical Team</b></p>
    `;

    // Try sending (If ENV variables are missing, this might fail, so we catch nicely)
    try {
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn('⚠️ SMTP variables missing. Simulated successful send for development.');
        console.log('--- ADMIN EMAIL SIMULATION ---', adminHtml);
        console.log('--- USER EMAIL SIMULATION ---', userHtml);
      } else {
        // Send Admin Email
        await transporter.sendMail({
          from: `"Wellness Vitality Booking" <${process.env.SMTP_USER}>`,
          to: 'lavanya@italliancetech.com',
          subject: `New Booking - ${userDetails.name}`,
          html: adminHtml,
        });

        // Send User Email
        if (userDetails.email) {
          await transporter.sendMail({
            from: `"Wellness Vitality Support" <${process.env.SMTP_USER}>`,
            to: userDetails.email,
            subject: `Your Wellness Vitality Booking Itinerary`,
            html: userHtml,
          });
        }
      }
    } catch (sendError) {
      console.error('Nodemailer Error:', sendError);
      return NextResponse.json({ success: false, error: 'Failed to dispatch email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
