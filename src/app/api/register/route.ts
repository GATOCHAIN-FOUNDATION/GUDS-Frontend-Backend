import { connectMongoDB } from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "../../../../models/user";
import { randomUUID } from "crypto";
export async function POST(req: any) {
  try {
    console.log("In post Func");

    const {
      email,
      password,
      _firstName,
      confirmPassword,
      _lastName,
      _country,
      _telegramNick,
      _linkedinLink,
      _birthday,
    } = await req.json();
    console.log(_firstName);
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    console.log("Mongo DB connected");
    const newUser = new User({
      email,
      password: hashedPassword,
      _firstName: "  ",
      confirmPassword,
      _lastName: "  ",
      _country: "  ",
      _telegramNick: "  ",
      _linkedinLink: "  ",
      _birthday: "  ",
    });
    const new_user = await newUser.save();
    return NextResponse.json(
      { message: "User registered.", new_user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
