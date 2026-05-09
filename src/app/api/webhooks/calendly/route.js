import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { sendCustomerBookingMail, sendAdminBookingMail } from '@/app/services/emailService';

export async function POST(req) {
    try {
        const signatureHeader = req.headers.get('calendly-webhook-signature');
        const rawBody = await req.text();

        // 1. Verify signature (only if secret is configured)
        const secret = process.env.CALENDLY_WEBHOOK_SIGNING_KEY;
        if (secret && signatureHeader) {
            try {
                const parts = signatureHeader.split(',');
                const timestampPart = parts.find(p => p.startsWith('t='));
                const signaturePart = parts.find(p => p.startsWith('v1='));
                
                if (timestampPart && signaturePart) {
                    const timestamp = timestampPart.split('=')[1];
                    const signature = signaturePart.split('=')[1];

                    const signedPayload = `${timestamp}.${rawBody}`;
                    const expectedSignature = crypto
                        .createHmac('sha256', secret)
                        .update(signedPayload)
                        .digest('hex');

                    const isValid = crypto.timingSafeEqual(
                        Buffer.from(signature, 'hex'),
                        Buffer.from(expectedSignature, 'hex')
                    );

                    if (!isValid) {
                        console.error('Invalid Calendly signature');
                        return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
                    }
                }
            } catch (sigError) {
                console.error('Error verifying signature:', sigError);
                return NextResponse.json({ error: 'Signature verification failed' }, { status: 401 });
            }
        }

        const data = JSON.parse(rawBody);
        const { event, payload } = data;

        console.log(`Received Calendly event: ${event}`);

        if (event === 'invitee.created') {
            const { name: customerName, email: customerEmail, event: eventUri } = payload;

            // Fetch event details to get start_time
            if (!process.env.CALENDLY_API_TOKEN) {
                throw new Error('CALENDLY_API_TOKEN is not configured');
            }

            const eventResponse = await fetch(eventUri, {
                headers: {
                    'Authorization': `Bearer ${process.env.CALENDLY_API_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!eventResponse.ok) {
                const errorData = await eventResponse.text();
                throw new Error(`Failed to fetch event details: ${eventResponse.statusText} - ${errorData}`);
            }

            const eventData = await eventResponse.json();
            const startTime = new Date(eventData.resource.start_time);

            // Format date and time for Australia/Sydney (or default to AU format)
            const bookingDate = startTime.toLocaleDateString('en-AU', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'Australia/Sydney'
            });
            const bookingTime = startTime.toLocaleTimeString('en-AU', {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Australia/Sydney'
            });

            console.log(`Processing booking for ${customerName} on ${bookingDate} at ${bookingTime}`);

            // Send emails
            await Promise.all([
                sendCustomerBookingMail({ customerName, customerEmail, bookingDate, bookingTime }),
                sendAdminBookingMail({ customerName, customerEmail, bookingDate, bookingTime })
            ]);
            
            console.log('Booking confirmation emails sent successfully');
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Calendly Webhook Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
