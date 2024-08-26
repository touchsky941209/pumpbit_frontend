import Image from "next/image";
import React from "react";

export default function CartNft() {
  return (
    <div className=" mt-10 mb-5">
      <Image
        className="rounded-[30px] w-full lg:h-[750px] h-80"
        src={"/assets/cardImg.png"}
        alt="card-img"
        width={450}
        height={420}
      />
    </div>
  );
}
