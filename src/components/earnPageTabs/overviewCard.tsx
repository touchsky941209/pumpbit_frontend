export default function OverviewCard() {
  return (
    <div className="md:py-10 py-4 ">
      <div className="text-start font-medium text-2xl">
        <p>Overview</p>
      </div>
      <div className="md:py-4 py-2 grid lg:grid-cols-2 grid-cols-1 items-center">
        <div className="flex justify-start gap-x-3  items-center  text-xl font-normal">
          <p>Max APR</p>
          <p className="font-bold text-xl lg:text-primary text-semantic-success">
            12.03%
          </p>
        </div>
        <div className="grid lg:grid-rows-2 grid-rows-1 md:py-5 py-2 gap-y-3">
          <div className="flex justify-between items-center gap-x-3 text-xl font-normal">
            <p>Staked PBT</p>
            <div className="flex justify-center items-center gap-x-3 text-lg">
              <p>182,012,143.80</p>
              <p>PBT</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-x-3 text-xl font-normal">
            <p>Total Staking Rewards</p>
            <div className="flex justify-center items-center gap-x-3 text-lg">
              <p>10,212,313.80</p>
              <p>PBT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
