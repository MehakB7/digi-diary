import React from "react";
import Tiptap from "../tiptap/tiptap";
import { DiaryProps } from "./type";

const Diary = ({ id, title, content, date }: DiaryProps) => {
  return (
    <div className="rounded-md border bg-zinc-950 py-4 dark:bg-zinc-900 max-h-[650px] flex flex-col w-[500px] h-[200px] p-4">
      <div className="flex gap-4">
        <div className="flex-none flex flex-col">
          <span>
            {new Date(date).toLocaleString("default", { month: "short" })}
          </span>
          <b>{new Date(date).getDate()}</b>
        </div>
        <div className="flex-1 text-center">{title}</div>
      </div>
    </div>
  );
};

export default Diary;
