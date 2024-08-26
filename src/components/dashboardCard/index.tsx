"use client";
import Image from "next/image";
import Link from "next/link";

export default function DashboardCard() {
  return (
    <div className="py-8 md:px-8 px-5  rounded-xl  border-border bg-card backdrop-blur-lg/2">
      <div className="flex justify-between items-center">
        <div className="flex w-full justify-between items-center  lg:text-2xl text-lg font-bold">
          <div className=" flex justify-between items-center gap-x-2 ">
            <Image
              src="/assets/Subtract.png"
              alt="favicon"
              width={20}
              height={20}
              className="lg:w-6 lg:h-6"
            />

            <p className="text-center">Dashboard</p>
          </div>
          <div className="lg:hidden  block">
            <button className="lg:rounded-3xl rounded-md  bg-button-primary px-5 py-2 text-lg  font-normal">
              Claim All
            </button>
          </div>
        </div>
      </div>
      <div className=" md:pt-10 pt-5 lg:flex lg:justify-between lg:items-center grid grid-cols-2 gap-y-3 text-lg font-normal">
        <div className="grid grid-cols-1 gap-y-2">
          <p>Total Amount</p>

          <div className="flex justify-start items-center gap-x-2">
            <p>103.80</p>
            <p>PBT</p>
            <p>≈$43.80</p>
          </div>
        </div>
        <div className="grid grid-cols-1  gap-y-2 lg:text-start text-center">
          <p>Total Earnings</p>
          <div className="flex lg:justify-start justify-center items-center gap-x-2">
            <p>103.80</p>
            <p>PBT</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-2">
          <p>30D Earnings</p>
          <div className="flex justify-start  items-center gap-x-2 ">
            <p>103.80</p>
            <p>PBT</p>
            <p className="text-semantic-success">+29%</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:text-start text-center gap-y-2">
          <p>24h Earnings</p>
          <div className="flex lg:justify-start justify-center items-center gap-x-2">
            <p>103.80</p>
            <p>PBT</p>
            <p className="text-semantic-success">+29%</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-1 grid-rows-1 gap-y-2 gap-x-5 text-primary">
          <p>Claimable Rewards</p>
          <div className="flex lg:justify-start items-center gap-x-2 ">
            <p className="text-start">103.80</p>
            <p>PBT</p>
          </div>
        </div>
        <div className="hidden lg:block">
          <button className="lg:rounded-3xl rounded-md  bg-button-primary px-3 py-1 text-lg font-normal">
            Claim All
          </button>
        </div>
      </div>
    </div>
  );
}
