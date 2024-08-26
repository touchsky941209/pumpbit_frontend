"use client";

export default function HistoryCard() {
  return (
    <>
      <div className="w-full p-7">
        <div className="w-full flex justify-between">
          <div className="flex gap-10 items-baseline ">
            <h2 className="font-medium sm:text-2xl text-xl">BTC/USDC</h2>
            <p className="font-medium sm:text-xl text-base text-semantic-success">
              Long 50x
            </p>
          </div>
          <div>
            <p>Closed</p>
          </div>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 py-3">
          <div className="">
            <p className="text-text-secondary text-lg">
              Time opened{" "}
              <span className="block sm:inline text-white">
                01/23/2024 17:35:20
              </span>
            </p>
          </div>
          <div className="">
            <p className="text-text-secondary text-lg">
              Max size{" "}
              <span className="block sm:inline text-white"> 0.471 BTC</span>
            </p>
          </div>

          <div className="">
            <p className="text-text-secondary text-lg">
              Time closed{" "}
              <span className="block sm:inline text-white">
                01/28/2024 18:15:18
              </span>
            </p>
          </div>
          <div>
            <p className="text-text-secondary text-lg">
              Entry Price{" "}
              <span className="block sm:inline text-semantic-success">
                {" "}
                42,030.29
              </span>
            </p>
          </div>
          <div>
            <p className="text-text-secondary text-lg">
              Realized PnL{" "}
              <span className="block sm:inline text-white">
                +100.83 (+11.32%)
              </span>
            </p>
          </div>
          <div>
            <p className="text-text-secondary text-lg">
              Closed{" "}
              <span className="block sm:inline text-white">0.471 BTC</span>
            </p>
          </div>
          <div>
            <p className="text-text-secondary text-lg">
              Exit price{" "}
              <span className="block sm:inline text-white">43,973.59</span>
            </p>
          </div>
          <div>
            <p className="text-text-secondary text-lg">
              Net Funding{" "}
              <span className="block sm:inline text-semantic-danger">
                -1.13
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
