"use client"
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DiversityIcon from "@/icons/diversity";
import DescriptionIcon from "@/icons/description";
import ConversationIcon from "@/icons/conversation";
import { Dialog, DialogTrigger } from "../models";
import SlippageSettingModal from "../models/slippageSettingsModal";
import Link from "next/link";
import {
  Lang_Referrals,
  Lang_Docs,
  Lang_SlipPageSettings
} from "@/constants/language"
import { useUtilContext } from "@/hooks";
export const MenuMore = () => {
  const { language } = useUtilContext()
  const [isSlippageModalOpen, setIsSlippageModalOpen] = useState<boolean>(false);

  return (
    <Popover>
      <PopoverTrigger>
        <BsThreeDots className="h-10 w-8 " />
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="px-5 w-56 py-3 border-0 background-menu"
      >
        <div className="rounded-md  ">
          <div className="">
            <Link href="/referral">
              <div className="flex flex-row gap-x-2 w-full hover:bg-[#18191F] text-white hover:text-primary py-2">
                <DiversityIcon />
                {
                  language === "EN" ? Lang_Referrals.en : Lang_Referrals.ch
                }
              </div>
            </Link>

            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Link href="" onClick={() => setIsSlippageModalOpen(true)}
                  >
                    <div className="flex flex-row gap-x-2 w-full hover:bg-[#18191F] text-white  hover:text-primary py-2 ">
                      <ConversationIcon />
                      {
                        language === "EN" ? Lang_SlipPageSettings.en : Lang_SlipPageSettings.ch
                      }
                    </div>
                  </Link>
                </DialogTrigger>
                {isSlippageModalOpen && <SlippageSettingModal onClose={() => setIsSlippageModalOpen(false)} />}
              </Dialog>
            </div>

            <Link
              href="https://pumpbit.gitbook.io/pumpbit-whitepaper"
              target="_blank"
            >
              <div className="flex flex-row gap-x-2 w-full hover:bg-[#18191F] hover:text-primary py-2 ">
                <DescriptionIcon />
                {
                  language === "EN" ? Lang_Docs.en : Lang_Docs.ch
                }
              </div>
            </Link>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
