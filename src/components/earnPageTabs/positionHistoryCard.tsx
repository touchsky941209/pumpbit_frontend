"use client";

import { useEffect, useState } from "react";
import { TabsList, Tabs, TabsTrigger, TabsContent } from "../ui/tabs";
import PositionMiningCard from "./positionMiningCard";
import { useToast } from "../ui/toast/use-toast";
import { useWeb3 } from "@/hooks";
import { toInt } from "@/utils/etcfunction";

export default function PositionHistoryCard({ liquidityData, index }: any) {

  const { toast } = useToast()
  const { account, positionRouterContract, web3, chainId } = useWeb3()
  const [liquidity, setLiquidity] = useState<any>(0)
  const [margin, setMargin] = useState<any>(0)
  const [liquidityAccount, setLiquidityAccount] = useState<string>("")

  useEffect(() => {

    if (liquidityData === undefined) return

    console.log("Prop => ", liquidityData)
    setMargin(toInt(Number(liquidityData.marginDelta), chainId))
    setLiquidity(toInt(Number(liquidityData.liquidityDelta), chainId))
    setLiquidityAccount(String(liquidityData.account))

  }, [liquidityData])

  useEffect(() => {
    console.log("Margin =>", margin);
    console.log("Liquidity =>", liquidity);
    console.log("LiquidityAcc =>", liquidityAccount);
  }, [margin, liquidity, liquidityAccount])

  const cancelLiquidityPosition = async () => {
    console.log("Index1 =>", index)
    try {
      const gasPrice = await web3.eth.getGasPrice()
      await positionRouterContract.methods.cancelIncreaseLiquidityPosition(index, account).send({ from: account, gasPrice: gasPrice })
      const { id, dismiss } = toast({
        title: "Success",
        description: "Canceled Success"
      })
    } catch (err) {

      const { id, dismiss } = toast({
        title: "Failed",
        description: "Cancel Failed"
      })

    }
  }

  return (
    <div className="px-9 py-5 text-gray-500 font-normal text-lg">
      <hr className="py-3 border-gray-700" />
      <div className="flex space-x-4 text-lg font-bold">
        <div className="text-primary">Position</div>
        <div className="">History</div>
      </div>

      <div className="grid grid-cols-6 place-items-start mt-4 text-center text-sm">
        <div>
          <div className="">Liquidity</div>
          {
            liquidityAccount === account &&
            <div className="text-white pt-3">{liquidity}</div>
          }
        </div>
        <div>
          <div className="">Leverage</div>
          {
            liquidityAccount === account &&
            <div className="text-white pt-3">{liquidity / margin}x</div>
          }
        </div>
        <div>
          <div className="">Unrealized PnL</div>
          {
            liquidityAccount === account &&
            <div className="text-semantic-success pt-3">120.20</div>
          }
        </div>
        <div>
          <div className="text-gray-500">Risk</div>
          {
            liquidityAccount === account &&
            <div className="flex items-center justify-center pt-3 text-white">
              93.95%
            </div>
          }
        </div>
        <div>
          <div className="text-gray-500">Margin</div>
          {
            liquidityAccount === account &&
            <div className="text-white pt-3">{margin} USDC</div>
          }
        </div>
        <div className="flex items-center justify-center">

          {
            liquidityAccount === account &&
            <button className={`${account === liquidityAccount ? "text-[white]" : ""} px-5 py-2 border rounded-lg`}
              disabled={account === liquidityAccount ? false : true}
              onClick={() => cancelLiquidityPosition()}
            >
              Remove
            </button>
          }
        </div>
      </div>
    </div>
  );
}
