"use client";
import { ButtonMint, ButtonMintLight } from "@/components/button";
import Image from "next/image";
import React from "react";

export default function NftMint() {
  return (
    <div className="pt-7">
      <section>
        <div className="flex flex-col justify-center items-center ">
          <div className="w-full">
            <h1 className="pl-4 text-left md:text-center font-[500] text-white  text-[20px] sm:text-[36px] font-Raleway">
              Your Whitelist Status
            </h1>
          </div>

          <div className="w-full">
            <h1 className=" font-ArchivoBlack pl-4 text-left md:text-center text-[72px] sm:text-[72px] font-[400] text-gradient-to-r from-[#4D3BD8] to-[#9789FF] text-[#9789FF]">
              Guarantee Whitelist
            </h1>
          </div>
          <div className="w-full">
            <p className="pl-4 text-left md:text-center font-Raleway">
              Mint Date: May 1 20:00 ~ May 9 20:00 pm (UTC+g)
            </p>
          </div>
          <div className=" mt-10 mb-5">
            <Image
              src={"/assets/cardImg.png"}
              alt="card-img"
              width={400}
              height={300}
            />
          </div>

          <div className="mt-2 mb-10">
            <div className="flex gap-3 flex-wrap justify-center items-center">
              <div className="relative">
                <input
                  type="number"
                  className="border border-gray-300 rounded-md py-2 px-4 text-gray-700   focus:outline-none focus:border-blue-500 hide-arrows"
                  min={0}
                  maxLength={10}
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#4D3BD8] cursor-pointer">
                  MAX
                </span>
              </div>
              <ButtonMintLight
                title="Mint"
                onClick={() => console.log("clicked!")}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
