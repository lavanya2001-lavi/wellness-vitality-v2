const { Resend } = require('resend');

const apiKey = process.argv[2];
const fromEmail = process.argv[3];
const toEmail = process.argv[4];

const resend = new Resend(apiKey);

async function testResend() {
  console.log('Testing Resend...');
  console.log('From Email:', fromEmail);
  console.log('To Email:', toEmail);

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
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
