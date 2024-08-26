import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from ".";

export default function ClaimModal() {
  return (
    <div>
      <DialogContent className=" bg-card-secondary flex flex-col gap-y-3 text-white  max-w-sm">
        <DialogTitle> Claim liquidity mining rewards</DialogTitle>
        <div className=" mt-6">
          <div className=" flex justify-between items-center">
            <p className=" text-text-secondary  capitalize text-sm">
              Claimable Rewards
            </p>
            <p className="text-sm">10,212,313.80 PBT</p>
          </div>
        </div>

        <div className="mt-5 ">
          <button className="py-1.5 w-full rounded-full text-lg bg-primary font-bold">
            Claim
          </button>
        </div>
      </DialogContent>
    </div>
  );
}
