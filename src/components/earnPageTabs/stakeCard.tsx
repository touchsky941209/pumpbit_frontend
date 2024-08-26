export default function StakeCard() {
  return (
    <div className="md:py-10 md:pl-4 pl-0 py-3 ">
      <div className=" flex justify-between items-center text-start font-medium text-2xl">
        <p>My Staking</p>
        <button className="lg:rounded-3xl rounded-md  bg-button-primary px-3 py-1 text-lg font-normal">
          Claim
        </button>
      </div>
      <div className="py-7 grid lg:grid-cols-2 grid-cols-1 items-center gap-y-3">
        <div className="grid grid-rows-2 gap-y-3">
          <div className="flex lg:justify-start justify-between items-center gap-x-3 text-xl font-normal">
            <p>Staked PBT</p>
            <div className="flex justify-center items-center gap-x-3 text-lg">
              <p>600.00</p>
              <p>PBT</p>
            </div>
          </div>
          <div className="flex lg:justify-start justify-between items-center gap-x-3 text-xl font-normal">
            <p>Avg. Multiplier</p>
            <div className="flex justify-center items-center gap-x-3 text-xl">
              <p>20x</p>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-y-3">
          <div className="flex justify-between items-center gap-x-3 text-xl font-normal">
            <p>Total Rewards</p>
            <div className="flex justify-center items-center gap-x-3 text-lg">
              <p>10,212,313.80</p>
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
