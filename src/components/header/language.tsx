import { BsThreeDots } from "react-icons/bs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GrLanguage } from "react-icons/gr";
import { useEffect, useState } from "react";
import { useUtilContext } from "@/hooks";

export const LanguageMenu = () => {
  const { setLanguage, language } = useUtilContext()
  const enableClass = "w-full text-left    px-4 py-2"
  const disableClass = "w-full text-left hover:bg-[#18191F] hover:text-primary text-gray-400 px-4 py-2"

  const [headerlanguage, setHeaderLanguage] = useState<string>("")

  useEffect(() => {
    setHeaderLanguage(language)
  }, [language])

  return (
    <Popover>
      <PopoverTrigger>
        <GrLanguage className="h-10 w-6 " />
      </PopoverTrigger>
      <PopoverContent align="end" className="p-0 border-0  w-32   ">
        <div className="   right-0  background-menu  rounded-md ">
          <div className=" text-p-lighter">
            <button className={`${headerlanguage === "EN" ? enableClass : disableClass}`}
              onClick={() => {
                setLanguage("EN")
                localStorage.setItem("language", "EN")
              }}
            >
              <div className="flex flex-row px-1 py-2"
              >
                English
              </div>
            </button>
            <button className={`${headerlanguage === "CH" ? enableClass : disableClass}`}
              onClick={() => {
                setLanguage("CH")
                localStorage.setItem("language", "CH")
              }}
            >
              <div className="flex flex-row px-1 py-2"
              >
                简体中文
              </div>
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
