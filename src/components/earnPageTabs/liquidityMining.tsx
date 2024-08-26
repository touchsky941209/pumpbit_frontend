"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogTrigger } from "../models";
import AddLiquidityModal from "../models/addLiquidityModal";
import PositionHistoryCard from "./positionHistoryCard";
import { cn } from "@/lib/utils";
import { useUtilContext } from "@/hooks";
import { Lang_Add } from "@/constants/language";
import { useWeb3 } from "@/hooks";
import { toInt } from "@/utils/etcfunction";

type TableRowProps = {
  pool: string;
  maxAPR: number;
  feeIncome: number;
  dailyEmission: number;
  totalLiquidity: number;
  myLiquidity: number;
  claimableRewards: number;
  index: number;
  isOpen: boolean;
  toggleAccordion: (index: number) => void;
};


type TableRowType = {
  pool: string;
  maxAPR: number;
  feeIncome: number;
  dailyEmission: number;
  totalLiquidity: number;
  myLiquidity: number;
  claimableRewards: number;
  index: number;
  isOpen: boolean;
  toggleAccordion: (index: number) => void;
  liquidityIndex: number;
};

export const TableRow = (props: TableRowType) => {
  const { language } = useUtilContext()
  const { positionRouterContract, account, chainId } = useWeb3()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [expanded, setExpanded] = useState<boolean>(false);
  const [liquidityData, setLiquidityData] = useState<any[]>([])
  const [myLiquidity, setMyLiquidity] = useState<number>(0)
  const [totalLiquidity, setTotalLiquidity] = useState<number>(0)
  const [isVisibleModel, setIsVisibleModal] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(false)
  }, [language])

  const GetLiquidityPosition = async () => {
    try {
      const liquidityIndex = await positionRouterContract.methods.increaseLiquidityPositionIndexNext().call()

      let _result: any[] = []
      let _totalPoolLiquidity: number = 0
      let _myPoolLiquidity: number = 0
      console.log("idx =>", liquidityIndex)

      for (let i = 0; i < liquidityIndex; i++) {
        const result = await positionRouterContract.methods.increaseLiquidityPositionRequests(i).call()
        console.log("Result =>", i, " =>", result)
        _totalPoolLiquidity = _totalPoolLiquidity + toInt(Number(result.liquidityDelta), chainId)

        if (account === result.account)
          _myPoolLiquidity = _myPoolLiquidity + toInt(Number(result.liquidityDelta), chainId)

        if (result.liquidityDelta != 0)
          _result.push(result)
      }
      setLiquidityData(_result)
      setMyLiquidity(_myPoolLiquidity)
      setTotalLiquidity(_totalPoolLiquidity)
    } catch (err) {

    }

  }

  useEffect(() => {
    GetLiquidityPosition()
  }, [])

  useEffect(() => {
    console.log("Visible =>", isVisibleModel)
  }, [isVisibleModel])

  if (isLoading)
    return (
      <div>
        Loading ....
      </div>
    )
  return (
    <>
      {" "}
      <tr className="w-full [&_td]:min-w-11  [&_td]:py-5 px-12">
        <td align="center">
          {
            localStorage.getItem("pair") === null ? "BTC/USDC" : localStorage.getItem("pair")
          }
        </td>
        <td align="center" className="text-semantic-success">
          <p>Coming soon</p>
        </td>
        <td align="center">Coming soon</td>
        <td align="center">{totalLiquidity} USDC</td>
        <td align="center">{myLiquidity} USDC</td>

        <td align="center">
          <button className="px-2 py-1" onClick={() => {
            setExpanded(!expanded)
          }}>
            <Image
              src="/assets/arrow_drop_down.png"
              alt="pool image"
              width={24}
              height={24}
            />
          </button>
        </td>
        <td align="center">
          <Dialog>
            <DialogTrigger asChild>
              <button className="lg:rounded-lg rounded-md bg-button-primary px-2 py-1"
              >
                {language === "EN" ? Lang_Add.en : Lang_Add.ch}
              </button>
            </DialogTrigger>
            <AddLiquidityModal />

          </Dialog>
        </td>
      </tr>
      <tr>
        <td colSpan={9}>
          <div
            className={cn("transition-all duration-300 overflow-hidden", {
              "max-h-screen ": expanded,
              "max-h-0 ": !expanded,
            })}
          >
            {/* <PositionHistoryCard
              liquidityData={liquidityData}
            /> */}
            {
              liquidityData.map((item, idx) => (
                <PositionHistoryCard
                  key={idx}
                  liquidityData={liquidityData[idx]}
                  index={idx}
                />
              ))
            }

          </div>
        </td>
      </tr>
    </>
  );
};

type TableTitleProps = {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
};

export const TableTitles = (props: TableTitleProps) => {
  return (
    <tr className=" [&_th]:min-w-11  [&_th]:p-2 border-b border-solid border-[#ffffff33]">
      <th>{props.title1}</th>
      <th>{props.title2}</th>
      <th>{props.title3}</th>
      <th>{props.title4}</th>
      <th>{props.title5}</th>
    </tr>
  );
};

type TableProps = {
  data: Omit<TableRowProps, "index" | "isOpen" | "toggleAccordion">[];
  title: TableTitleProps[];
};

export const LMiningAndPFiler = (props: TableProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  if (!Array.isArray(props.data) || props.data.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center text-base text-[#FFF] font-normal lg:w-full">
      <div className="w-full rounded-2xl">
        <div>
          <table className="w-full">
            <thead>
              {props.title.map((items, index) => (
                <TableTitles {...items} key={index} />
              ))}
            </thead>
            <tbody>
              {props.data.map((item, index) => (
                <TableRow
                  {...item}
                  key={index}
                  index={index}
                  isOpen={openIndex === index}
                  toggleAccordion={toggleAccordion}
                  liquidityIndex={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
