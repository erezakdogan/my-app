"use client";
import TodoComponent from "../components/todo_component";
import { usePathname } from "next/navigation";
import { Note } from "../data/note";
import { getAll } from "../service/storage_api";

export default function Content() {
  const page = usePathname().replace("/", "");
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
        <div key={i}>
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
    case page.endsWith("active"):
      noteArray = await getAll();
      noteArray = noteArray.filter((note, i) => note.is_completed == false);
      break;
    case page.endsWith("done"):
      noteArray = await getAll();
      noteArray = noteArray.filter((note, i) => note.is_completed == true);
      break;
    case page.endsWith("urgent"):
      noteArray = await getAll();
      noteArray = noteArray.filter((note, i) => note.tags.includes("urgent"));
      break;
    case page.endsWith("personal"):
      noteArray = await getAll();
      noteArray = noteArray.filter((note, i) => note.tags.includes("personal"));
      break;
    case page.endsWith("project"):
      noteArray = await getAll();
      noteArray = noteArray.filter((note, i) => note.tags.includes("project"));
      break;
    case page.endsWith("list"):
      noteArray = await getAll();
      noteArray = noteArray.filter((note, i) => note.tags.includes("lists"));
      break;
    default:
      break;
  }
  return noteArray;
}
