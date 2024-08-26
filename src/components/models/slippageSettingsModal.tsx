import React, { useEffect, useState } from "react";
import { DialogContent, DialogTitle } from ".";
import { Dialog, DialogTrigger } from "../models";
import { useUtilContext } from "@/hooks";
import {
  Lang_Auto,
  Lang_Confirm,
  Lang_SlipPageSettings,
  Lang_SlipText
} from "@/constants/language"
interface SlippageSettingModalProps {
  onClose: any
}
export default function SlippageSettingModal({ onClose }: SlippageSettingModalProps) {
  const { setSlipRate, sliprate, language } = useUtilContext()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [rate, setRate] = useState<number>(0)

  useEffect(() => {
    setRate(sliprate)
  }, [sliprate])

  useEffect(() => {
    setIsLoading(false)
  }, [language])

  if (isLoading) return (
    <div>
      Loading...
    </div>
  )

  return (
    <div>
      <DialogContent className=" bg-gradient-bg  flex flex-col gap-y-3 text-white  max-w-md">
        <DialogTitle>
          {language === "EN" ? Lang_SlipPageSettings.en : Lang_SlipPageSettings.ch}
        </DialogTitle>
        <div className=" mt-6">
          <div className=" flex flex-col ">
            <div className="border border-p-light bg-secondary p-2 rounded-lg">
              <div className="flex flex-col ">
                <div className="flex w-full items-center  justify-between ">
                  <div>
                    <input className="text-white text-xl bg-transparent focus:outline-0"
                      onChange={(e: any) => {
                        setRate(e.target.value)
                      }}
                      value={rate}
                    />
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <p className="text-sm">300%</p>
                    <button className="rounded-3xl border border-border bg-card-secondary px-3 py-1 text-lg font-normal"
                      onClick={() => {
                        setRate(300)
                      }}
                    >
                      {language === "EN" ? Lang_Auto.en : Lang_Auto.ch}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-sm text-justify text-text-secondary">
                {
                  language === "EN" ? Lang_SlipText.en : Lang_SlipText.ch
                }
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 ">
          <button className="py-1.5 w-full rounded-full text-lg bg-primary font-bold"
            onClick={() => {
              onClose()
              setSlipRate(rate)
            }}
          >
            {
              language === "EN" ? Lang_Confirm.en : Lang_Confirm.ch
            }
          </button>
        </div>
      </DialogContent>
    </div>
  );
}
