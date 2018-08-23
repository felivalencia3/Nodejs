var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'felval@cgb.edu.co',
    pass: 'castro03'
  }
});

var mailOptions = {
  from: 'lorcas@cgb.edu.co',
  to: 'felipe.valencia.2003@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});