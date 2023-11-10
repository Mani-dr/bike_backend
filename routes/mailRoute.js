// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer"
export const email_post = async (req, res) => {
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
      to: "lalithkishore1612@gmail.com",
    //   phone: req.body.phone,
    phone:"945664332",
      text: "t5ken",
      html:`<h2> Booking Alert </h2> <br> <h2>Name:</h2><p>${req.body.name}</p> <br><h5> Phone Number:</h5> <p>${req.body.no} </p> <br><h5><br> <h4> Model : </h4> <br> <p> ${req.body.model} </p> `
    });
    // Send a response to the client
    console.log("Email sent successfully");
    res.json({ message: "Email sent successfully", info });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
};

