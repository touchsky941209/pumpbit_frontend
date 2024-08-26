"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import HeaderLanding from "@/components/header/headerLanding";
import Footer from "@/components/footer";

const HeaderFooterSelector = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isLandingPage =
    pathname === "/" ||
    pathname === "/referral" ||
    pathname === "/airdrop" ||
    pathname === "/nftMint";

  return (
    <>
      {isLandingPage ? <HeaderLanding /> : <Header />}
      <div>{children}</div>
    </>
  );
};

export default HeaderFooterSelector;
