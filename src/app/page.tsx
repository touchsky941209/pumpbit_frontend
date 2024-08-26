"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import CardText from "@/components/card";
import CartNft from "@/components/cardNft";
import { ButtonMint } from "@/components/button";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <main className=" flex px-10  pb-10 flex-wrap  md:flex-row lg:px-0 justify-around lg:flex-nowrap  lg:mx-28 ">
      <section className="pt-20 ">
        <h1 className="bg-gradient-to-r from-[#6F62D0] to-[#9789FF] text-transparent bg-clip-text font-extrabold  text-left text-4xl sm:text-7xl overflow-hidden truncate whitespace-no-wrap capitalize">
          Cofounding <br /> NFT
        </h1>

        <div className="pt-10 sm:hidden">
          <ol className="list-decimal leading-10	text-[#D7D7D7] text-sm ">
            <li>Hold & receive $PBT daily</li>
            <li>Hold & receive platform revenue daily</li>
            <li>Airdrop Points x10</li>
            <li>Referral fee income privileges</li>
          </ol>
        </div>

        <div className="hidden pt-12 sm:grid sm:grid-cols-2	 gap-8">
          {Data.map(({ imageUl, text, boldtext }, i) => {
            return (
              <CardText
                key={i}
                imageUl={imageUl}
                text={text}
                boldText={boldtext}
              />
            );
          })}
        </div>
        <div className="flex  pt-20 justify-center  lg:justify-between items-center">
          <ButtonMint
            title="Mint Now"
            onClick={() => console.log("button clicked!")}
          />
          <Link
            href="https://pumpbit.gitbook.io/pumpbit-whitepaper"
            target="_blank"
          >
            <div className=" hidden lg:flex gap-x-3 justify-center items-center ">
              <h3 className="bg-gradient-to-r from-[#F2CDFF] to-[#893BD8] text-transparent bg-clip-text font-normal    text-2xl  overflow-hidden truncate whitespace-no-wrap capitalize">
                Read Whitepaper
              </h3>
              <Image
                src={"/assets/circle_down.png"}
                width={30}
                height={30}
                alt="icon"
              />
            </div>
          </Link>
        </div>
      </section>
      <section>
        <CartNft />
      </section>
    </main>
  );
}

const Data = [
  { imageUl: "/assets/1.png", text: "Hold & receive $MRFT daily" },
  { imageUl: "/assets/2.png", text: "Hold & receive platform revenue daily" },
  { imageUl: "/assets/3.png", text: "Airdrop Points ", boldtext: "x10" },
  { imageUl: "/assets/4.png", text: "Referral fee income privileges" },
];
