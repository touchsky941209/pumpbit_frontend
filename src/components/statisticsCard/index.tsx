import Image from "next/image";
import Link from "next/link";

export default function StatisticsCard() {
  return (
    <div className=" py-8 lg:px-8 px-5 rounded-xl border-border bg-card backdrop-blur-lg/2">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-x-2 lg:text-2xl text-lg font-bold">
          <Image
            src="/assets/favicon.png"
            alt="favicon"
            width={24}
            height={24}
            className="lg:w-9 lg:h-9"
          />
          <p className="lg:block hidden ">Merlin Futures Statistics</p>
          <p className="lg:hidden block">PBT Statistics</p>
        </div>
        <div className=" flex md:justify-between justify-center items-center md:gap-x-5 gap-x-2">
          <button className="lg:rounded-3xl rounded-md  bg-button-primary px-5 py-2 text-lg font-normal">
            Buy
          </button>
        </div>
      </div>
      <div className=" pt-10 lg:flex lg:justify-between lg:items-center grid grid-cols-2 gap-y-3 text-lg font-normal">
        <div className="grid grid-cols-1  gap-y-2">
          <p>Total Emissions</p>
          <p>993901.00</p>
        </div>
        <div className="grid grid-cols-1 gap-y-2 lg:text-start text-center">
          <p>Current Price</p>
          <p>$43.80</p>
        </div>
        <div className="grid grid-cols-1 gap-y-2 ">
          <p>Total Staked</p>
          <p className="">-</p>
        </div>
        <div className="grid grid-cols-1 gap-y-2 lg:text-start text-center">
          <p>Current Emissions</p>
          <p className="">-</p>
        </div>
      </div>
    </div>
  );
}
