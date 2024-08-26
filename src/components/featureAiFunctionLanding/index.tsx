import Image from "next/image";

const FeatureAiFunctionLanding = () => {
  return (
    <div className="sm:py-15 mt-4 flex flex-col gap-y-10 p-5 sm:mt-20 sm:gap-y-20 sm:px-28">
      <div className="flex flex-col gap-y-10 sm:flex-row sm:gap-x-40">
        <div className="flex flex-col gap-y-3 sm:gap-y-5">
          <div className="text-5xl font-light leading-[84px] sm:text-8xl">
            AI Functions
          </div>
          <p className="text:sm font-light leading-loose sm:text-2xl">
            Maximize returns with our AI functions – driving profitability
            through innovative insights and intelligent solutions for sustained
            growth.
          </p>
        </div>
        <Image
          src="/assets/icons/multi-circle.svg"
          alt="multi-circle"
          width={380}
          height={400}
          className="hidden flex-shrink-0 md:block"
        />
      </div>
      <div className="flex flex-col gap-y-5 border border-[#68BFFF] px-3 py-5 md:flex-row sm:gap-x-16 sm:p-10">
        <div className="flex flex-col gap-y-3 sm:gap-y-10">
          <p className="text-2xl font-medium sm:text-4xl">Risk Management AI</p>
          <p className="text-xs font-light leading-relaxed sm:text-lg">
            Upload your trading history, and Risk Management AI will assess your
            trading style, fund management, and risk tolerance. It will then
            offer personalized fund management and risk control plans and help
            you implement these strategies when trading.
          </p>
        </div>
        <div className="hidden xl:inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-[#68BFFF]"></div>
        <div className="flex flex-col gap-y-3 sm:gap-y-10">
          <p className="text-2xl font-medium sm:text-4xl">Market Insight AI</p>
          <p className="text-xs font-light leading-relaxed sm:text-lg">
            Professional traders read hundreds of news items daily for hours to
            uncover trading chances. In only 30 seconds, Market Insight AI gives
            you real-time market analysis and trading advice, just as if a
            professional trader had scanned through extensive news, focusing on
            fundamentals, market movements, technical analysis, and news
            updates.
          </p>
        </div>
        <div className="hidden xl:inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-[#68BFFF]"></div>
        <div className="flex flex-col gap-y-3 sm:gap-y-10">
          <p className="text-2xl font-medium sm:text-4xl">AI Grid Trade Bot</p>
          <p className="text-xs font-light leading-relaxed sm:text-lg">
            It&apos;s unrealistic to expect an unbeatable AI trading bot, but
            combining AI with traditional strategies can outperform today&apos;s
            market. Using reinforcement learning and extensive data, our AI bot
            has excelled in backtesting, beating peers by 841%. Soon,
            you&apos;ll be able to earn easily with just a few clicks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureAiFunctionLanding;
