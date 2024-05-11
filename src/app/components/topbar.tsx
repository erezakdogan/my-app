"use client";
import { useState } from "react";
import Modal from "./Modal";
import Link from "next/link";
import FormComponent from "./FormComponent";

export function TopBar() {
  return (
    <div className="fill-gray-400 px-2 flex justify-between">
      <div className="flex flex-row space-x-8">
        <div className="text-base px-4 text-purple-800">
          <h1 className="text-3xl">Tasks</h1>
          <div className="flex flex-row divide-x divide-purple-600">
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
          <button className="outline outline-2 outline-purple-400 text-purple-400 px-4 rounded-xl ">
            Search
          </button>
        </div>
      </div>

      <Link
        className="bg-white outline outline-2 outline-purple-400 text-purple-400 p-2 rounded-lg text-center justify-center"
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
