import { Dialog, DialogTrigger } from "@/components/models";
import RecuritModal from "@/components/models/recuritModal";
import { Table } from "@/components/table/referal";
import Image from "next/image";
import Link from "next/link";

const Data = [
  {
    ranking: 1,
    name: "0x1Ae1234BcDe56789F0123456789AbCdEF0123456",
    multiplier: 1.5,
    recruited: "0x1Ae1234BcDe56789F0123456789AbCdEF0123456",
    points: 1000,
  },
  {
    ranking: 2,
    name: "0x1Ae1234BcDe56789F0123456789AbCdEF0123456",
    multiplier: 2.3,
    recruited: "0x2Bc5678DeF901",
    points: 1000,
  },
  {
    ranking: 3,
    name: "0x1Ae1234BcDe56789F0123456789AbCdEF0123456",
    multiplier: 1.8,
    recruited: "0x3Cd9012EfGh3456IjKl",
    points: 1000,
  },
  {
    ranking: 4,
    name: "0x1Ae1234BcDe56789F0123456789AbCdEF0123456",
    multiplier: 2.0,
    recruited: "0x1Ae1234BcDe56789F0123456789AbCdEF0123456",
    points: 1000,
  },
  {
    ranking: 5,
    name: "0x1Ae1234BcDe56789F0123456789AbCdEF0123456",
    multiplier: 1.6,
    recruited: "0x5EfGh9012IjKl34",
    points: 1000,
  },
];

export default function Referral() {
  return (
    <div className="flex justify-center item-center ">
      <div className="w-full px-5 lg:px-24">
        <div className="flex items-center justify-center min-h-[20vh] font-Raleway">
          <div className="text-center">
            <h1 className="text-[#ffffff0f] font-ArchivoBlack lg:text-[96px] text-[40px] font-normal uppercase custom-text">
              Refferal
            </h1>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center gap-5 w-full items-center">
          <div className="rounded-lg xl:basis-1/2 w-full text-left  border ring-current border-[#B196FF] shadow-xl shadow-[#f796ff33]">
            <div className="p-5 text-left px-5">
              <div>
                <p className="text-xl font-normal ">Liquidity Providing</p>
                <div className="flex justify-between items-start py-2 font-Nostromo ">
                  <p className="text-2xl font-bold">0.001232144</p>
                  <div className="flex items-center gap-1 justify-center">
                    <Image
                      src={"/assets/Btc.png"}
                      alt="icon"
                      width={20}
                      height={10}
                    />
                    <p className="text-xl font-medium">USDC</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full border-t border-[#B196FF]">
              <button className="rounded-b-lg px-5 py-3 font-Raleway flex  font-semibold box-border  sm:px-3 justify-between hover:cursor-pointer w-full bg-custom-button-bg">
                <div> Add Liquid</div>
                <Image
                  src={"/assets/arrow_icon.png"}
                  alt="icon"
                  width={20}
                  height={10}
                />
              </button>
            </div>
          </div>
          <div className="rounded-lg xl:basis-1/2 w-full text-left  border ring-current border-[#B196FF] shadow-xl shadow-[#f796ff33]">
            <div className="p-5 text-left px-5">
              <p className="text-xl font-normal ">Multiplier / Recruited</p>
              <div className="flex justify-between gap-2 items-start py-1 font-Nostromo">
                <p className="text-3xl italic font-extrabold">196%</p>
                <div className="flex justify-center gap-1 items-center">
                  <p className=" font-Raleway font-normal text-xl">First</p>
                  <p className="text-[28px] font-extrabold">5</p>
                </div>
                <div className="flex justify-center gap-1 items-center">
                  <p className=" font-Raleway font-normal text-xl">Second</p>
                  <p className="text-[28px] font-extrabold">2</p>
                </div>
              </div>
            </div>
            <div className=" w-full border-t  border-[#B196FF]">
              <Dialog>
                <DialogTrigger asChild>
                  <button className=" rounded-b-lg px-5 py-3 font-Raleway flex box-border  font-semibold  gap-x-8 sm:px-3 justify-between hover:cursor-pointer w-full bg-custom-button-bg">
                    <div>Recruit</div>
                    <Image
                      src={"/assets/arrow_icon.png"}
                      alt="icon"
                      width={20}
                      height={10}
                    />
                  </button>
                </DialogTrigger>
                {<RecuritModal />}
              </Dialog>
            </div>
          </div>
          <div className="rounded-lg w-full xl:basis-2/3 py-5 text-left px-5 border gap-3 border-[#B196FF] shadow-xl shadow-[#f796ff33]">
            <div className=" flex float-end items-center">
              <Image
                className="pl-7"
                src={"/assets/rank.png"}
                alt="icon"
                width={140}
                height={140}
              />
              <div className="relative -left-[92px] -top-2 text-center ">
                <p className="font-ArchivoBlack text-2xl font-normal">9123</p>
                <p className="font-Raleway text-[10px] font-light"> Ranking</p>
              </div>
            </div>
            <p className="text-xl font-normal">Points / Ranking</p>
            <div className="flex justify-center items-center py-2 px-2 lg:text-3xl text-xl font-Nostromo font-extrabold">
              <p className="truncate">182,000,183.00</p>
            </div>
            <div className="flex justify-center  lg:justify-between">
              <Link
                href="https://pumpbit.gitbook.io/pumpbit-whitepaper"
                target="_blank"
              >
                <div className="lg:py-2 flex gap-x-3 justify-center items-center ">
                  <h3 className=" text-[#DEC0FF] lg:font-medium font-normal lg:text-xl text-lg overflow-hidden truncate whitespace-no-wrap ">
                    Read Whitepaper
                  </h3>
                  <Image
                    className=""
                    src={"/assets/circle_down.png"}
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        {
          <div className="py-10 ">
            <Table data={Data} />
          </div>
        }
      </div>
    </div>
  );
}
