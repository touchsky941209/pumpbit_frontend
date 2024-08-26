import Image from "next/image";
import React from "react";

type ButtonMintProps = {
  title: String;
  onClick: () => void;
};

export const ButtonMint: React.FC<ButtonMintProps> = ({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full px-5 py-3 w-64 flex justify-center items-center  gap-x-8 sm:px-10 sm:justify-between hover:cursor-pointer lg:w-96 bg-custom-button-bg"
    >
      <div className="uppercase">{title}</div>
      <Image src={"/assets/arrow_icon.png"} alt="icon" width={20} height={20} />
    </button>
  );
};

export const ButtonMintLight: React.FC<ButtonMintProps> = ({
  onClick,
  title,
}) => {
  return (
    <button
      className="bg-custom-button-bg rounded-full px-5 py-3 w-64 flex justify-center gap-x-8 sm:px-10 sm:justify-between hover:cursor-pointer lg:w-28"
      onClick={onClick}
    >
      <p className="uppercase">{title}</p>
    </button>
  );
};
