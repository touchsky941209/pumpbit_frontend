"use client";
import Image from "next/image";

type AirDropCardProps = {
  title: String;
  description: String;
  buttonText: String;
};
const AirDropCard: React.FC<AirDropCardProps> = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="w-[450px] h-[260px] p-8 border border-[#AB96FF] rounded-lg bg-card backdrop-blur-sm shadow-xl shadow-[#F796FF33]">
      <div className="flex flex-col gap-y-5">
        <p className="font-normal text-4xl gradient-text font-ArchivoBlack">
          {title}
        </p>
        <p className="font-light text-xl">{description}</p>
      </div>
      <div className="mt-8">
        <div>
          <button className="rounded-full px-3 py-[10px] w-full flex justify-center items-center  gap-x-8 sm:px-10 sm:justify-between hover:cursor-pointer  bg-custom-button-bg">
            <div className="uppercase">{buttonText}</div>
            <Image
              src={"/assets/arrow_icon.png"}
              alt="icon"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AirDropCard;
