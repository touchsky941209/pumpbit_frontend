"use client";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaCaretUp } from "react-icons/fa";

export default function ButtonsDropDown() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="h-5">
      <div
        onClick={toggleMenu}
        className="flex justify-between items-center px-3  relative   "
      >
        {open ? (
          <FaCaretUp className="text-xl" />
        ) : (
          <AiFillCaretDown className="text-xl " />
        )}
      </div>
      <button></button>
      {open && (
        <div className=" bg-popover px-1 absolute  z-10 rounded-lg ">
          <button className="w-full py-2" onClick={toggleMenu}>
            1W
          </button>
          <button className="w-full text-center   py-2" onClick={toggleMenu}>
            2W
          </button>
          <button className="w-full text-center  py-2" onClick={toggleMenu}>
            1M
          </button>
        </div>
      )}
    </div>
  );
}
