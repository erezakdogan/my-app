"use client";
import TaskGridComponent from "../components/task_grid";
import { usePathname } from "next/navigation";
import { Note } from "../data/note";
import { getAll } from "../service/storage_api";
import ListView from "../components/listview";

export default function Content() {
  const page = usePathname().replace("/", "");
  return (
    <main className="flex-grow min-h-full bg-gray-200 items-start p-8">
      <ListView />
    </main>
  );
}



