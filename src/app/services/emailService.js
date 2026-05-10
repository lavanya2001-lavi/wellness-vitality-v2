import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── CALENDLY WEBHOOK EMAILS ───

export const sendCustomerBookingMail = async ({
  customerName,
  customerEmail,
  bookingDate,
  bookingTime,
}) => {
  try {
    await resend.emails.send({
      from: `Wellness Vitality <${process.env.FROM_EMAIL}>`,
      to: customerEmail,
      subject: "Booking Confirmation - Wellness Vitality",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #3b3f69;">Booking Confirmed</h2>
          <p>Hello ${customerName},</p>
          <p>Your appointment has been confirmed. We look forward to seeing you!</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Date:</strong> ${bookingDate}</p>
            <p style="margin: 5px 0;"><strong>Time:</strong> ${bookingTime}</p>
          </div>
          
          <p>If you need to reschedule or have any questions, please contact us.</p>
          <p>Thank you,</p>
          <p><strong>Wellness Vitality Team</strong></p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Error sending customer booking email:", error);
  }
};

export const sendAdminBookingMail = async ({
  customerName,
  customerEmail,
  bookingDate,
  bookingTime,
}) => {
  try {
    await resend.emails.send({
      from: `Wellness Vitality <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Booking Received",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #ca1254;">New Booking Received</h2>
          <p>A new appointment has been scheduled via Calendly.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Customer Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${customerName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Customer Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${customerEmail}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Date:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${bookingDate}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Time:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${bookingTime}</td>
            </tr>
          </table>
          
          <p style="margin-top: 30px; font-size: 12px; color: #777;">
            This is an automated notification from your website's booking system.
          </p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Error sending admin booking email:", error);
  }
};

// ─── CUSTOM FLOW EMAILS (DETAILED) ───

export const sendDetailedBookingAdminMail = async ({
  userDetails,
  appointmentType,
  selectedPackages,
  selectedDate,
  selectedTime,
  total,
  isTeleconsultation
}) => {
  const packagesHtml = selectedPackages.length > 0 
    ? selectedPackages.map(pkg => `<li><b>${pkg.name}</b> - $${pkg.price}</li>`).join('') 
    : '<li>No specific packages selected</li>';
    
  const addressStr = isTeleconsultation 
    ? 'Teleconsultation (Online Link to be Sent)' 
    : (userDetails.address || 'Mobile Visit - Address to be confirmed');

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
      <h2 style="color: #3b3f69;">New Detailed Booking Request</h2>
      <p>A new client has completed the custom booking flow.</p>
      
      <h3 style="border-bottom: 1px solid #eee; padding-bottom: 10px; color: #ca1254;">Client Details</h3>
      <p><strong>Name:</strong> ${userDetails.name}</p>
      <p><strong>Email:</strong> ${userDetails.email}</p>
      <p><strong>Phone:</strong> ${userDetails.phone}</p>
      <p><strong>Address/Location:</strong> ${addressStr}</p>
      
      <h3 style="border-bottom: 1px solid #eee; padding-bottom: 10px; color: #ca1254; margin-top: 25px;">Appointment Request</h3>
      <p><strong>Type:</strong> ${appointmentType?.title || 'Not specified'}</p>
      ${!isTeleconsultation 
        ? `<p><strong>Preferred Date:</strong> ${selectedDate}</p><p><strong>Preferred Time:</strong> ${selectedTime}</p>` 
        : `<p><strong>Note:</strong> Client will book their specific time slot via Calendly.</p>`}
      
      <h3 style="border-bottom: 1px solid #eee; padding-bottom: 10px; color: #ca1254; margin-top: 25px;">Selected Services</h3>
      <ul style="padding-left: 20px;">${packagesHtml}</ul>
      <p style="font-size: 18px; font-weight: bold; margin-top: 20px; color: #3b3f69;">Total Subtotal: $${total}</p>
      
      <p style="margin-top: 30px; font-size: 12px; color: #777; border-top: 1px solid #eee; pt: 15px;">
        Sent from the Wellness Vitality Online Booking System
      </p>
    </div>
  `;

  return resend.emails.send({
    from: `Wellness Vitality <${process.env.FROM_EMAIL}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Booking Request - ${userDetails.name}`,
    html: html,
  });
};

// ─── CONTACT FORM EMAILS ───

export const sendContactFormAdminMail = async ({ name, email, phone, enquiry }) => {
  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
      <h2 style="color: #3b3f69;">New Contact Enquiry</h2>
      <p>You have received a new message from your website contact form.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
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
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Enquiry:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${enquiry}</td>
        </tr>
      </table>
      
      <p style="margin-top: 30px; font-size: 12px; color: #777;">
        Sent from the Wellness Vitality Contact Form
      </p>
    </div>
  `;

  return resend.emails.send({
    from: `Wellness Vitality <${process.env.FROM_EMAIL}>`,
    to: process.env.ADMIN_EMAIL,
    reply_to: email,
    subject: `New Contact Submission - ${name}`,
    html: html,
  });
};

export const sendContactFormUserMail = async ({ name, email, enquiry }) => {
  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
      <h2 style="color: #ca1254;">We've Received Your Message!</h2>
      <p>Hi ${name},</p>
      <p>Thank you for contacting Wellness Vitality. We've received your enquiry and our team will get back to you as soon as possible.</p>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <h4 style="margin: 0 0 10px 0; color: #3b3f69;">Your Message:</h4>
        <p style="margin: 0; font-style: italic; color: #555;">"${enquiry}"</p>
      </div>
      
      <p>If you have any urgent questions, feel free to call us directly.</p>
      <p>Warm Regards,<br><strong>Wellness Vitality Team</strong></p>
    </div>
  `;

  return resend.emails.send({
    from: `Wellness Vitality <${process.env.FROM_EMAIL}>`,
    to: email,
    subject: "Thank you for contacting Wellness Vitality",
    html: html,
  });
};

export const sendDetailedBookingUserMail = async ({
  userDetails,
  appointmentType,
  selectedPackages,
  selectedDate,
  selectedTime,
  total,
  isTeleconsultation
}) => {
  const packagesHtml = selectedPackages.length > 0 
    ? selectedPackages.map(pkg => `<li><b>${pkg.name}</b> - $${pkg.price}</li>`).join('') 
    : '<li>No specific packages selected</li>';
    
  const addressStr = isTeleconsultation 
    ? 'Teleconsultation (Online Link to be Sent)' 
    : (userDetails.address || 'Mobile Visit - Address to be confirmed');

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
      <h2 style="color: #ca1254;">Thank you for booking with Wellness Vitality!</h2>
      <p>Hi ${userDetails.name},</p>
      <p>We've received your booking request. Our clinical team will review the details and contact you shortly to confirm everything.</p>
      
      <h3 style="border-bottom: 1px solid #eee; padding-bottom: 10px; color: #3b3f69; margin-top: 25px;">Your Appointment Summary</h3>
      <p><strong>Type:</strong> ${appointmentType?.title || 'Not specified'}</p>
      ${!isTeleconsultation 
        ? `<p><strong>Requested Date:</strong> ${selectedDate}</p><p><strong>Requested Time:</strong> ${selectedTime}</p>` 
        : `<p><strong>Note:</strong> As this is a teleconsultation, you will select your final time via our dedicated calendar link.</p>`}
      <p><strong>Service Location:</strong> ${addressStr}</p>
      
      <h3 style="border-bottom: 1px solid #eee; padding-bottom: 10px; color: #3b3f69; margin-top: 25px;">Your Selected Services</h3>
      <ul style="padding-left: 20px;">${packagesHtml}</ul>
      <p style="font-size: 16px; font-weight: bold; margin-top: 15px; color: #ca1254;">Estimated Total: $${total}</p>
      
      <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
        <p style="margin: 0; font-size: 14px; color: #555;">
          Questions? Contact us at <a href="mailto:admin@wellnessvitality.com.au" style="color: #ca1254;">admin@wellnessvitality.com.au</a> or call us directly.
        </p>
      </div>
      
      <p style="margin-top: 30px; font-weight: bold; color: #3b3f69;">
        Warm Regards,<br>The Wellness Vitality Clinical Team
      </p>
    </div>
  `;

  return resend.emails.send({
    from: `Wellness Vitality <${process.env.FROM_EMAIL}>`,
    to: userDetails.email,
    subject: `Your Wellness Vitality Booking Itinerary`,
    html: html,
  });
};

// ─── NEWSLETTER EMAILS ───

export const sendNewsletterAdminMail = async (email) => {
  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
      <h2 style="color: #3b3f69;">New Newsletter Subscription</h2>
      <p>A new user has subscribed to your newsletter.</p>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0;"><strong>Subscriber Email:</strong> ${email}</p>
        <p style="margin: 5px 0 0 0; font-size: 12px; color: #777;">Timestamp: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}</p>
      </div>
      
      <p style="margin-top: 30px; font-size: 12px; color: #777; border-top: 1px solid #eee; padding-top: 15px;">
        Sent from the Wellness Vitality Newsletter System
      </p>
    </div>
  `;

  return resend.emails.send({
    from: `Wellness Vitality <${process.env.FROM_EMAIL}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Newsletter Subscriber: ${email}`,
    html: html,
  });
};

export const sendNewsletterWelcomeMail = async (email) => {
  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h2 style="color: #ca1254; margin-bottom: 10px;">Welcome to Wellness Vitality!</h2>
        <p style="color: #3b3f69; font-size: 16px;">Thank you for joining our community.</p>
      </div>
      
      <p>Hi there,</p>
      <p>We're thrilled to have you on our newsletter list. You'll now be the first to receive:</p>
      
      <ul style="color: #555; line-height: 1.6;">
        <li>Exclusive health & wellness tips</li>
        <li>Special offers on our clinical services</li>
        <li>Updates on new treatments and mobile locations</li>
      </ul>
      
      <p style="margin-top: 25px;">Stay tuned for our upcoming updates!</p>
      
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
        <p style="margin: 0; font-weight: bold; color: #3b3f69;">Wellness Vitality Australia</p>
        <p style="margin: 5px 0 0 0; font-size: 12px; color: #777;">
          Elite Clinical Services | Mobile Care | Professional Excellence
        </p>
      </div>
    </div>
  `;

  return resend.emails.send({
    from: `Wellness Vitality <${process.env.FROM_EMAIL}>`,
    to: email,
    subject: "Welcome to the Wellness Vitality Newsletter",
    html: html,
  });
};