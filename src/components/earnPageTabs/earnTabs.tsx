"use client";
import React, { useEffect, useState } from "react";
import { TabsList, Tabs, TabsTrigger, TabsContent } from "../ui/tabs";
import { PositionMiningCard } from "./positionMiningCardRe";
import { LMiningAndPFiler } from "./liquidityMining";
import { useUtilContext } from "@/hooks";
import { Lang_24hFee_Income, Lang_LiquidityMining, Lang_MaxAPR, Lang_MyLiquidity, Lang_MyPosition, Lang_Pool, Lang_PositionMining, Lang_TotalLiquidity, Lang_TotalPosition } from "@/constants/language";

const EarnTabs = () => {

  const { language, marketPair } = useUtilContext()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [liquidityData, setLiquidityData] = useState<any>([
    {
      pool: "ETH/USDC123",
      maxAPR: 294.12,
      feeIncome: 1.5,
      dailyEmission: 893.23,
      totalLiquidity: 1000,
      myLiquidity: 1000,
      claimableRewards: 1000,
    }
  ])

  const [positionMiningData, setPositionMiningData] = useState<any>([
    {
      pool: "BTC/USD123C",
      maxApr: 294.12,
      totalPosition: 103,
      myPosition: "Comming soon",
    }
  ])


  useEffect(() => {
    let pair: string = ""
    const _pair = localStorage.getItem('pair')
    if (_pair == null)
      pair = "BTC/USDC"
    else pair = _pair
    setPositionMiningData([
      {
        pool: pair,
        maxApr: 294.12,
        totalPosition: 103,
        myPosition: "Comming soon",
      }
    ])
  }, [marketPair])


  useEffect(() => {
    setIsLoading(false)
  }, [language])


  if (isLoading) return (
    <div>
      Loading ...
    </div>
  )



  const PositionMiningTitle = [
    {
      title1: `${language === 'EN' ? Lang_Pool.en : Lang_Pool.ch}`,
      title2: `${language === "EN" ? Lang_MaxAPR.en : Lang_MaxAPR.ch}`,
      title3: `${language === "EN" ? Lang_TotalPosition.en : Lang_TotalPosition.ch}`,
      title4: `${language === "EN" ? Lang_MyPosition.en : Lang_MyPosition.ch}`,
    },
  ];

  const Titles = [
    {
      title1: `${language === 'EN' ? Lang_Pool.en : Lang_Pool.ch}`,
      title2: `${language === "EN" ? Lang_MaxAPR.en : Lang_MaxAPR.ch}`,
      title3: `${language === "EN" ? Lang_24hFee_Income.en : Lang_24hFee_Income.ch}`,
      title4: `${language === "EN" ? Lang_TotalLiquidity.en : Lang_TotalLiquidity.ch}`,
      title5: `${language === "EN" ? Lang_MyLiquidity.en : Lang_MyLiquidity.ch}`,
    },
  ];

  if (isLoading) return (
    <div>
      Loading ...
    </div>
  )


  return (
    <div>
      <div className="rounded-3xl backdrop-blur-lg/2 bg-card border border-border ">
        <Tabs defaultValue="Position Mining">
          <TabsList className="py-5 lg:px-7  px-3 lg:overflow-hidden overflow-x-scroll flex justify-between items-center border-b border-border rounded-none">
            <div className="flex justify-center items-center gap-x-3 lg:gap-x-5">
              {/* <TabsTrigger value="Staking">Staking</TabsTrigger> */}
              <TabsTrigger value="Position Mining">
                {language === 'EN' ? Lang_PositionMining.en : Lang_PositionMining.ch}
              </TabsTrigger>
              <TabsTrigger value="Liquidity Mining">
                {
                  language === "EN" ? Lang_LiquidityMining.en : Lang_LiquidityMining.ch
                }
              </TabsTrigger>
            </div>
            <div>
              <div className="hidden lg:flex justify-end  items-center w-full font-bold text-xl">
              </div>
            </div>
          </TabsList>

          <TabsContent value="Position Mining">
            {
              PositionMiningTitle.map((it, idx) => (
                <PositionMiningCard
                  key={idx}
                  title={PositionMiningTitle}
                  data={positionMiningData} />
              ))
            }
          </TabsContent>
          <TabsContent value="Liquidity Mining">
            <LMiningAndPFiler
              title={Titles}
              data={liquidityData}
            />
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
};

export default EarnTabs;
