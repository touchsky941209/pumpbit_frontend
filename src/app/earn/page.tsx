"use client"
import DashboardCard from "@/components/dashboardCard";
import EarnTabs from "@/components/earnPageTabs/earnTabs";
import StatisticsCard from "@/components/statisticsCard";
import { Lang_EASYREWARDSMADESIMPLE, Lang_EarnrewardsfromtradingfeesandPBTmining, Lang_earn } from "@/constants/language";
import { useUtilContext } from "@/hooks";
import { useEffect, useState } from "react";

export default function Earn() {
  const { language } = useUtilContext()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(false)
  }, [language])

  if (isLoading) return (
    <div>
      Loading ...
    </div>
  )
  return (
    <div className=" pt-28 px-1  min-h-screen">
      <div className="flex items-center justify-center  pt-12 font-Raleway">
        <div className="text-center font-ArchivoBlack font-normal custom-text">
          <h1 className=" font-ArchivoBlack lg:text-8xl text-7xl uppercase  ">
            {language === "EN" ? Lang_earn.en : Lang_earn.ch}
          </h1>
          <p className="lg:text-6xl text-4xl  uppercase py-5  ">
            {
              language === "EN" ? Lang_EASYREWARDSMADESIMPLE.en : Lang_EASYREWARDSMADESIMPLE.ch
            }
          </p>
          <p className="lg:text-2xl text-lg font-light font-Raleway text-text">
            {
              language === "EN" ? Lang_EarnrewardsfromtradingfeesandPBTmining.en : Lang_EarnrewardsfromtradingfeesandPBTmining.ch
            }
          </p>
        </div>
      </div>
      <div className="lg:px-10 px-3 ">
        <div className="pt-7">
          <EarnTabs />
        </div>
      </div>
    </div>
  );
}
