"use client";
import { usePathname } from "next/navigation";
import { Note } from "../data/note";
import TaskGridComponent from "./task_grid";
import { useEffect, useState } from "react";
import { getNotes } from "../service/storage_api";

export default function ListView() {
  let [notes, setNotes] = useState<Array<Note>>([]);
  const pathname = usePathname();

  useEffect(() => {
    async function getData() {
      setNotes(await getNotes(pathname));
    }
    getData();
  }, [pathname]);

  return (
    <div className="grid grid-cols-3 gap-4 rounded-lg text-white">
      {notes.map((note, i) => (
        <div key={i} className="justify-stretch">
          <TaskGridComponent note={note} />
        </div>
      ))}
    </div>
  );
}
