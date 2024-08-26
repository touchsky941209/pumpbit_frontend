"use client"
import { MagicMenu } from "./ui/dropdown";
import { useUtilContext } from "@/hooks";
import { useEffect, useState } from "react";
import { getMarketInfo } from "@/services/markets";
import { chain, market } from "@/constants/index"
import {
  Lang_24HHigh,
  Lang_24Low,
  Lang_24hChange,
  Lang_FundingCountdown
} from "@/constants/language"

export default function TradeHeader() {

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { marketPrice, headerPrice, language, marketOrderType } = useUtilContext()
  const [changeDay, setChangeDay] = useState<number>(0)
  const [funding, setFunding] = useState<number>(0)
  const [countTime, setCountTime] = useState<any>({ m: 60, s: 0 })
  const init = async () => {
    const result = await getMarketInfo(market, chain)
    const _changeDay = Number(result.change_in_24h)
    setChangeDay(_changeDay)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCountTime((prev: any) => {
        if (prev.m === 0 && prev.s === 0)
          return { m: 60, s: 0 }
        const newTime = prev.m * 60 + prev.s - 1
        const minute = Math.floor(newTime / 60)
        const second = newTime % 60
        return { m: minute, s: second }
      })
      init();
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    setIsLoading(false)
  }, [language])

  useEffect(() => {
    marketOrderType === "Long" ? setFunding(-0.0022) : setFunding(0.002)
  }, [marketOrderType])

  if (isLoading) return (
    <div>Loading</div>
  )

  return (
    <div className="flex flex-col justify-around xl:flex-row py-4 backdrop-blur-lg/2 px-2 bg-card border border-border rounded-3xl">
      <div className="flex justify-between items-center sm:gap-12 gap-2">
        <div className="flex justify-between">
          <MagicMenu />
        </div>
        <div>
          <p
            className={`font-bold sm:text-4xl text-sm ${changeDay < 0 ? "text-red-600" : "text-semantic-success"}`}
          >
            {marketPrice ? String(Number(marketPrice.close).toFixed(2)) : "0"}
          </p>
        </div>
        <div>
          <p className="">
            <span className="text-text-secondary hidden lg:block">
              {
                language === "EN" ? Lang_24hChange.en : Lang_24hChange.ch
              }
            </span>{" "}
            <span
              className={`block text-lg ${changeDay < 0 ? "text-red-600" : "text-semantic-success"}`}
            >
              {changeDay.toFixed(2) + " %"}
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-between sm:gap-12 gap-2">
        <div>
          <p className="text-text-secondary">
            {
              language === "EN" ? Lang_24HHigh.en : Lang_24HHigh.ch
            }
            <span className="block text-white text-lg">{Number(headerPrice.price24High).toFixed(2)}</span>
          </p>
        </div>
        <div>
          <p className="text-text-secondary">
            {
              language === "EN" ? Lang_24Low.en : Lang_24Low.ch
            }
            <span className="block text-white text-lg">{Number(headerPrice.price24Low).toFixed(2)}</span>
          </p>
        </div>
        <div>
          <p className="text-text-secondary">
            {
              language === "EN" ? Lang_FundingCountdown.en : Lang_FundingCountdown.ch
            }
          </p>
          <p>
            <span className=" text-semantic-warning">{funding}</span>
            <span className=" text-white text-lg">/ {countTime.m + ":" + countTime.s}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
