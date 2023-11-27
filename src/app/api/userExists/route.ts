import { connectMongoDB } from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import User from "../../../../models/user";
export async function POST(req: any) {
  try {
    await connectMongoDB();
    console.log("Database Connected in User Exists");
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id , email , active ");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log("Error in userExists", error);
  }
}
