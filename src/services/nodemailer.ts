require('dotenv').config();
// const nodemailer = require("nodemailer");
import * as nodemailer from 'nodemailer';
//step 1

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD_EMAIL,
  },
});
// step 2
let mailOptions = {
    from: "trashit_message@gmail.com",
    to: "kauawerle19@gmail.com",
    subject: "testing and testing",
    text: "Sexooooo"
};

//step 3


const transportEmail = transporter.sendMail(mailOptions, function (err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log("Email sent!");
	}
});

export default transportEmail;

