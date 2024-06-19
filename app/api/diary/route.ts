import { NextApiRequest } from "next";
import { Dummy } from "./dummyData";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest) => {
    return NextResponse.json({data: Dummy, message:"success"});
}