import {connectToDb} from "@/lib/connect";
import { User } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    connectToDb();
    // const user = await connectToDB();
    const user = await User.findOne({id});
    console.log(user);
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
  }
};
