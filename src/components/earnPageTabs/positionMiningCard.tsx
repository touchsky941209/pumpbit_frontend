"use client";
export default function PositionMiningCard() {
  return (
    <div className="px-4 py-5">
      <div className="lg:hidden flex justify-between items-center text-start font-medium text-2xl">
        <p>BTC/USDC</p>
        <button className="md:rounded-3xl rounded-md  bg-button-primary px-3 py-1 text-lg font-normal">
          Trade
        </button>
      </div>
      <div className="lg:flex lg:justify-between lg:items-center grid grid-cols-1 gap-y-3 text-lg font-normal">
        <div className="hidden md:grid grid-cols-1 gap-y-2">
          <p>Market</p>

          <div className="grid grid-cols-1 gap-y-2">
            <p>BTC/USDC</p>
            <p>BTC/USDC</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-1 grid-cols-2 pt-2 md:pt-0 gap-y-2">
          <p>Max APR</p>
          <div className="grid grid-cols-1 gap-y-2">
            <p className="text-end md:text-start">294.12%</p>
            <p className="hidden md:block">294.12%</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-1 grid-cols-2 gap-y-2">
          <p>Daily Emission</p>
          <div className="grid grid-cols-1 gap-y-2 gap-x-2 text-semantic-success">
            <div className="flex md:justify-start justify-end items-center gap-x-2">
              <p>103.80</p>
              <p>PBT</p>
            </div>
            <div className="hidden md:flex justify-start items-center gap-x-2">
              <p>103.80</p>
              <p>PBT</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-1 grid-cols-2 gap-y-2 ">
          <p>Total Position</p>
          <div className="grid grid-cols-1 gap-y-2 gap-x-2 ">
            <div className="flex md:justify-start justify-end items-center gap-x-2">
              <p>103.80</p>
              <p>BTC</p>
            </div>
            <div className="hidden md:flex  justify-start items-center gap-x-2">
              <p>103.80</p>
              <p>BTC</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-1 grid-cols-2 gap-y-2 ">
          <p>Avg. Coefficient</p>
          <div className="grid grid-cols-1 gap-y-2">
            <div className="flex md:justify-start justify-end items-center gap-x-2">
              <p className="text-start">1.23x</p>
            </div>
            <div className="hidden md:flex  justify-start items-center gap-x-2">
              <p className="text-start">1.23x</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-1 grid-cols-2 gap-y-2 ">
          <p>My Positions</p>
          <div className="grid grid-cols-1 gap-y-2">
            <div className="flex md:justify-start justify-end items-center gap-x-2">
              <p className="text-start">0</p>
              <p>USDC</p>
            </div>
            <div className="hidden md:flex  justify-start items-center gap-x-2">
              <p className="text-start">0</p>
              <p>USDC</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-1 grid-cols-2 gap-y-2 ">
          <p>Claimable Rewards</p>
          <div className="grid grid-cols-1 gap-y-2">
            <div className="flex md:justify-start justify-end items-center gap-x-2">
              <p className="text-start">103.80</p>
              <p>PBT</p>
            </div>
            <div className="hidden md:flex items-center gap-x-2">
              <p className="text-start">103.80</p>
              <p>PBT</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:grid grid-rows-2 gap-y-4 text-base font-normal">
          <button className="lg:rounded-3xl rounded-md  bg-button-primary px-2 py-1  ">
            Trade
          </button>
          <button className="lg:rounded-3xl rounded-md  bg-button-primary px-2 py-1 ">
            Trade
          </button>
        </div>
      </div>
    </div>
  );
}
