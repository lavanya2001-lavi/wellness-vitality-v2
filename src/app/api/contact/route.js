import { NextResponse } from 'next/server';
import { sendContactFormAdminMail, sendContactFormUserMail } from '@/app/services/emailService';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, enquiry } = data;

    // Validation
    if (!name || !email || !phone || !enquiry) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 });
    }

    // 1. Send Email to Admin
    const adminResponse = await sendContactFormAdminMail({ name, email, phone, enquiry });

    if (adminResponse.error) {
      console.error('Resend Admin Email Error:', adminResponse.error);
      throw new Error('Failed to send admin notification');
    }

    // 2. Send Confirmation Email to User
    const userResponse = await sendContactFormUserMail({ name, email, enquiry });

    if (userResponse.error) {
      console.warn('Resend User Email Error (Non-critical):', userResponse.error);
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });

  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ success: false, error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
