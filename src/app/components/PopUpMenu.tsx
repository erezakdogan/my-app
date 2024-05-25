import React from "react";
import { deleteNote } from "../service/storage_api";

export function PopUpMenu({
  setIsPopped,
  noteId,
}: {
  setIsPopped: Function;
  noteId: string;
}) {
  return (
    <ul className="absolute top-full right-0 min-w-max bg-white py-1 outline outline-gray-400 outline-1 rounded-lg">
      <MenuItem setIsPopped={setIsPopped} key={"update"} id={noteId}>
        Update
      </MenuItem>
      <MenuItem setIsPopped={setIsPopped} key={"delete"} id={noteId}>
        Delete
      </MenuItem>
    </ul>
  );

  function MenuItem({
    setIsPopped,
    children,
    id,
    key,
  }: {
    setIsPopped: Function;
    children: string;
    id: string;
    key: any;
  }) {
    return (
      <li className="px-2 font-normal hover:bg-gray-100">
        <button
          key={key}
          onClick={() => {
            deleteNote(id).then(() => {
              setIsPopped(false);
            });
          }}
        >
          {children}
        </button>
      </li>
    );
  }
}
