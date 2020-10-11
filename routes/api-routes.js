// this will allow an endpoint to add new projects to the db

// contact form submission

const nodemailer = require('nodemailer');

// // imported to manager_controller
// function sendEmail(subj, email, output) {
//   // async..await is not allowed in global scope, must use a wrapper
//   async function mainEmail() {
//     // create reusable transporter object using the default SMTP transport
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'dev.breakaway@gmail.com', // gmail user - implement npm dotenv + .env file
//         pass: process.env.EMAIL_PASS, // gmail password - implement npm dotenv + .env file
//       },
//     });

//     // send mail with defined transport object
//     const info = await transporter.sendMail({
//       from: 'dev.breakaway@gmail.com', // sender address
//       to: email, // list of receivers
//       cc: 'dev.breakaway@gmail.com',
//       subject: subj, // Subject line
//       text: 'This is a breakaway test', // plain text body
//       html: output, // html body
//     });

//     // DO NOT REMOVE THE LINE BELOW
//     console.log('Email sent: %s', info.messageId);
//     // DO NOT REMOVE THE LINE ABOVE
//   }
//   mainEmail().catch(console.error);
// }
const transport = nodemailer.createTransport({
  host: 'smtp.joshzappone.tech',
  port: 25,
  auth: {
    user: 'contact@joshzappone.tech',
    pass: process.env.MAIL_PASS,
  },
});

module.exports = (app) => {
  // contact page route
  app.post('/sendmail', (req, res) => {
    const mailOptions = {
      from: 'contact@joshzappone.tech',
      to: 'zappone.josh@gmail.com',
      subject: 'Contact Submission from joshzappone.tech',
      text: `From: ${req.body.name} Message: ${req.body.message} Reply to: ${req.body.email}`,
      html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br />',
    };
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.json({ msg: 'Something went wrong. Please email contact@joshzappone.tech' });
        return console.log(error);
      }
      res.json({ msg: 'Message sent. You\'ll hear from me soon' });
      return console.log('Message sent: %s', info.messageId);
    });
  });
};
