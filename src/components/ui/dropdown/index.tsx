import { MdArrowDropDown } from "react-icons/md";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose
} from "@/components/ui/popover";
import Image from "next/image";
import { useUtilContext } from "@/hooks";
import { useEffect, useState } from "react";


export const pairList = [
  "BTC/USDC",
  "ETH/USDC"
]

export const pairImg = [
  "/assets/btcusdc.png",
  "/assets/ethusdc.png"
]

export const pair = [
  "btcusdt",
  "ethusdt"
]
export const MagicMenu = () => {

  const { setMarketPair } = useUtilContext()
  const [_marketPair, _setMarketPair] = useState<string>("BTC/USDC")
  const [_pairImg, _setPairImg] = useState<string>("/assets/btcusdc.png")

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const _lgPair: string | null = localStorage.getItem('pair')

      const id = pairList.indexOf(String(_lgPair))
      if (id != -1) {
        _setMarketPair(pairList[id])
        _setPairImg(pairImg[id])
      }
    }
  }, [])

  const getHandle = (item: string, idx: number) => {
    _setPairImg(pairImg[idx])
    _setMarketPair(item)
    setMarketPair(pair[idx])
    localStorage.setItem("pair", item)
  }
  return (
    <Popover>
      <PopoverTrigger>
        <div className="relative flex">
          <div className="flex flex-row gap-x-2">
            <Image
              src={_pairImg}
              alt="tokenPair"
              width={35}
              height={20}
            />
            {_marketPair}
          </div>
          <MdArrowDropDown className="h-6 w-6 " />
        </div>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="absolute left-0 top-10 px-3 w-40 py-5 border-0 bg-popover z-10"
      >
        <div className="rounded-md  ">
          <div className="">
            {
              pairList.map((item, idx) => (
                <PopoverClose
                  key={idx}
                >
                  <button
                    className="w-full hover:bg-[#22193D] text-white hover:text-primary px-2 py-2"
                    onClick={() => {
                      getHandle(item, idx)
                    }}
                  >
                    <div className="flex flex-row gap-x-2">
                      <Image
                        src={pairImg[idx]}
                        alt="tokenPair"
                        width={35}
                        height={20}
                      />
                      {item}
                    </div>
                  </button>
                </PopoverClose>
              ))
            }
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
