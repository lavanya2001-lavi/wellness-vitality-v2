const { Resend } = require('resend');
require('dotenv').config({ path: '.env.local' });

const resend = new Resend(process.env.RESEND_API_KEY);

async function testResend() {
  console.log('Testing Resend with API Key:', process.env.RESEND_API_KEY ? 'Present' : 'Missing');
  console.log('From Email:', process.env.FROM_EMAIL);
  console.log('Admin Email:', process.env.ADMIN_EMAIL);

  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.ADMIN_EMAIL || 'lavanya@italliancetech.com',
      subject: 'Resend Test - Wellness Vitality',
      html: '<strong>Resend is working!</strong>'
    });

    if (data.error) {
      console.error('Resend Error:', data.error);
    } else {
      console.log('Resend Success:', data);
    }
  } catch (error) {
    console.error('Exception:', error);
  }
}

testResend();
