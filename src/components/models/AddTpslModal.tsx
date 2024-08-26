import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from ".";
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from "../ui/slider";

export default function AddTpslModal() {
  return (
    <div>
      <DialogContent className=" bg-gradient-bg flex flex-col gap-y-3 text-white  max-w-lg">
        <DialogTitle> Add TP/SL</DialogTitle>
        <div className=" mt-6">
          <div className=" flex gap-2 items-center py-5">
            <p> BTC/USD</p>

            <p className="text-semantic-success">Long 50x</p>
          </div>
          <div className="flex  justify-between  ">
            <div>
              <p className="text-text-secondary">
                Entry Price
                <span className="block text-white text-sm pt-2">294.12</span>
              </p>
            </div>
            <div>
              <p className="text-text-secondary text-sm">
                Last Price
                <span className="block text-white text-sm pt-2">12.4122</span>
              </p>
            </div>
            <div>
              <p className="text-text-secondary text-base">
                Liq Price
                <span className="block text-white text-sm pt-2">893.23</span>
              </p>
            </div>
          </div>
        </div>
        <hr className=" border border-border my-2" />
        <div className="rounded-3xl border border-p-light   p-5">
          <div className="flex flex-col gap-y-4">
            <div className="flex w-full items-center  justify-between gap-x-5">
              <div>
                <p className="text-white text-lg">1000.00</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <p className="text-lg">300%</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-text-secondary text-justify pr-12">
            When the price reaches <span className="text-white">43,000.00</span>{" "}
            , it will trigger a Market order, and the estimated PnL will be{" "}
            <span className="text-semantic-success">29.31 USDC</span>
          </p>
        </div>
        <div className="rounded-3xl border border-p-light  p-5 mt-3">
          <div className="flex flex-col gap-y-4">
            <div className="flex w-full items-center  justify-between gap-x-5">
              <div>
                <p className="text-white text-lg">1000.00</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <p className="text-lg">300%</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-text-secondary text-justify pr-12">
            When the price reaches <span className="text-white">43,000.00</span>{" "}
            , it will trigger a Market order, and the estimated PnL will be{" "}
            <span className="text-semantic-danger">29.31 USDC</span>
          </p>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-row">
            <p className="mr-auto leading-relaxed text-lg">size</p>
            <p className="text-sm  "> 10.11BTC</p>
            <p className="text-sm  ml-2"> 20%</p>
          </div>
          <SliderRoot step={10} min={1} max={100} defaultValue={[30]}>
            <SliderTrack>
              <SliderRange />
            </SliderTrack>
            <SliderThumb />
          </SliderRoot>
        </div>
        <hr className=" border border-border my-2" />
        <div className=" flex justify-between gap-3">
          <DialogClose className="w-full">
            <button className="border border-border bg-transparent px-10 py-3 rounded-full w-full">
              {" "}
              Cancel
            </button>
          </DialogClose>

          <button className="border border-border bg-button-primary px-10 py-3 rounded-full w-full">
            {" "}
            Confirm
          </button>
        </div>
      </DialogContent>
    </div>
  );
}
