import AirDropCard from "@/components/airDropCard";
import Image from "next/image";
import Link from "next/link";

export default function Airdrop() {
  return (
    <div className="flex justify-center item-center pt-5">
      <div className="w-full px-5 lg:px-24">
        <div className="flex font-Raleway">
          <div className="">
            <h1 className="text-[#ffffff0f] text-left font-ArchivoBlack lg:text-[96px] text-[40px] font-normal uppercase custom-text">
              PUMPBIT Airdrop
            </h1>
            <div className="flex gap-x-10 mt-5">
              <div className="flex gap-x-5">
                <p>Event date</p>
                <p className="font-semibold">2024 05/15 - 06/15</p>
              </div>
              <div className="flex gap-x-5">
                <p>Total supply</p>
                <p className="font-semibold">10,000,000 PBT</p>
              </div>
            </div>

            <div className="flex justify-between mt-5">
              <p className="text-xl font-light text-[#CCC0FF]">
                The Airdrop event aims to jumpstart and sustain the growth of
                Pumpbit by prioritizing Liquidity Providers. Contributions to
                liquidity are measured accordingly.
              </p>
              <div className="flex gap-x-2 items-center cursor-pointer">
                <h3 className="text-[#CCC0FF] bg-clip-text font-medium text-xl  capitalize whitespace-nowrap">
                  Read Whitepaper
                </h3>
                <Image
                  src={"/assets/circle_down.png"}
                  width={30}
                  height={30}
                  alt="icon"
                />
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/assets/MerlinCoin 1.png"
              alt="merlin coin"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Grid Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 border border-[#AB96FF] p-6 rounded-lg bg-card backdrop-blur-sm  shadow-xl shadow-[#F796FF33]">
          {/* Air Drop */}
          <div className="flex flex-col gap-y-3 py-6 px-10 lg:border-r-2 lg:border-[#AB96FF]">
            <p className="font-normal text-xl">My Airdrop points</p>
            <p className="font-Nostromo font-black text-2xl">182,000,183.00</p>
          </div>

          {/* Liquid Providing */}
          <div className="flex flex-col gap-y-3 py-6 px-10 lg:border-r-2 lg:border-[#AB96FF]">
            <p className="font-normal text-xl">Liquidity Providing</p>
            <div className="flex items-center gap-x-5 flex-wrap">
              <p className="font-Nostromo font-bold text-2xl">123.2144</p>
              <div className="flex items-center gap-x-2 font-Nostromo">
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

          {/* Multiplier  */}

          <div className="flex flex-col gap-y-3 py-6 px-10 lg:border-r-2 lg:border-[#AB96FF] ">
            <p className="font-normal text-xl">Multiplier / Recruited</p>
            <div className="flex gap-x-5 flex-wrap">
              <div className="flex gap-x-2 items-center">
                {" "}
                <p className="text-xl font-medium">First</p>
                <p className="font-Nostromo font-black text-2xl">5</p>
              </div>
              <div className="flex gap-x-2 items-center">
                {" "}
                <p className="text-xl font-medium">Second</p>
                <p className="font-Nostromo font-black text-2xl">2</p>
              </div>
            </div>
          </div>

          {/* MY NFT  */}
          <div className="flex flex-col gap-y-3 py-6 px-10">
            <p className="font-normal text-xl">MY NFT Amount</p>
            <p className="font-Nostromo font-black text-2xl">4</p>
          </div>
        </div>

        {/* cards */}

        <div className="mt-16 flex justify-between flex-wrap gap-5 mb-16">
          {CardData?.map((item, index) => {
            return (
              <AirDropCard
                key={index}
                title={item.title}
                description={item.description}
                buttonText={item.buttonText}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const CardData = [
  {
    title: "Provide Liquidity",
    description:
      "Liquidity Providers and contributors who work to increase liquidity",
    buttonText: "Provide Liquidity",
  },
  {
    title: "Invite And Receive",
    description:
      "First-tier inviter gets 16% of invitee's Liquidity Points, and gets 8% from second-tier invitees.",
    buttonText: "invite",
  },
  {
    title: "Collect The NFT",
    description: "The more NFTs collected, the higher the score obtained.",
    buttonText: "MINT NFT",
  },
];
