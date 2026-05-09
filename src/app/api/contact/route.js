import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, enquiry } = data;

    // Validation
    if (!name || !email || !phone || !enquiry) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 });
    }

    const adminEmail = 'admin@wellnessvitalityaustralia.com.au';

    // 1. Send Email to Admin
    const adminResponse = await resend.emails.send({
      from: 'Wellness Vitality <onboarding@resend.dev>', // Update this with your verified domain
      to: adminEmail,
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #3b3f69;">New Contact Enquiry</h2>
          <p>You have received a new message from your website contact form.</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px;"><strong>Enquiry:</strong></td>
              <td style="padding: 10px;">${enquiry}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777;">
            <p>This email was sent from the contact form on wellnessvitalityaustralia.com.au</p>
          </div>
        </div>
      `,
    });

    if (adminResponse.error) {
      console.error('Resend Admin Email Error:', adminResponse.error);
      throw new Error('Failed to send admin notification');
    }

    // 2. Send Confirmation Email to User
    const userResponse = await resend.emails.send({
      from: 'Wellness Vitality <onboarding@resend.dev>', // Update this with your verified domain
      to: email,
      subject: 'We have received your enquiry - Wellness Vitality',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #ca1254;">Thank you for contacting us, ${name}!</h2>
          <p>We have received your enquiry and our team will get back to you as soon as possible.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <h3 style="font-size: 14px; margin-top: 0;">Your Enquiry:</h3>
            <p style="font-style: italic; color: #555;">"${enquiry}"</p>
          </div>
          
          <p style="margin-top: 30px;">If you have any urgent questions, feel free to call us directly.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777;">
            <p>© ${new Date().getFullYear()} Wellness Vitality Australia. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    if (userResponse.error) {
      console.warn('Resend User Email Error (Non-critical):', userResponse.error);
      // We don't throw here to ensure the success response is still sent if admin got the email
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });

  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ success: false, error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
