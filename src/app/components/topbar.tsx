"use client";
import Modal from "./Modal";
import Link from "next/link";
import FormComponent from "./FormComponent";
export function TopBar() {
  return (
    <div className="flex flex-row justify-between fill-gray-400 px-2 ">
      <div className="flex flex-row space-x-8">
        <div className="text-base px-4 ">
          <h1 className="text-3xl">Tasks</h1>
          <div className="flex flex-row divide-x divide-gray-600">
            <h2 className="px-1">Home</h2>
            <h2 className="px-1">Apps</h2>
          </div>
        </div>
        <div className="bg-white flex flex-row rounded-xl p-2">
          <input
            className=" outline-none text-lg px-2 rounded-lg"
            type="text"
            name="search-box"
            id="search-box"
            placeholder={"Search"}
          />
          <button className="outline outline-2 outline-gray-400  px-4 rounded-xl ">
            Search
          </button>
        </div>
      </div>
      <Link
        className="bg-white outline outline-2 outline-gray-400 items-center content-center p-2 rounded-lg"
        href={"?modal=true"}
      >
        New Task
      </Link>
      <Modal>
        <FormComponent />
      </Modal>
    </div>
  );
}
