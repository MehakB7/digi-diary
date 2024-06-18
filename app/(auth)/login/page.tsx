import SignIn from "@/components/signin/signin";
import Link from "next/link";
import { title } from "process";
import React from "react";

export const Metadata = {
  title: "Login",
  description: "Login to your account",
};

function Login() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] p-4 border">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
          <p className="text-sm text-muted-foreground">
            Do not have an account?{" "}
            <Link href="/register" className="text-primary">
              Create one
            </Link>
          </p>
        </div>
        <SignIn />
      </div>
    </div>
  );
}

export default Login;
