"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaDiscord, FaTwitter } from "react-icons/fa";

export default function HeaderLanding() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <main className="px-5 md:px-10 py-2 flex justify-between  items-center relative">
      <div className="p-4">
        <Link href="/">
          <Image
            src={"/assets/Logo_White.png"}
            className=" w-36 lg:w-44"
            width={300}
            height={30}
            alt="logo"
          />
        </Link>
      </div>

      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <GiHamburgerMenu
            width={20}
            height={20}
            className={`fill-current  ${isOpen ? "hidden" : "block"}`}
          ></GiHamburgerMenu>
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>

      <div
        className={` w-full flex flex-col gap-y-8 px-10 py-3 bg-gradient-bg justify-center items-center absolute z-10 right-0 top-20 lg:relative lg:!bg-none  lg:top-0  lg:flex-row lg:justify-end  lg:items-center lg:gap-x-10 lg:flex ${isOpen ? "block" : "hidden"
          } `}
      >
        <Link
          href="/airdrop"
          className={`text-xl lg:text-xl font-normal hover:border-b  hover:border-hovernav ${pathname === "/airdrop" && " border-b border-hovernav"
            }`}
        >
          Airdrop
        </Link>
        <Link
          href="/nftMint"
          className={`text-xl lg:text-xl font-normal hover:border-b  hover:border-hovernav ${pathname === "/nftMint" && " border-b border-hovernav"
            }`}
        >
          NFT Mint
        </Link>
        <Link
          href="/referral"
          className={`text-xl lg:text-xl font-normal hover:border-b  hover:border-hovernav ${pathname === "/referral" && " border-b border-hovernav"
            }`}
        >
          Referral
        </Link>
        <div className=" flex gap-x-10">
          <Link href="https://twitter.com/pumpbit_io" target="_blank">
            <FaTwitter className="text-white text-3xl" />
          </Link>
          <Link href="https://discord.gg/7urJ9Yuczb" target="_blank">
            <FaDiscord className="text-white text-3xl" />
          </Link>
        </div>

        <button
          className=" w-80 bg-primary text-xl   lg:w-auto lg:text-xl font-normal rounded-full px-6 py-3 hover:cursor-pointer"
          onClick={() => router.push("/trade")}
        >
          Launch App
        </button>
      </div>
    </main>
  );
}
