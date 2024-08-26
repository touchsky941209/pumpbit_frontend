import Image from "next/image";

type TableRowProps = {
  ranking: number;
  name: string;
  multiplier: number;
  recruited: string;
  points: number;
};

export const TableRow = (props: TableRowProps) => {
  const Text = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };
  return (
    <tr className="w-full [&_td]:min-w-11  [&_td]:py-5 px-7 ">
      <td className="px-5 truncate" align="center">
        {props.ranking}
      </td>
      <td className="flex justify-center items-center gap-2" align="center">
        <Image
          className="border border-transparent rounded-[50%]"
          src={"/assets/id.png"}
          width={40}
          height={40}
          alt="icon"
        />
        <p className="truncate">{Text(props.name, 13)}</p>
      </td>
      <td className="truncate" align="center">
        {props.multiplier}%
      </td>
      <td className="truncate" align="center">
        {Text(props.recruited, 13)}
      </td>
      <td className="" align="center">
        {props.points}
      </td>
    </tr>
  );
};

type TableProps = {
  data: TableRowProps[];
};

export const Table = (props: TableProps) => {
  if (!Array.isArray(props.data) || props.data.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <p>No data available</p>
      </div>
    );
  }
  return (
    <div className="flex items-center    justify-center rounded-md border border-[#ffffff33] shadow-md shadow-[#B196FF] text-lg text-[#FFF] font-normal font-ArchivoBlack lg:w-full">
      <div className="w-full shadow-md rounded-2xl border-[#ffffff33] ">
        <div className="py-3 px-[1.75rem] border-b border-solid border-[#ffffff33]">
          <h4 className="lg:text-center text-left text-[#ffffff0f] text-2xl tracking-[0.24px] uppercase custom-text">
            Leaderboard
          </h4>
        </div>
        <div className="overflow-x-scroll  lg:overflow-x-auto ">
          <table className="w-full">
            <thead>
              {" "}
              <tr className=" [&_th]:min-w-11  [&_th]:p-5 border-b border-solid border-[#ffffff33]">
                <th>Ranking</th>
                <th>Name</th>
                <th>Multiplier</th>
                <th>Recruited By</th>
                <th>Points</th>
              </tr>
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
