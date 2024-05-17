import { connectToDb } from "@/lib/connect";
import { User } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    connectToDb();
    // const user = await connectToDB();
    const users = await User.find();
    console.log(users);
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
  }
};
