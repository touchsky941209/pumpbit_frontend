"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import WalletButton from "@/components/walletButton";
import { RxCross1 } from "react-icons/rx";
import { AiFillCaretRight } from "react-icons/ai";
import SettingMobileMenu from "@/components/header/settingMobileMenu";
import LanguageMobileMenu from "@/components/header/languageMobileMenu";
import { MenuMore } from "./menuMore";
import { LanguageMenu } from "./language";
import { ChainMenu } from "./chainMenu";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { usePathname } from "next/navigation";
import { useUtilContext } from "@/hooks";
import {
  Lang_trade,
  Lang_earn
} from "@/constants/language";
import { useWeb3 } from "@/hooks";
import {
  b2testnetChainId,
  ailayertestnetChainId,
  bevmtestnetChainId
} from "@/constants";

export default function Header() {
  const pathname = usePathname();
  const { language } = useUtilContext()
  const { chainId, faucetContract, account, web3 } = useWeb3()
  const [currentAccount, setCurrentAccount] = useState<any>()
  const [chain, setChain] = useState<string>("b2")

  useEffect(() => {
    if (chainId === ailayertestnetChainId)
      setChain("ailayer")

    if (chainId === b2testnetChainId)
      setChain("b2")

    if (chainId === bevmtestnetChainId)
      setChain("BEVM")

  }, [chainId])

  useEffect(() => {
    console.log("Chain =>", chain)
  }, [chain])

  const [paths, setPaths] = useState<any>([
    { name: "", link: "/trade" },
    { name: "", link: "/earn" },
  ])

  useEffect(() => {

    console.log("Language => ", language)

    setPaths([
      { name: language === "EN" ? Lang_trade.en : Lang_trade.ch, link: "/trade" },
      { name: language === "EN" ? Lang_earn.en : Lang_earn.ch, link: "/earn" },
    ])
  }, [language])

  useEffect(() => {
    setCurrentAccount(account)
  }, [account])


  const [open, setOpen] = useState(false);

  const airDropToken = async () => {
    try {
      const gasPrice = await web3.eth.getGasPrice()
      await faucetContract.methods.claimTokens().send({ from: account, gasPrice: gasPrice })
      console.log("Airdrop is success")
    } catch (err) {
      console.log("Airdopr is failed", err)
    }
  }

  return (
    <section className="w-full fixed top-0 left-0">
      <div className="flex gap-x-10 md:gap-x-3 items-center relative  md:justify-between   py-4 md:px-10 pl-2">
        <div
          className="cursor-pointer flex items-center     "
        >
          <Image
            className="w-36 lg:w-44"
            src={"/assets/Logo_White.png"}
            width={300}
            height={60}
            alt="logo"
          />

          <div className=" py-6 md:flex md:pl-4 lg:pl-48 hidden ">
            {paths.map((path: any) => (
              <div key={path.name}>
                <div className="  text-[#b1b6be] active:text-white   visited:text-white  flex justify-between  gap-y-2 px-3 text-xl   ">
                  {" "}
                  <a
                    href={path.link}
                    className={`${pathname === path.link ? "text-white" : "text-[#b1b6be]"
                      }`}
                  >
                    {path.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Popover>
          <PopoverTrigger className="text-3xl absolute right-2 top-5   cursor-pointer md:hidden">
            <GiHamburgerMenu />
          </PopoverTrigger>
          <PopoverContent className="w-screen border-none -translate-y-20 ">
            <div
              className={`md:items-center md:pb-0 fixed bg-gradient-bg  z-10 left-0 w-full md:w-auto md:hidden  transition-all duration-500 ease-in`}
            >
              <div className=" flex md:hidden justify-between  items-center px-3 pt-8 ">
                <Image
                  className="w-28"
                  src={"/assets/Logo_White.png"}
                  width={300}
                  height={60}
                  alt="logo"
                />
                <PopoverClose>
                  <RxCross1 className=" text-xl text-white" />
                </PopoverClose>
              </div>
              <hr className=" mt-6" />
              <div className=" my-8 flex flex-col md:flex-row gap-y-4">
                {paths.map((path: any) => (
                  <div key={path.name}>
                    <div className=" flex justify-between gap-y-2 px-3 text-xl  ">
                      {" "}
                      <a
                        href={path.link}
                        className={`${pathname === path.link
                          ? "text-white"
                          : "text-[#b1b6be]"
                          }`}
                      >
                        {path.name}
                      </a>
                      <AiFillCaretRight className=" md:hidden" />
                    </div>
                  </div>
                ))}
              </div>

              <hr className="md:hidden" />
              <div className="md:hidden ">

                <SettingMobileMenu />
              </div>

              <div className="md:hidden ">
                <LanguageMobileMenu />
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <div className=" flex gap-x-2 ">

          <button
            className={`${currentAccount === undefined ? "hidden" : "block"} flex justify-center items-center rounded-[60px] w-[150px] h-[45px] text-[20px] bg-[#3d3a5d] gap-3`}
            onClick={() => airDropToken()}
          >
            <Image
              src={`${"/assets/Btc.png"}`}
              width={30}
              height={30}
              alt="FaucetLogo" />
            Faucet
          </button>

          <button
            className={`${chain === "ailayer" ? "hidden" : ""}   ${currentAccount === undefined ? "hidden" : "block"} flex justify-center items-center rounded-[60px] w-[150px] h-[45px] text-[20px] bg-[#3d3a5d] gap-3`}
            onClick={() => {
              let faucetUrl: string = ""
              console.log("Chain =>", chain)
              if (chain === 'b2')
                faucetUrl = "https://www.bsquared.network/faucet/"
              else if (chain === "BEVM")
                faucetUrl = "https://bevm-testnet-faucet-alpha.vercel.app/"
              window.open(faucetUrl, '_blank');
            }}
          >
            <Image
              src={`${chain === "ailayer" ? "/assets/icons/ailayer.svg" :
                chain === "b2" ? "/assets/icons/b2.svg" : "/assets/bevm.png"
                }`}
              width={30}
              height={30}
              alt="FaucetLogo" />
            Faucet
          </button>
          <div className="flex gap-x-2 items-center pr-10 md:flex-row-reverse">
            {/* <ChainMenu /> */}

            <ConnectButton />
          </div>
          <div className="hidden md:flex gap-x-4 items-center ">
            <LanguageMenu />
            <MenuMore />
          </div>
        </div>
      </div>
    </section>
  );
}
