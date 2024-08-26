"use client";

import { Dialog, DialogTrigger } from "../models";
import StakeBPTModal from "../models/stakeBptModal";
import UnlockModal from "../models/unlockModal";

export default function StakePbtCard() {
  return (
    <div className=" md:py-10 py-4">
      <div className=" flex justify-between items-center text-start font-medium text-2xl">
        <p>Stake PBT</p>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <button className="lg:rounded-3xl rounded-md  bg-button-primary px-3 py-1 text-lg font-normal">
                Stake PBT
              </button>
            </DialogTrigger>
            {<StakeBPTModal />}
          </Dialog>
        </div>
      </div>
      <div className=" md:pt-10 pt-4 lg:flex lg:justify-between lg:items-center grid grid-cols-2 lg:gap-y-3 gap-y-3 text-lg font-normal">
        <div className="grid grid-cols-1 gap-y-2">
          <p>Stake Amount</p>

          <div className="flex justify-start items-center gap-x-2">
            <p>200.00</p>
            <p>PBT</p>
          </div>
        </div>
        <div className="grid grid-cols-1  gap-y-2">
          <p>Multiplier</p>
          <div className="flex justify-start items-center gap-x-2">
            <p>1x</p>
            <p>30D</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-2">
          <p>Start Time</p>
          <div className="flex justify-start items-center gap-x-1">
            <p>2024 </p>
            <p>02/1221:00</p>
            <p>21:00</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-2">
          <p>Countdown/Unlocking Time</p>
          <div className="flex justify-start items-center gap-x-2">
            <p>29D 12h 23m 12s</p>
            <p>2024 03/12 21:00</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-1 grid-cols-2 gap-y-2 text-primary">
          <p>Current Rewards</p>
          <div className="flex lg:justify-start items-center gap-x-2 ">
            <p className="text-start">+103.80</p>
            <p>PBT</p>
          </div>
        </div>
        <div className="">
          <Dialog>
            <DialogTrigger asChild>
              <button className="lg:rounded-3xl rounded-md  bg-button-secondary border border-white px-3 py-1 text-lg font-normal">
                Unlocking
              </button>
            </DialogTrigger>
            {<UnlockModal />}
          </Dialog>
        </div>
      </div>
    </div>
  );
}
