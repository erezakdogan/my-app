/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Note } from "../data/note";
import { updatedNote } from "../service/storage_api";
import { PopUpMenu } from "./PopUpMenu";

export default function TaskGridComponent({
  note,
}: {
  note: Note;
}): JSX.Element {
  let [isChecked, setIsChecked] = useState(note.is_completed);
  let [isPopped, setIsPopped] = useState(false);

  return (
    <div className="flex flex-row h-full bg-white p-4 rounded-lg text-black">
      <input
        className="appearance-none min-w-8 size-8 border-2 my-1 border-gray-400 rounded-full bg-white checked:bg-gray-200"
        type="checkbox"
        name="checkbox"
        id="check"
        onChange={async () => {
          await updatedNote({ ...note, is_completed: !isChecked }).then(() => {
            setIsChecked(!isChecked);
          });
        }}
        checked={isChecked}
      />
      <div className=" px-2">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl line-clamp-1 px-2">{note.title}</h1>
            <div className="relative">
              <button
                className="min-w-max"
                onClick={() => setIsPopped(!isPopped)}
              >
                <img
                  src="/icons/more.svg"
                  className=" text-gray-900 h-full min-w-max"
                  alt="more"
                />
              </button>
              {isPopped &&
                PopUpMenu({ setIsPopped: setIsPopped, noteId: note.id })}
            </div>
          </div>
          <p className="line-clamp-3">{note.description}</p>
        </div>
        <div>
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
