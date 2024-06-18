"use client";
import React from "react";
import NoRecord from "@/components/noRecord/noRecord";
import { useSession } from "next-auth/react";
import { PlusCircleIcon } from "lucide-react";

const Page = () => {
  const session = useSession();
  console.log("session", session);

  return (
    <div className="flex justify-center items-center  h-screen flex-col">
      <NoRecord />
      {session?.data?.user && (
        <PlusCircleIcon className="w-12 h-12 absolute bottom-10 left-5" />
      )}
    </div>
  );
};

export default Page;
