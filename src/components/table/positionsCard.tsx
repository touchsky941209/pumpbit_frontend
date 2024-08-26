"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogTrigger } from "../models";
import AddTpslModal from "../models/AddTpslModal";
import TpslSettingModal from "../models/tpslSettingModal";

export default function PositionsCard(props: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [positions, setPositions] = useState<any>({
    market: "",
    market_display: "",
    margin: "",
    entry_price: "",
    net_funding: "0",
    liquidation_price: "",
    leverage: 0,
    side: "",
    size: 0,
    status: "",
    unrealized_pnl: "0"
  })

  useEffect(() => {

    setPositions(props.position)
  }, [props])

  return (
    <>
      <div className="w-full p-7">
        <div className="sm:flex sm:justify-start items-baseline gap-10 grid grid-cols-3">
          <h2 className="font-medium sm:text-2xl text-xl">{positions.market_display}</h2>
          <p className="font-medium sm:text-xl text-base text-semantic-success">
            {
              positions.side === "long" ? "Long" : positions.side === "short" ? "Short" : "" + " "
            }
            {
              " " + positions.leverage + "x"
            }
          </p>
          <p className="font-medium sm:text-xl text-base ">63.95%</p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 py-3">
          <div className="">
            <p className="text-text-secondary text-lg">
              Size <span className="block sm:inline text-white">{positions.size} BTC</span>
            </p>
          </div>
          <div>
            <p className="text-text-secondary text-lg">
              Entry Price{" "}
              <span className="block sm:inline text-white">{positions.entry_price}</span>
            </p>
          </div>
          <div>
            <p className="text-text-secondary ">
              Unrealized PNL{" "}
              <span className="block sm:inline text-semantic-success md:text-lg text-xs">
                {positions.unrealized_pnl}
              </span>
            </p>
          </div>
          <div className="flex col-span-full justify-end gap-2 order-last lg:order-none lg:col-span-1 ">
            <Dialog>
              <DialogTrigger asChild>
                <button className="px-4 py-1 rounded-full border-2">
                  TP/SL
                </button>
              </DialogTrigger>
              {<TpslSettingModal setIsModalOpen={setIsModalOpen} />}
            </Dialog>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              {<AddTpslModal />}
            </Dialog>
          </div>
          <div>
            <p className="text-text-secondary text-lg">
              Margin{" "}
              <span className="block sm:inline text-white">{positions.margin} USDC</span>
            </p>
          </div>
          <div>
            <p className="text-text-secondary text-lg">
              Liq. Price{" "}
              <span className="block sm:inline text-white">{positions.liquidation_price}</span>
            </p>
          </div>
          <div>
            <p className="text-text-secondary text-lg">
              Net Funcding{" "}
              <span className="block sm:inline text-semantic-danger">
                {positions.net_funding}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
