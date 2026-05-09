import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    const { email } = data;

    if (!email) {
      return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
    }

    const fromEmail = 'Wellness Vitality <onboarding@resend.dev>'; // Update with verified domain

    // Admin Email HTML
    const adminHtml = `
      <h2>New Newsletter Subscription!</h2>
      <p>A new user has subscribed to the newsletter on your website.</p>
      <h3>Subscriber Details</h3>
      <ul>
        <li><b>Email:</b> ${email}</li>
      </ul>
      <p>Date: ${new Date().toLocaleString()}</p>
    `;

    // Send Admin Email
    const adminResponse = await resend.emails.send({
      from: fromEmail,
      to: 'lavanya@italliancetech.com',
      subject: `New Newsletter Subscriber - ${email}`,
      html: adminHtml,
    });

    if (adminResponse.error) {
      console.error('Resend Newsletter Error:', adminResponse.error);
      throw new Error('Failed to notify admin of subscription');
    }

    return NextResponse.json({ success: true, message: 'Successfully subscribed to the newsletter!' });

  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
