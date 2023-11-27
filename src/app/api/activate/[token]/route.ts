import { NextResponse, NextRequest } from "next/server";
import ActivateToken from "../../../../../models/activatetoken";
import User from "../../../../../models/user";
import { connectMongoDB } from "../../../../../lib/mongodb";
export async function GET(
  res: NextRequest,
  { params }: { params: { token: string } }
) {
  const { token } = params;
  console.log(token);
  const _id = "65497f72d54ee15ed299bc98";
  try {
    await connectMongoDB();
    const res = await ActivateToken.findOne({ token }).select(" userId  ");
    console.log(res?.userId);
    // Update the user and activateToken
    const user = await User.findById(res?.userId);
    if (user) {
      user.active = true;
      await user.save();
      console.log("User updated successfully.");
    } else {
      console.log("User not found.");
      // Handle if the user is not found
    }
    // res.redirect(
    //   "http://localhost:3000/activate/632f8b1d84194cd4bdbde8de271d3ba61bfe1f799ff340c99e960704b66d52bb"
    // );
    return NextResponse.redirect(
      "https://guds.vercel.app/authenticate/632f8b1d84194cd4bdbde8de271d3ba61bfe1f799ff340c99e960704b66d52bb"
    );
  } catch (error) {
    console.log("Token is not created", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
