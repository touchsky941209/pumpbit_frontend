"use client";
import ConversationIcon from "@/icons/conversation";
import DescriptionIcon from "@/icons/description";
import DiversityIcon from "@/icons/diversity";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaCaretUp } from "react-icons/fa";
import { Dialog, DialogTrigger } from "../models";
import SlippageSettingModal from "../models/slippageSettingsModal";
import Link from "next/link";

export default function SettingMobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="pt-2">
      <div
        onClick={toggleMenu}
        className="flex justify-between items-center px-3"
      >
        <p className="text-xl">Setting</p>

        {open ? (
          <FaCaretUp className="text-xl " />
        ) : (
          <AiFillCaretDown className="text-xl " />
        )}
      </div>
      {open && (
        <div className="py-2">
          <Link href="/referral" onClick={toggleMenu}>
            <div className="flex flex-row gap-x-1 w-full hover:bg-[#18191F] pl-8 p-2">
              <DiversityIcon />
              Referrals
            </div>
            {/* </button> */}
          </Link>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  // onClick={toggleMenu}
                  className="w-full hover:bg-[#18191F] pl-8 py-2 "
                >
                  <div className="flex flex-row gap-x-2">
                    <ConversationIcon />
                    Slippage Settings
                  </div>
                </button>
              </DialogTrigger>
              {<SlippageSettingModal onClose={() => setOpen(false)} />}
            </Dialog>
          </div>
          <Link
            href="https://pumpbit.gitbook.io/pumpbit-whitepaper"
            target="_blank"
            onClick={toggleMenu}
          >
            <div className="flex flex-row gap-x-1 w-full hover:bg-[#18191F] pl-8 p-2">
              <DescriptionIcon />
              Docs
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
