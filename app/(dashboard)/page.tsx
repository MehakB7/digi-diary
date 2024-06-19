"use client";
import React, { useEffect, useState } from "react";
import NoRecord from "@/components/noRecord/noRecord";
import { useSession } from "next-auth/react";
import { PlusCircleIcon } from "lucide-react";
import Diary from "@/components/diary/diary";

const Page = () => {
  const session = useSession();
  console.log("session", session);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/diary");
      const data = await response.json();
      setData(data.data);
    };
    getData();
  }, []);

  const onClick = () => {};

  return (
    <div className="flex justify-center items-center  h-screen flex-col">
      {!data.length ? (
        <NoRecord />
      ) : (
        <div className="flex flex-col gap-10 max-h-[900px] overflow-y-auto">
          {data.map((item) => (
            <Diary key={item?.id} {...item} />
          ))}
        </div>
      )}
      {session?.data?.user && (
        <PlusCircleIcon className="w-12 h-12 absolute bottom-10 left-5" />
      )}
    </div>
  );
};

export default Page;
