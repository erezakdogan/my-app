import React from "react";
import axios, { AxiosResponse } from "axios";
import { Note } from "../data/note";

export async function getAll(): Promise<Array<Note>> {
  var noteArray: Array<Note> = [];
  return await axios.get("http://localhost:3001/notes/").then((response) => {
    noteArray = response.data;
    return noteArray;
  });
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

export async function updatedNote(note:Note) {
  var noteId = note.id;
 await axios.put(`http://localhost:3001/notes/${noteId}`,note);
  console.log(note.title);
}
