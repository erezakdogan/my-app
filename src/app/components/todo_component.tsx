/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Note } from "../data/note";
import { Field } from "formik";
import { updatedNote } from "../service/storage_api";

export default function TodoComponent({ note }: { note: Note }): JSX.Element {
  return (
    <div className="flex flex-row min-h-full bg-white p-4 rounded-lg text-black">
      <input
        className="appearance-none min-w-8 size-8 border-2 my-1 border-purple-600 rounded-full bg-white checked:bg-purple-600"
        type="checkbox"
        name="checkbox"
        id="check"
        onChange={async () => {
          updatedNote({ ...note, is_completed: !note.is_completed });
          note.is_completed = !note.is_completed;
        }}
        checked={note.is_completed}
      />
      <div className="felx flex-grow">
        <div className="flex flex-col px-2 space-y-4">
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl line-clamp-1 px-2">{note.title}</h1>
            <button className="min-w-max">
              <img
                src="/icons/more.svg"
                className=" text-purple-900 h-full min-w-max"
                alt="more"
              />
            </button>
          </div>
          <p className="line-clamp-3">{note.description}</p>
          <div className="flex flex-wrap gap-2">
            {note.tags.map((_, i) => (
              <div
                className="outline outline-2 rounded-3xl px-2 text-center"
                key={i}
              >
                {_}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
