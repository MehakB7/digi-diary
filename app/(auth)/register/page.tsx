import Signup from "@/components/signup/signup";
import Link from "next/link";
import React from "react";

export const Metadata ={
  title: "Register",
  description: "Register for an account",
}

function Page() {
  return (
    <div className="grid place-items-center h-screen">
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] p-4 border">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
         Already have and account? <Link href="/login" className="text-primary">Login</Link>
        </p>
      </div>
      <Signup />
    </div>
    </div>
  );
}

export default Page;
