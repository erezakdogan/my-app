import React from "react";
import axios, { AxiosResponse } from "axios";
import { Note } from "../data/note";

export async function getAll() {
  const data = (await axios.get("http://localhost:3001/notes/")).data;
  console.log("data is " + data.toString());

  return data;
}

export async function addToAll(values: any) {
  const note = {
    title: values.title,
    description: values.description,
    is_completed: false,
    created_at: new Date(),
    updated_at: new Date(),
    tags: values.tags,
  };
  await axios.post("http://localhost:3001/notes/", note).then((response) => {
    return true;
  });
  return false;
}

export async function updatedNote(note: Note) {
  var noteId = note.id;
  axios.put(`http://localhost:3001/notes/${noteId}`, note);
}
export async function deleteNote(noteId: string) {
  try {
    await axios.delete(`http://localhost:3001/notes/${noteId}`);
    // Handle successful deletion (e.g., remove note from UI)
  } catch (error) {
    console.error("Error deleting note:", error);
    // Display error message to user (e.g., "Note deletion failed")
  }
}
export async function getNotes(page: string) {
  let noteArray: Array<Note> = await getAll();
  switch (true) {
    case page.endsWith("/"):
      break;
    case page.endsWith("active"):
      noteArray = noteArray.filter((note, i) => note.is_completed == false);
      break;
    case page.endsWith("done"):
      noteArray = noteArray.filter((note, i) => note.is_completed == true);
      break;
    case page.endsWith("urgent"):
      noteArray = noteArray.filter((note, i) => note.tags.includes("urgent"));
      break;
    case page.endsWith("personal"):
      noteArray = noteArray.filter((note, i) => note.tags.includes("personal"));
      break;
    case page.endsWith("project"):
      noteArray = noteArray.filter((note, i) => note.tags.includes("project"));
      break;
    case page.endsWith("list"):
      noteArray = noteArray.filter((note, i) => note.tags.includes("lists"));
      break;
    default:
      break;
  }
  return noteArray;
}
