"use client";
import Link from "next/link";
import { useState } from "react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col space-y-1">
      <Link
        className="bg-purple-200 rounded-md p-1 text-start text-purple-600"
        href={"/"}
      >
        All
      </Link>
      <Link
        className="bg-purple-200 rounded-md p-1 text-start text-purple-600"
        href={"/active"}
      >
        Active
      </Link>
      <Link
        className="bg-purple-200 rounded-md p-1 text-start text-purple-600"
        href={"/done"}
      >
        Done
      </Link>
      <button
        className="bg-purple-200 rounded-md p-1 text-start text-purple-600"
        onClick={toggleDropdown}
      >
        Tags
        {isOpen && (
          <div className="my-1">
            <ul className=" space-y-1">
              <li className="bg-white px-2 py-1 rounded-md">
                <Link
                  className="rounded-md p-1 text-start text-purple-600"
                  href={"/urgent"}
                >
                  Urgent
                </Link>
              </li>
              <li className="bg-white px-2 py-1 rounded-md">
                <Link className=" rounded-md p-1 text-start " href={"/list"}>
                  List
                </Link>
              </li>
              <li className="bg-white px-2 py-1 rounded-md">
                <Link className=" rounded-md p-1 text-start " href={"/project"}>
                  Project
                </Link>
              </li>
              <li className="bg-white px-2 py-1 rounded-md">
                <Link
                  className=" rounded-md p-1 text-start "
                  href={"/personal"}
                >
                  Personal
                </Link>
              </li>
            </ul>
          </div>
        )}
      </button>

      <Link
        className="bg-purple-200 rounded-md p-1 text-start text-purple-600"
        href={"/trash"}
      >
        Trash
      </Link>
    </div>
  );
}
