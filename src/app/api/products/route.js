import { connectToDb } from "@/lib/connect";
import { Product } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    connectToDb();
    // const user = await connectToDB();
    const products = await Product.find();
    console.log(products);
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
  }
};