// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer"
export const reply_email_post = async (req, res) => {
    console.log(req.body)
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "lalitkishorep.20cse@kongu.edu",
        pass: "9345718515",
      },
    });
    // Send the email using nodemailer
    const info = await transporter.sendMail({
    //   from: req.body.from,
      from:"lalitkishorep.20cse@kongu.edu",
      to: req.body.mail,
    //   phone: req.body.phone,
    phone:"945664332",
      text: "t5ken",
      html:`<h2> Booking status Alert </h2>  `
    });
    // Send a response to the client
    console.log("Email sent successfully");
    res.json({ message: "Email sent successfully", info });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
};

