// components/Modal.js
"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

interface ModalProps {
  children?: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ children }) => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  return (
    modal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400 bg-opacity-50 ">
        <div className="flex flex-col items-end bg-gray-100 rounded-lg border-solid outline outline-white p-4">
          <Link href={pathname}>
            <button className=" font-bold outline outline-gray-600 outline-2 rounded-3xl px-2">
              Close
            </button>
          </Link>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
