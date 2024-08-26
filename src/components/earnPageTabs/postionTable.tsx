"use client";

import Image from "next/image";

// export default function LiquidityMining() {
//   return (
//     <div className="px-4 py-5">
//       <div className="lg:hidden flex justify-between items-center text-start font-bold text-sm">
//         <div className="flex justify-center items-center gap-x-2">
//           <p>My Multiplier</p>
//           <p>10x</p>
//         </div>
//         <button className="md:rounded-3xl rounded-md  bg-button-primary px-3 py-1 text-lg font-normal">
//           Claim
//         </button>
//       </div>
//       <div className="lg:flex lg:justify-between lg:items-center grid grid-cols-1 gap-y-3 text-lg font-normal">
//         <div className="hidden md:grid grid-cols-1 gap-y-2">
//           <p>Market</p>

//           <div className="grid grid-cols-1 gap-y-2">
//             <p>BTC/USDC</p>
//             <p>BTC/USDC</p>
//           </div>
//         </div>
//         <div className="grid lg:grid-cols-1 grid-cols-2 pt-2 md:pt-0 gap-y-2">
//           <p>Max APR</p>
//           <div className="grid grid-cols-1 gap-y-2">
//             <p className="text-end md:text-start">294.12%</p>
//             <p className="hidden md:block">294.12%</p>
//           </div>
//         </div>
//         <div className="grid lg:grid-cols-1 grid-cols-2 gap-y-2">
//           <p>Daily Emission</p>
//           <div className="grid grid-cols-1 gap-y-2 gap-x-2 text-semantic-success">
//             <div className="flex md:justify-start justify-end items-center gap-x-2">
//               <p>103.80</p>
//               <p>PBT</p>
//             </div>
//             <div className="hidden md:flex justify-start items-center gap-x-2">
//               <p>103.80</p>
//               <p>PBT</p>
//             </div>
//           </div>
//         </div>
//         <div className="grid lg:grid-cols-1 grid-cols-2 gap-y-2 ">
//           <p>Total Position</p>
//           <div className="grid grid-cols-1 gap-y-2 gap-x-2 ">
//             <div className="flex md:justify-start justify-end items-center gap-x-2">
//               <p>103.80</p>
//               <p>BTC</p>
//             </div>
//             <div className="hidden md:flex  justify-start items-center gap-x-2">
//               <p>103.80</p>
//               <p>BTC</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-1 grid-cols-2 gap-y-2 ">
//           <p>Avg. Coefficient</p>
//           <div className="grid grid-cols-1 gap-y-2">
//             <div className="flex md:justify-start justify-end items-center gap-x-2">
//               <p className="text-start">1.23x</p>
//             </div>
//             <div className="hidden md:flex  justify-start items-center gap-x-2">
//               <p className="text-start">1.23x</p>
//             </div>
//           </div>
//         </div>
//         <div className="grid lg:grid-cols-1 grid-cols-2 gap-y-2 ">
//           <p>My Positions</p>
//           <div className="grid grid-cols-1 gap-y-2">
//             <div className="flex md:justify-start justify-end items-center gap-x-2">
//               <p className="text-start">0</p>
//               <p>USDC</p>
//             </div>
//             <div className="hidden md:flex  justify-start items-center gap-x-2">
//               <p className="text-start">0</p>
//               <p>USDC</p>
//             </div>
//           </div>
//         </div>
//         <div className="grid lg:grid-cols-1 grid-cols-2 gap-y-2 ">
//           <p>Claimable Rewards</p>
//           <div className="grid grid-cols-1 gap-y-2">
//             <div className="flex md:justify-start justify-end items-center gap-x-2">
//               <p className="text-start">103.80</p>
//               <p>PBT</p>
//             </div>
//             <div className="hidden md:flex items-center gap-x-2">
//               <p className="text-start">103.80</p>
//               <p>PBT</p>
//             </div>
//           </div>
//         </div>

//         <div className="hidden lg:grid grid-cols-2 gap-y-4 text-base font-normal">
//           {" "}
//           <div className="grid grid-rows-1 gap-y-4 gap-x-4 text-base font-normal">
//             {" "}
//             <button className="  px-2 py-1  ">
//               <Image
//                 src="/assets/arrow_drop_down.png"
//                 alt="pool image"
//                 width={24}
//                 height={24}
//               />
//             </button>
//             <button className=" px-2 py-1 ">
//               <Image
//                 src="/assets/arrow_drop_down.png"
//                 alt="pool image"
//                 width={24}
//                 height={24}
//               />
//             </button>
//           </div>
//           <div className="hidden lg:grid grid-rows-2 gap-y-4 text-base font-normal">
//             <button className="lg:rounded-lg rounded-md  bg-button-primary px-2 py-1  ">
//               Add
//             </button>
//             <button className="lg:rounded-lg rounded-md  bg-button-primary px-2 py-1 ">
//               Add
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

type TableRowProps = {
  pool: string;
  maxAPR: number;
  feeIncome: number;
  dailyEmission: number;
  totalLiquidity: number;
  myLiquidity: number;
  claimableRewards: number;
};

export const TableRow = (props: TableRowProps) => {
  return (
    <tr className="w-full [&_td]:min-w-11  [&_td]:py-5 px-7 ">
      <td align="center">{props.pool}</td>
      <td align="center" className="text-semantic-success">
        <p>{props.maxAPR}%</p>
      </td>
      <td align="center">{props.feeIncome}</td>
      <td align="center">{props.dailyEmission} PBT</td>
      <td className="" align="center">
        {props.totalLiquidity} M
      </td>
      <td className="" align="center">
        {props.myLiquidity} USDC
      </td>
      <td className="" align="center">
        {props.claimableRewards} PBT
      </td>

      <td className="" align="center">
        <button className="lg:rounded-lg rounded-md  bg-button-primary px-2 py-1 ">
          {" "}
          Add
        </button>
      </td>
    </tr>
  );
};

type TableTitleProps = {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  title7: string;
};
export const TableTitles = (props: TableTitleProps) => {
  return (
    <tr className=" [&_th]:min-w-11  [&_th]:p-2 border-b border-solid border-[#ffffff33]">
      <th>{props.title1}</th>
      <th>{props.title2}</th>
      <th>{props.title3}</th>
      <th>{props.title4}</th>
      <th>{props.title5}</th>
      <th>{props.title6}</th>
      <th>{props.title7}</th>
    </tr>
  );
};

type TableProps = {
  data: TableRowProps[];
  title: TableTitleProps[];
};

export const PostionTable = (props: TableProps) => {
  if (!Array.isArray(props.data) || props.data.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <p>No data available</p>
      </div>
    );
  }
  return (
    <div className="flex items-center    justify-center text-base text-[#FFF] font-normal  lg:w-full">
      <div className="w-full  rounded-2xl  ">
        <div className=" ">
          <table className="w-full">
            <thead>
              {props.title.map((items, index) => (
                <TableTitles {...items} key={index} />
              ))}
            </thead>

            <tbody>
              {props.data.map((item, index) => (
                <TableRow {...item} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
