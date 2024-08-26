"use client";
import React, { useEffect, useState } from "react";
import PositionsCard from "./positionsCard";
import OrdersCard from "./ordersCard";
import HistoryCard from "./historyCard";
import { TabsList, Tabs, TabsTrigger, TabsContent } from "../ui/tabs";
import {
  getPosition,
  getMarketInfo,
  getOrders,
  getHistories
} from '@/services/markets'
import { chain, market } from "@/constants/index"
import { useWeb3, useUtilContext } from "@/hooks";
import {
  Lang_Orders,
  Lang_Positions,
  Lang_History
} from "@/constants/language";

const TradeTabs = () => {
  const { routerContract, account, orderBookContract } = useWeb3()
  const { language } = useUtilContext()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [positions, setPositions] = useState<any>([])
  const [orders, setOrders] = useState<any>([])
  const [histories, setHistorys] = useState<any>([])

  const init = async () => {
    let accessToken: string = localStorage.getItem("accessToken") as string
    try {
      const _positions = await getPosition(accessToken, market, chain)
      const _orders = await getOrders(accessToken, market, chain)
      const _histories = await getHistories(accessToken, market, chain)

      setPositions(_positions.data.positions)
      setOrders(_orders.data.orders)
      setOrders(_histories.data.histories)
    } catch (err) {

    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      init()
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const setOrder = async () => {
    try {
      const orders = await orderBookContract.methods.increaseOrders(1).call()
      console.log("Orders => ", orders)
    } catch (err) {

    }
  }

  useEffect(() => {
    setIsLoading(false)
  }, [language])

  if (isLoading) return (<></>)

  return (
    <div>
      <div className="rounded-3xl backdrop-blur-lg/2 bg-card border border-border ">
        <Tabs defaultValue="positions">
          <TabsList className="py-5 px-7 border-b border-border rounded-none">
            <TabsTrigger value="positions">
              {
                language === "EN" ? Lang_Positions.en : Lang_Positions.ch
              }
            </TabsTrigger>
            <TabsTrigger value="orders">
              {
                language === "EN" ? Lang_Orders.en : Lang_Orders.ch
              }
            </TabsTrigger>
            <TabsTrigger value="history">
              {
                language === "EN" ? Lang_History.en : Lang_History.ch
              }
            </TabsTrigger>
          </TabsList>
          <TabsContent value="positions">
            <div className="divide-y divide-dashed divide-border">
              {
                positions.length > 0 ?
                  positions.map((item: any, idx: any) => (
                    <PositionsCard key={idx} position={item} />
                  )) : <></>
              }
            </div>
          </TabsContent>
          <TabsContent value="orders">
            <div>
              {
                orders.map((item: any, idx: any) => (
                  <OrdersCard key={idx} />
                ))
              }
            </div>
          </TabsContent>
          <TabsContent value="history">
            {" "}
            <div className="">
              {
                histories.map((item: any, idx: any) => (
                  <HistoryCard key={idx} />
                ))
              }
            </div>
          </TabsContent>
        </Tabs>
      </div>


    </div>
  );
};

export default TradeTabs;
