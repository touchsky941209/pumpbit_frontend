import { useState, useEffect, useRef } from "react"
import { TPairInfo, TTick } from "@/lib/types";
import { createChart, ColorType } from "lightweight-charts";

interface PriceDiagramProps {
    selectedPair: TPairInfo;
    tickData: TTick[]
}

interface MarketTick {
    t: number;
    o: string;
    h: string;
    l: string;
    c: string;
}



const MarketPriceChart = ({ selectedPair, tickData }: PriceDiagramProps) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const candlestickSeriesRef = useRef<any>(null);
    const chain: string = "b_square_testnet"


    useEffect(() => {
        let setted = false;
        const drawGraph = () => {
            if (!selectedPair.market) {
                console.error("Selected pair market is not defined.");
                return;
            }

            if (candlestickSeriesRef.current === null) {
                if (chartContainerRef.current) {
                    const chart = createChart(chartContainerRef.current, {
                        width: chartContainerRef.current.clientWidth,
                        height: 300,
                        layout: {
                            textColor: "#FEFEFE",
                            background: { type: ColorType.Solid, color: "transparent" },
                        },
                        grid: {
                            vertLines: {
                                color: "rgba(197, 203, 206, 0.5)",
                            },
                            horzLines: {
                                color: "rgba(197, 203, 206, 0.5)",
                            },
                        },
                        rightPriceScale: {
                            borderColor: "rgba(197, 203, 206, 0.8)",
                        },
                        timeScale: {
                            borderColor: "rgba(197, 203, 206, 0.8)",
                            timeVisible: true,
                            tickMarkFormatter: (time: any) => {
                                const date = new Date(time * 1000); 
                                const options: any = {
                                    day: '2-digit',
                                    // month: 'short',
                                    // year: '2-digit',
                                    // hour: '2-digit',
                                    // minute: '2-digit',
                                    hour12: false, // Use 24-hour format
                                };
                                return date.toLocaleString('en-GB', options);
                            },
                        },
                    });
                    candlestickSeriesRef.current = chart.addCandlestickSeries({
                        upColor: "#13DF87",
                        downColor: "#EA4161",
                        borderVisible: false,
                    });
                    if (tickData.length > 1) {
                        candlestickSeriesRef.current.setData(tickData);
                    }
                    chart.timeScale().fitContent();
                    const handleResize = () => {
                        if (chartContainerRef.current) {
                            chart.applyOptions({
                                width: chartContainerRef.current.clientWidth,
                            });
                        }
                    };

                    window.addEventListener("resize", handleResize);
                    return () => {
                        window.removeEventListener("resize", handleResize);
                        chart.remove();
                    };
                }
            } else {
                if (tickData.length > 1) {
                    if (!setted) {
                        candlestickSeriesRef.current.setData(tickData);
                        setted = true;
                    }
                    else {
                        candlestickSeriesRef.current.update(tickData[tickData.length - 1]);
                    }
                }
            }
        }

        const interval = setInterval(() => {
            drawGraph();
        }, 1000);

        return () => clearInterval(interval);

    }, [selectedPair.market, tickData]);


    return (
        <div
            ref={chartContainerRef}
            style={{ width: "100%", height: "300px" }}
        />
    )
}

export default MarketPriceChart
