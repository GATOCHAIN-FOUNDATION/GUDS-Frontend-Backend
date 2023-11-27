
import { NextResponse } from "next/server";
var nodemailer = require("nodemailer");

export async function POST(req: any) {
  try {
    const { link, email } = await req.json();
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS:true,
      auth: {
        user: "ssameershah1200@gmail.com",
        pass: "zbpvfayocrhaolth",
      },
    });
    const info = await transporter.sendMail({
      from: 'ssameershah1200@gmail.com', // sender address
      to: email, // list of receivers
      subject: "Email Verficiation", // Subject line
      text: "", // plain text body
      html: `<b>Your verfication email link is ${link}</b>`, // html body
    });

    if(info)
    {
      return true;
    }
    else
    {
        console.log('error')
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
