// this will allow an endpoint to add new projects to the db
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// contact form submission

module.exports = (app) => {
  // contact page route
  app.post('/sendmail', (req, res) => {
    const msg = {
      to: 'zappone.josh@gmail.com', // Change to your recipient
      from: 'contact@joshzappone.tech', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: `
      <strong>New Form Inquery!</strong>
      <br>
      <p><strong>From:</strong> ${req.body.name}</p>
      <p><strong>Reply to:</strong> ${req.body.email}</p>
      <br>
      <p><strong>Message:</strong> ${req.body.message}</p>
      `,
    };
    sgMail
      .send(msg)
      .then(() => {
        res.json({ msg: 'Success! You\'ll here from me soon.' });
        console.log('Email sent');
      })
      .catch((error) => {
        res.status(400)
          .json({ msg: 'Oh no! Something went wrong. Please email contact@joshzappone.tech to get in touch' });
        console.error(error);
      });
  });
};
