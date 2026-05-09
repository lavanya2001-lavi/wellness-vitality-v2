import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API Key
const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Formatting selections
    const packagesHtml = selectedPackages.length > 0 
      ? selectedPackages.map(pkg => `<li><b>${pkg.name}</b> - $${pkg.price}</li>`).join('') 
      : '<li>No specific packages selected</li>';
      
    const isTeleconsultation = appointmentType?.id === 'teleconsultation';
    const addressStr = isTeleconsultation 
      ? 'Teleconsultation (Online Link to be Sent)' 
      : (userDetails.address || 'Mobile Visit - Address to be confirmed');

    const fromEmail = 'Wellness Vitality <onboarding@resend.dev>'; // Update with verified domain

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

    // Send Admin Email
    const adminResponse = await resend.emails.send({
      from: fromEmail,
      to: 'lavanya@italliancetech.com',
      subject: `New Booking - ${userDetails.name}`,
      html: adminHtml,
    });

    if (adminResponse.error) {
      console.error('Resend Admin Booking Error:', adminResponse.error);
      throw new Error('Failed to send admin notification');
    }

    // Send User Email
    if (userDetails.email) {
      const userResponse = await resend.emails.send({
        from: fromEmail,
        to: userDetails.email,
        subject: `Your Wellness Vitality Booking Itinerary`,
        html: userHtml,
      });

      if (userResponse.error) {
        console.warn('Resend User Booking Error (Non-critical):', userResponse.error);
      }
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
