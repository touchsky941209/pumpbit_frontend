import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-y-10 sm:gap-y-24 bg-black py-24 ">
      <div className="flex w-full gap-10 pl-16 flex-col sm:flex-row sm:items-center justify-center sm:px-20">
        <div className="w-1/3">
          <Image
            src="/assets/Logo_White.png"
            alt="logo"
            width={200}
            height={200}
          />
        </div>
        <div className="flex w-1/3 flex-row sm:justify-center gap-x-10 ">
          <Link href="https://twitter.com/Inftytrade" target="_blank">
            <Image
              src="/assets/icons/x.svg"
              alt="x"
              width={40}
              height={40}
              className="h-10 w-5 sm:h-10 sm:w-10"
            />
          </Link>
          <Link href="https://t.me/Inftytrde" target="_blank">
            <Image
              src="/assets/icons/telegram.svg"
              alt="telegram"
              width={40}
              height={40}
              className="h-10 w-6 sm:h-10 sm:w-10"
            />
          </Link>
        </div>
        <div className="flex w-1/3 flex-row sm:flex-col gap-y-4 text-sm flex-wrap justify-start sm:justify-end">
          <Link
            href="/"
            className="inline-flex items-end justify-end font-light"
          >
            Privacy & Policy
          </Link>
          <Link
            href="/"
            className="inline-flex items-end justify-end font-light"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
      <div className=" flex justify-center text-xs font-light uppercase text-neutral-400">
        Copyright © 2024 PUMPBIT.TRade All rights reserved.
      </div>
    </footer>
  );
}
