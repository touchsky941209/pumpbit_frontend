import Image from "next/image";
import React from "react";
import { buffer } from "stream/consumers";

export default function WalletButton() {
  return (
    <button>
      <div className=" flex gap-x-1 rounded-full px-3 py-2 justify-center items-center bg-primary   ">
        <Image
          src={"/assets/iconButton.png"}
          alt="icon"
          width={30}
          height={30}
          className="h-4 w-4"
        />
        <span className=" text-sm font-medium lg:text-lg lg:font-bold">
          Connect wallet
        </span>
      </div>
    </button>
  );
}
