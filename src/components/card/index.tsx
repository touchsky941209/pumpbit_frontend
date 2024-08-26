import React from "react";
import Image from "next/image";

type CardProps = {
  imageUl: string;
  text: string;
  boldText?: string;
};
export default function CardText(props: CardProps) {
  return (
    <main>
      <div className="rounded-lg h-44  py-20 text-left px-5 border border-[#9789FF] relative">
        <Image
          src={props.imageUl}
          width={35}
          height={20}
          alt="1"
          className="absolute  -left-4 -top-5"
        />
        <h4 className="text-2xl font-extrabold">{props.text}</h4>
        <h2 className="bg-gradient-to-r from-[#6F62D0] to-[#9789FF] text-transparent bg-clip-text font-extrabold  text-left text-2xl   overflow-hidden truncate whitespace-no-wrap capitalize">
          {props.boldText}
        </h2>
      </div>
    </main>
  );
}
