"use client"
import OrderDiagram from "@/components/OrderDiagram/OrderDiagram";
import CandleStickChart from "@/components/candlestickChart";
import Tabs from "@/components/table/tabs";
import TradeHeader from "@/components/tradeHeader";
import { useEffect, useState } from "react";
import { useWeb3 } from "@/hooks";
import { useUtilContext } from "@/hooks";

interface OrderDiagramProps {
  selectedPair: {
    quote: "BTC";
    base: "btc";
  };
}

export default function Trade() {
  const { marketPair } = useUtilContext()
  const [market, setMarket] = useState<string>("")
  const [base, setBase] = useState<string>("")
  const [quote, setQuote] = useState<string>("")
  useEffect(() => {
    console.log("MarketPair = >", marketPair)

    if (marketPair == "btcusdt") {
      setBase("BTC")
      setQuote("USDC")
    }

    if (marketPair == "ethusdt") {
      setBase("ETH")
      setQuote("USDC")
    }

    setMarket(marketPair)
  }, [marketPair])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-28 px-1 md:px-10 min-h-screen">
      <div className="col-span-2 flex flex-col gap-3">
        <div>
          <TradeHeader />
        </div>
        <div>
          <CandleStickChart
            selectedPair={{
              market: market,
              base: base,
              quote: quote,
            }}
          />
        </div>
        <div>
          <Tabs />
        </div>
      </div>
      <div className="col-span-1">
        <OrderDiagram
          selectedPair={{
            base: base,
            quote: quote
          }}
        />
      </div>
    </div>
  );
}
