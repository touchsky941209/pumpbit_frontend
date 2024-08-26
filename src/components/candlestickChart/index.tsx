"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { createChart, ColorType } from "lightweight-charts";
import { TbCapture } from "react-icons/tb";
import { getMarketTicks } from "@/services/markets";
import { TPairInfo, TTick } from "@/lib/types";
import ButtonsDropDown from "./buttonsPopover";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import { useUtilContext } from "@/hooks";
import MarketDepthChart from "./depthgraph";
import MarketPriceChart from "./pricegraph";
import {
  Lang_Price,
  Lang_Depth
} from "@/constants/language";

interface PriceDiagramProps {
  selectedPair: TPairInfo;
}


interface MarketTick {
  t: number;
  o: string;
  h: string;
  l: string;
  c: string;
}

export const GetMaxandMinPrice = (priceList: any) => {
  const maxValue = Math.max(...priceList.map((item: any) => item.close))
  const minValue = Math.min(...priceList.map((item: any) => item.close))
  return ({
    price24High: maxValue,
    price24Low: minValue
  })
}


export default function CandleStickChart({ selectedPair }: PriceDiagramProps) {
  const { setMarketPrice, setHeaderPrice, language } = useUtilContext()
  const [isLoading, setIsloading] = useState<boolean>(true)

  const [typeOfGraph, setTypeOfGraph] = useState<string>("Price")
  const chain: string = "b_square_testnet"
  const [chartInterval, setChartInterval] = useState<string>("15m")
  const [countBack, setCountBack] = useState<number>(150)

  const [tickData, setTickData] = useState<TTick[]>([
    {
      time: 0,
      open: 0,
      high: 0,
      low: 0,
      close: 0,
    },
  ]);


  useEffect(() => {

    const fetchData = async () => {
      if (!selectedPair.market) {
        console.error("Selected pair market is not defined.");
        return;
      }

      try {
        const currentDate = new Date();
        let to = currentDate.getTime()
        let from = to - 2 * 3600 * 24 * 1000
        const response1 = await getMarketTicks(selectedPair.market, chain, chartInterval, countBack, from, to);

        const to2 = response1.data[0].t
        const from2 = to2 - 2 * 3600 * 24 * 1000
        const response2 = await getMarketTicks(selectedPair.market, chain, chartInterval, countBack, from2, to2);
        const newResponse = [...response1.data, ...response2.data]

        newResponse.sort((a, b) => a.t - b.t);

        const uniqueData = newResponse.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.t === value.t
          ))
        )
        // const data2 = response1 ? response1.data : tickData;
        const data2 = uniqueData ? uniqueData : tickData;

        const formattedTicks = data2.map((tick: MarketTick) => ({
          time: tick.t / 1000,
          open: Number(tick.o),
          high: Number(tick.h),
          low: Number(tick.l),
          close: Number(tick.c),
        }));

        const result = GetMaxandMinPrice(formattedTicks)
        setHeaderPrice(result)
        setMarketPrice(formattedTicks[formattedTicks.length - 1])
        setTickData(formattedTicks);

      } catch (err) {
      }
    };

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedPair.market, tickData]);

  const setIntervalValue = (e: any) => {
    setChartInterval(e.target.value)
  }

  useEffect(() => {
    setIsloading(false)
  }, [language])

  if (isLoading) return (
    <div>
    </div>
  )

  return (
    <div className="flex flex-col rounded-3xl border border-border bg-card backdrop-blur-lg/2">
      <div className="my-5 flex flex-row gap-x-10 px-5 text-lg font-bold">
        <button
          onClick={() => setTypeOfGraph("Price")}
        >
          {
            language === "EN" ? Lang_Price.en : Lang_Price.ch
          }
        </button>

        <button
          onClick={() => setTypeOfGraph("Depth")}
        >
          {
            language === "EN" ? Lang_Depth.en : Lang_Depth.ch
          }
        </button>
      </div>
      <hr className="border border-border  " />
      <div className=" flex justify-between py-2 px-5">
        <div className="flex flex-wrap ">
          <div className="flex gap-3 flex-wrap   items-center">
            {" "}
            <button className="bg-button-tab hover:bg-primary px-4 rounded-lg" value="1m"
              onClick={(e) => {
                setIntervalValue(e)
              }}
            >
              1m
            </button>
            <button className="bg-button-tab text-sm hover:bg-primary px-4 rounded-lg" value="5m"
              onClick={(e) => {
                setIntervalValue(e)
              }}
            >
              5m
            </button>
            <button className="bg-button-tab text-sm hover:bg-primary px-4 rounded-lg" value="15m"
              onClick={(e) => {
                setIntervalValue(e)
              }}
            >
              15m
            </button>
            <button className="bg-button-tab text-sm hover:bg-primary px-4 rounded-lg" value="20m"
              onClick={(e) => {
                setIntervalValue(e)
              }}
            >
              20m
            </button>
            <button className="bg-button-tab text-sm hover:bg-primary px-4 rounded-lg" value="1h"
              onClick={(e) => {
                setIntervalValue(e)
              }}
            >
              1H
            </button>
            <button className="bg-button-tab text-sm hover:bg-primary px-4 rounded-lg" value="4h"
              onClick={(e) => {
                setIntervalValue(e)
              }}
            >
              4H
            </button>
            <button className="bg-button-tab text-sm hover:bg-primary px-4 rounded-lg" value="1d"
              onClick={(e) => {
                setIntervalValue(e)
              }}
            >
              1D
            </button>
            <ButtonsDropDown />
            <div className="flex text-md text-text-secondary">
              {" "}
              <Image
                alt="fx"
                src={"/assets/indicator.png"}
                width={20}
                height={20}
              />{" "}
              Indicators
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <IoSettingsSharp className="text-text-secondary" />
          <TbCapture className="text-text-secondary" />
          <FaCamera className="text-text-secondary" />
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-y-5 px-6">
        <div className="flex flex-row gap-x-10">
          <p>{selectedPair.market}</p>
          <div>
            {`
             O: ${tickData.length > 0 ? tickData[tickData.length - 1].open : ""},
             H: ${tickData.length > 0 ? tickData[tickData.length - 1].high : ""}, 
             L: ${tickData.length > 0 ? tickData[tickData.length - 1].low : ""}, 
             C: ${tickData.length > 0 ? tickData[tickData.length - 1].close : ""}
             `}
          </div>
        </div>
        {
          typeOfGraph === "Price" ?
            <MarketPriceChart
              selectedPair={selectedPair}
              tickData={tickData}
            /> :
            <MarketDepthChart
              tickData={tickData}
            />
        }
      </div>
    </div>
  );
}
