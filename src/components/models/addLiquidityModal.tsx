"use client"
import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogClose } from ".";
import { ethers } from "ethers";
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from "../ui/slider";

import { useWeb3 } from "@/hooks";
import { toWei, toInt, getMinexecuteFee } from "@/utils/etcfunction";
import { b2testnetChainId, ailayertestnetChainId, b2testnet_Router_Address, ailayertestnet_Router_Address, bevmtestnetChainId, bevmtestnet_PositionRouter_Address, bevmtestnet_Router_Address } from "@/constants";
import {
  ailayertestnet_PositionRouter_Address,
  b2testnet_PositionRouter_Address
} from "@/constants";
import { useToast } from "../ui/toast/use-toast";
import "./style/index.css"

export default function AddLiquidityModal() {

  const { toast } = useToast()
  const { account, usdcTokenContract, positionRouterContract, marketDescriptorDeployerContract, chainId, routerContract, web3 } = useWeb3()

  const [accountBalance, setAccountBalance] = useState<number>(0)
  const [margin, setMargin] = useState<number>(0)
  const [liquidity, setLiquidity] = useState<number>(0)
  const [slider, setSlider] = useState<number[]>([1])
  const [isAnimation, setAnimation] = useState<boolean>(false)
  const btnRef = useRef<HTMLButtonElement | null>(null);


  const init = async () => {
    if (account === undefined) return
    try {
      const _accountBalance = await usdcTokenContract.methods.balanceOf(account).call()
      setAccountBalance(toInt(Number(_accountBalance), chainId))
    } catch (err) {

    }
  }

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    setLiquidity(margin * slider[0])
  }, [margin])

  const handleValueChange = (newValue: number[]) => {
    setSlider(newValue);
    setLiquidity(margin * newValue[0])
  };

  const clickCloseBtn = () => {
    if (btnRef.current)
      btnRef.current.click()
  }

  const createLiquidity = async () => {
    if (account === undefined) {
      const { id, dismiss } = toast({
        title: "Warning",
        description: "Please connect wallet"
      })
      return
    }
    const gasPrice = await web3.eth.getGasPrice()
    setAnimation(true)

    const acceptableRate = 10
    let minExecuteFee = getMinexecuteFee()
    const market = await marketDescriptorDeployerContract.methods.descriptors("BTC").call()
    const acceptablePrice = margin * (1 + acceptableRate / 100)

    console.log("Market =>", market)
    console.log("Margin =>", margin)
    console.log("Liquidity =>", liquidity)
    console.log("Accet+>", acceptablePrice)

    let positionRouterAddr: string = ""
    let routerAddr: string = ""
    console.log("Chain ID =>", chainId)

    if (chainId == b2testnetChainId) {
      console.log("Chain is => b2", chainId, " ", b2testnetChainId)
      positionRouterAddr = b2testnet_PositionRouter_Address
      routerAddr = b2testnet_Router_Address
    }

    else if (chainId == ailayertestnetChainId) {
      console.log("Chain is => AI", chainId, " ", ailayertestnetChainId)
      positionRouterAddr = ailayertestnet_PositionRouter_Address
      routerAddr = ailayertestnet_Router_Address
    }

    else if (chainId == bevmtestnetChainId) {
      console.log("Chain is => AI", chainId, " ", bevmtestnetChainId)
      positionRouterAddr = bevmtestnet_PositionRouter_Address
      routerAddr = bevmtestnet_Router_Address
    }


    const tokenApproved = await usdcTokenContract.methods.allowance(account, routerAddr).call()

    if (tokenApproved == BigInt(0))
      try {
        await usdcTokenContract.methods.approve(routerAddr, toWei(100000000, chainId)).send({ from: account, gasPrice: gasPrice })
      } catch (err) {

      }


    const isApproved = await routerContract.methods.isPluginApproved(account, positionRouterAddr).call()
    console.log("Is Approved =>", isApproved)
    if (isApproved === false) {
      try {
        await routerContract.methods.approvePlugin(positionRouterAddr).send({ from: account, gasPrice: gasPrice })
      } catch (err) {

      }
    }

    console.log("Approved")

    console.log("Margin =>", margin)
    console.log("Liquidity =>", liquidity)
    console.log("accepPrice =>", acceptablePrice)

    try {
      await positionRouterContract.methods.createIncreaseLiquidityPosition(
        market,
        toWei(margin, chainId),
        toWei(liquidity, chainId),
        toWei(acceptablePrice, chainId),
      ).send({ from: account, value: minExecuteFee, gasPrice: gasPrice })

      const { id, dismiss } = toast({
        title: "Success",
        description: "Created Liquidity Position sucessfully"
      })

      clickCloseBtn()

    } catch (err) {
      const { id, dismiss } = toast({
        title: "Warning",
        description: "Failed"
      })
    }

    setAnimation(false)

  }

  return (
    <div>
      <DialogContent className=" bg-card-secondary flex flex-col gap-y-3 text-white  max-w-xl">
        <DialogTitle> Add Liquidity</DialogTitle>
        <div className=" mt-6">
          <div className="flex justify-between sm:gap-2  ">
            <div className="flex-1">
              <p className="text-text-secondary text-sm ">
                Pool
                <span className="block text-white text-sm font-semibold pt-2">
                  BTC/USD
                </span>
              </p>
            </div>
            <div className="flex-1">
              <p className="text-text-secondary">
                Max APR
                <span className="block text-semantic-success text-sm pt-2">
                  Coming soon
                </span>
              </p>
            </div>
            <div className="flex-1">
              <p className="text-text-secondary text-sm">
                Total Liquidity
                <span className="block text-white text-sm pt-2">12.41M</span>
              </p>
            </div>
            <div className="flex-1">
              <p className="text-text-secondary text-base">
                24h Fee Income
                <span className="block text-white text-sm pt-2">coming soon</span>
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-secondary p-5">
          <div className="flex flex-col gap-y-6">
            <div className="flex  justify-between">
              <p>Pay</p>
              <p className="ml-auto text-sm">Balance: {accountBalance}</p>
            </div>
            <div className="flex w-full items-center  justify-between gap-x-5">
              <div>
                <input className="text-white text-xl bg-transparent border-slate-500" value={margin}
                  onChange={(e: any) => {
                    setMargin(e.target.value)
                  }}
                />
              </div>
              <div className="flex gap-x-2 items-center">
                <p className="text-lg font-bold">USDC</p>
                <button className="rounded-3xl border border-border bg-card-secondary px-3 py-1 text-lg font-normal"
                  onClick={() => { setMargin(accountBalance) }}
                >
                  Max
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-secondary p-5">
          <div className="flex flex-col gap-y-6">
            <div className="flex  justify-between">
              <p>size</p>
              <p className="ml-auto text-sm">Leverage::{slider[0]}X</p>
            </div>
            <div className="flex w-full items-center  justify-between gap-x-5">
              <div>
                <p className="text-white text-xl">{liquidity}</p>
              </div>
              <div className=" ">
                <p className="text-lg font-bold">USDC</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-row">
            <p className="mr-auto leading-relaxed">Leverage Slider</p>
            <p className="text-lg font-bold"> {slider[0]}X</p>
          </div>
          <SliderRoot step={1} min={1} max={200} defaultValue={[30]}
            onValueChange={handleValueChange}
            value={slider}
          >
            <SliderTrack>
              <SliderRange />
            </SliderTrack>
            <SliderThumb />
          </SliderRoot>
        </div>
        <div className="flex flex-col gap-y-3 mt-6">
          <div className="flex flex-row">
            <p className="mr-auto text-text-secondary">Liquidity</p>
            <p className="text-white-600 text-sm">{liquidity}</p>
          </div>
          <div className="flex flex-row">
            <p className="mr-auto text-text-secondary">Margin</p>
            <p className="text-white-600 text-sm">{margin}</p>
          </div>
          <div className="flex flex-row">
            <p className="mr-auto text-text-secondary">Execution Fee</p>
            <div className="flex flex-row gap-x-1">
              <p className="text-white-600 text-sm">-0.00030 BTC($10.0)</p>
            </div>
          </div>
        </div>
        <div className="mt-1mb-2">
          <button className="py-2 w-full rounded-lg text-lg bg-primary font-bold"
            onClick={() => {
              createLiquidity()
            }}
          >
            {!isAnimation &&
              "Add"
            }
            {
              isAnimation &&
              <div className="stage">
                <div className='dot-typing'>
                </div>
              </div>
            }
          </button>
        </div>

        <DialogClose className="absolute w-[0px] h-[0px]">
          <button ref={btnRef} />
        </DialogClose>
      </DialogContent>
    </div>
  );
}
