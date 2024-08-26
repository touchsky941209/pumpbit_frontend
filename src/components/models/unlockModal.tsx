import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from ".";
import { BsExclamation } from "react-icons/bs";

export default function UnlockModal() {
  return (
    <div>
      <DialogContent className=" bg-card-secondary flex flex-col gap-y-3 text-white  max-w-sm">
        <DialogTitle> Unlocking</DialogTitle>
        <div className=" mt-6">
          <div className=" flex  gap-x-4 items-center">
            <div className=" bg-[#CFD1D9] flex justify-center items-center p-2 rounded-full  ">
              {" "}
              <BsExclamation className="text-black text-4xl" />
            </div>

            <div className="">
              {" "}
              <p className="text-base font-bold">
                Unlocking early will lead to loss of potential rewards!
              </p>
            </div>
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
