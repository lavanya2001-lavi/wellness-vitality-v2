import { NextResponse } from 'next/server';
import { sendDetailedBookingAdminMail, sendDetailedBookingUserMail } from '@/app/services/emailService';

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

    const isTeleconsultation = appointmentType?.id === 'teleconsultation';

    // 1. Send Admin Email
    const adminResponse = await sendDetailedBookingAdminMail({
      userDetails,
      appointmentType,
      selectedPackages,
      selectedDate,
      selectedTime,
      total,
      isTeleconsultation
    });

    if (adminResponse.error) {
      console.error('Resend Admin Booking Error:', adminResponse.error);
      throw new Error('Failed to send admin notification');
    }

    // 2. Send User Email
    if (userDetails.email) {
      const userResponse = await sendDetailedBookingUserMail({
        userDetails,
        appointmentType,
        selectedPackages,
        selectedDate,
        selectedTime,
        total,
        isTeleconsultation
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
