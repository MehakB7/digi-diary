"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

function Header() {
  const session = useSession();
  return (
    <div className="flex flex-row-reverse w-full p-4 absolute ">
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}

export default Header;
