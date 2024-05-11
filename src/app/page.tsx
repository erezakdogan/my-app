"use client";
import TodoComponent from "./components/todo_component";
import "next/navigation";
import { usePathname } from "next/navigation";
import { Note } from "./data/note";
import { getAll } from "./service/storage_api";

export default function Home() {
  const segment = usePathname();
  return (
    <main className="flex-grow min-h-full bg-purple-200 items-start p-8">
      <ListView />
    </main>
  );
}

async function ListView() {
  const noteArray: Array<Note> = await getNotes(usePathname());
  return (
    <div className="grid grid-cols-3 gap-4 rounded-lg text-white">
      {noteArray.map((_, i) => (
        <div key={i} className="justify-stretch"> 
          <TodoComponent note={_} />
        </div>
      ))}
    </div>
  );
}

async function getNotes(page: string): Promise<Array<Note>> {
  let noteArray: Array<Note> = [];
  switch (true) {
    case page.endsWith("/"):
      noteArray = await getAll();
      break;
    default:
      break;
  }
  return noteArray;
}
