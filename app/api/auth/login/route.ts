import User from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const POST = async (Request: NextRequest) => {
  try {
    const body = await Request.json();

    const { email, password } = body;

    // hash krna h password1
    // check user exist krna h
    const user = await User.findOne({ email });
    if (!user) {
      NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      NextResponse.json({ message: "Invalid password" }, { status: 401 });
    }

    const payload = {
        id: user._id,
        email: user.email,
    };

    const token =await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    const response =  NextResponse.json({ message: "User logged in", token }, { status: 200 });
    response.cookies.set("token", token, {httpOnly: true});


  } catch (e) {
    return NextResponse.json({ message: `Error is ${e}` }, { status: 500 });
  }
};


