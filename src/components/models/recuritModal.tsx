"use client";
import React, { FC } from "react";
import { DialogContent, DialogTitle, DialogTrigger } from ".";
import { MdOutlineContentCopy } from "react-icons/md";
import { useToast } from "../ui/toast/use-toast";

const CopyToClipboardButton: FC<{ text: string }> = ({ text }) => {
  const { toast } = useToast();
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        description: "Text copied to clipboard successfully!",
      });
    } catch (err: any) {
      alert("Failed to copy text");
    }
  };

  return (
    <div
      className="flex items-center gap-x-2 cursor-pointer"
      onClick={copyToClipboard}
    >
      <p className="text-sm">{text}</p>
      <MdOutlineContentCopy />
    </div>
  );
};

export default function RecuritModal() {
  return (
    <div>
      <DialogContent className="bg-gradient-bg border border-[#B196FF] flex flex-col gap-y-3 text-white max-w-sm">
        <DialogTitle className="uppercase">Recruit</DialogTitle>
        <div className="mt-6">
          <div className="flex flex-col justify-between gap-y-2">
            <p className="text-text-secondary capitalize text-sm">
              Invite Code
            </p>
            {/* Use CopyToClipboardButton here */}
            <CopyToClipboardButton text="MerlinFutures20fc" />
          </div>
        </div>

        <div className="mt-5">
          <button className="py-1.5 w-full rounded-full text-lg bg-primary font-bold">
            Share
          </button>
        </div>
      </DialogContent>
    </div>
  );
}
