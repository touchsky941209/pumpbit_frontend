"use client";
import { BreakingNewsIcon } from "@/icons";
import ConversationIcon from "@/icons/conversation";
import DescriptionIcon from "@/icons/description";
import DiversityIcon from "@/icons/diversity";
import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaCaretUp } from "react-icons/fa";

export default function LanguageMobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    console.log("Language")
    setOpen(!open);
  };

  useEffect(() => {
    console.log("Language => ", open)
  }, [open])
  return (
    <div className="pb-3">
      <div
        onClick={toggleMenu}
        className="flex justify-between items-center px-3"
      >
        <p className="text-xl">Language</p>

        {open ? (
          <FaCaretUp className="text-xl " />
        ) : (
          <AiFillCaretDown className="text-xl " />
        )}
      </div>
      {open && (
        <div>
          <div className=" text-p-lighter">
            <button className="w-full text-left"
              onClick={toggleMenu}
            >
              <div className="flex flex-row pl-8 py-2">English</div>
            </button>
            <button
              className="w-full text-left text-gray-400  py-1"
              onClick={toggleMenu}
            >
              <div className="flex flex-row pl-8 py-1">简体中文</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
