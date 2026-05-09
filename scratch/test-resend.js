const { Resend } = require('resend');

// Replace with your API key for testing
const RESEND_API_KEY = 're_WpCNH5PX_GwMZGTNfarJHysKy6Ag6msqk'; 

const resend = new Resend(RESEND_API_KEY);

async function testResend() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Wellness Vitality <onboarding@resend.dev>',
      to: 'delivered@resend.dev', // Resend test email
      subject: 'Test Email',
      html: '<p>Hello from <strong>Resend</strong>!</p>',
    });

    if (error) {
      return console.error({ error });
    }

    console.log({ data });
  } catch (err) {
    console.error('Unexpected Error:', err);
  }
}

testResend();
