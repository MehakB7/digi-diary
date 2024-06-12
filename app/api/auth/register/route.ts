import { connectDB } from "@/lib/dbconfig";
import User from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
connectDB();
export async function  POST(request: NextRequest) {
    try{
        const body = await request.json();
        const {name, email, password} = body;
        const user = await User.findOne({email});
        console.log("user", user)
        let salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        if(user){
            return NextResponse.json({message: "User already exists"}, {status: 400});
        }
        const savedUser = await new User({
            name,
            email,
            password: hashedPassword
        }).save();
        
        console.log("saved user", savedUser);
        return NextResponse.json({message: "User created", user: savedUser}, {status: 201});


    }catch(e){

        return NextResponse.json({message: `Error is ${e}`}, {status: 500});

    }
    
}