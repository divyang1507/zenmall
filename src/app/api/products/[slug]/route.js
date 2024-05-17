import {connectToDb} from "@/lib/connect";
import { Product } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    // const user = await connectToDB();
    const product = await Product.findOne({slug});
    console.log(product);
    return NextResponse.json(product);
  } catch (error) {
    console.log(error);
  }
};
