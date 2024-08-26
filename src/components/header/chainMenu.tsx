import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const ChainMenu: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState<string>(
    "/assets/icons/chainIcon.svg"
  );
  const [selectedAlt, setSelectedAlt] = useState<string>("solana");

  const handleIconClick = (iconSrc: string, altText: string): void => {
    setSelectedIcon(iconSrc);
    setSelectedAlt(altText);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="relative inline-flex items-center justify-center lg:gap-2 rounded-full lg:bg-[#202229] lg:px-3">
          <div className="relative flex h-10 w-6 md:h-10 md:w-10 items-center justify-center rounded-full bg-cover bg-center">
            <Image
              src={selectedIcon}
              alt={selectedAlt}
              width={30}
              height={30}
            />
          </div>
          <FaChevronDown className="h-4 w-4 hidden lg:block" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-0 border-0 w-32" align="end">
        <div className="absolute w-48 right-0 background-menu rounded-md mt-14">
          <div>
            <button
              className="w-full hover:bg-[#18191F] hover:text-primary px-4 py-2"
              onClick={() =>
                handleIconClick("/assets/icons/ailayer.svg", "AllLayer")
              }
            >
              <div className="flex flex-row items-center gap-x-2">
                <Image
                  src={"/assets/icons/ailayer.svg"}
                  alt="AllLayer"
                  width={30}
                  height={30}
                />
                <p>AllLayer</p>
              </div>
            </button>
            <button
              className="w-full hover:bg-[#18191F] hover:text-primary px-4 py-2"
              onClick={() =>
                handleIconClick("/assets/icons/bitlayer.svg", "BitLayer")
              }
            >
              <div className="flex flex-row items-center hover:text-primary gap-x-2">
                <Image
                  src={"/assets/icons/bitlayer.svg"}
                  alt="BitLayer"
                  width={30}
                  height={30}
                />
                <p>BitLayer</p>
              </div>
            </button>
            <button
              className="w-full hover:bg-[#18191F] hover:text-primary px-4 py-2"
              onClick={() =>
                handleIconClick("/assets/icons/b2.svg", "B² Network")
              }
            >
              <div className="flex flex-row items-center gap-x-2">
                <Image
                  src={"/assets/icons/b2.svg"}
                  alt="B² Network"
                  width={30}
                  height={30}
                />
                <p>B² Network</p>
              </div>
            </button>
            <button
              className="w-full hover:bg-[#18191F] hover:text-primary px-4 py-2"
              onClick={() =>
                handleIconClick("/assets/icons/chainIcon.svg", "Merlin Chain")
              }
            >
              <div className="flex flex-row items-center gap-x-2">
                <Image
                  src={"/assets/icons/chainIcon.svg"}
                  alt="Merlin Chain"
                  width={30}
                  height={30}
                />
                <p>Merlin Chain</p>
              </div>
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
