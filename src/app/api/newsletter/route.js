import { NextResponse } from 'next/server';
import { sendNewsletterAdminMail, sendNewsletterWelcomeMail } from '@/app/services/emailService';

export async function POST(request) {
  try {
    const data = await request.json();
    const { email } = data;

    if (!email) {
      return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
    }

    // 1. Notify Admin
    const adminResponse = await sendNewsletterAdminMail(email);

    if (adminResponse.error) {
      console.error('Resend Newsletter Admin Error:', adminResponse.error);
      throw new Error('Failed to notify admin of subscription');
    }

    // 2. Send Welcome Email to User
    const userResponse = await sendNewsletterWelcomeMail(email);

    if (userResponse.error) {
      console.warn('Resend Newsletter Welcome Error (Non-critical):', userResponse.error);
    }

    return NextResponse.json({ success: true, message: 'Successfully subscribed to the newsletter!' });

  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
