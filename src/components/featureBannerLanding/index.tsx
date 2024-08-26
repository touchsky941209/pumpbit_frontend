const FeatureBannerLanding = () => {
  return (
    <div className="bg-vertical-frame flex flex-col gap-y-24 p-5 md:bg-multi-vector sm:p-28">
      <div className="flex flex-col flex-wrap items-start justify-between gap-y-12 md:flex-row md:gap-x-20">
        <div className="flex flex-col items-start gap-y-6 md:items-start">
          <p className="text-6xl font-bold sm:text-8xl">50x</p>
          <p className="text-6xl sm:text-8xl">Faster</p>
          <p className="text-xl">Trade with minimal latencies</p>
        </div>
        <div className="hidden xl:inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-white"></div>
        <div className="flex flex-col items-start gap-y-6 md:items-start">
          <p className="text-6xl font-bold sm:text-8xl">200x</p>
          <p className="text-6xl sm:text-8xl">Leverage</p>
          <p className="text-xl">The sky is your limit</p>
        </div>
        <div className="hidden xl:inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-white"></div>
        <div className="flex flex-col items-start gap-y-6 md:items-start">
          <p className="text-6xl font-bold sm:text-8xl">0</p>
          <p className="text-6xl sm:text-8xl">Deposit</p>
          <p className="text-xl">No sign-up or deposit is required</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureBannerLanding;
