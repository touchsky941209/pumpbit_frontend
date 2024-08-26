"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogTrigger } from "../models";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useUtilContext } from "@/hooks";
import { Lang_trade } from "@/constants/language";

type TableRowProps = {
    pool: string;
    maxApr: number;
    totalPosition: number;
    myPosition: string;
    index: number;
    isOpen: boolean;
    toggleAccordion: (index: number) => void;
};

export const TableRow = (props: TableRowProps) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const { language } = useUtilContext()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setIsLoading(false)
    }, [language])

    if (isLoading)
        return (
            <div>
                Loading ...
            </div>
        )
    return (
        <>
            {" "}
            <tr className="w-full [&_td]:min-w-11  [&_td]:py-5 px-12">
                <td align="center">{props.pool}</td>
                <td align="center">Coming soon</td>
                <td align="center">Coming soon</td>
                <td align="center">Coming soon</td>

                {/* <td align="center">
                    <button className="px-2 py-1" onClick={() => setExpanded(!expanded)}>
                        <Image
                            src="/assets/arrow_drop_down.png"
                            alt="pool image"
                            width={24}
                            height={24}
                        />
                    </button>
                </td> */}
                <td align="center">
                    <button className="lg:rounded-lg rounded-md bg-button-primary px-2 py-1">
                        <Link href="/trade" >
                            {language === "EN" ? Lang_trade.en : Lang_trade.ch}
                        </Link>
                    </button>
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
};

export const TableTitles = (props: TableTitleProps) => {
    return (
        <tr className=" [&_th]:min-w-11  [&_th]:p-2 border-b border-solid border-[#ffffff33]">
            <th>{props.title1}</th>
            <th>{props.title2}</th>
            <th>{props.title3}</th>
            <th>{props.title4}</th>
        </tr>
    );
};

type TableProps = {
    data: Omit<TableRowProps, "index" | "isOpen" | "toggleAccordion">[];
    title: TableTitleProps[];
};

export const PositionMiningCard = (props: TableProps) => {
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
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
