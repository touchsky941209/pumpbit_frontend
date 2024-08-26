import Image from "next/image";

const HeroSectionLanding = () => {
  return (
    <div className="flex w-full flex-col gap-y-4 sm:gap-y-10 bg-black">
      <div className="bg-particle">
        <div className="flex flex-col gap-y-12 p-5 sm:p-28">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="text-4xl font-light leading-[84px] lg:text-9xl lg:leading-[200px]">
              <p className="sm:whitespace-pre-line">Maximize your capital</p>
            </div>
            <div>
              <Image
                src="/assets/icons/trending-line.svg"
                alt="ball-icon"
                width={40}
                height={40}
                className="hidden flex-shrink-0 sm:block w-full h-full"
              />
            </div>
          </div>
          <div className="flex">
            <p className="w-full text-sm leading-loose sm:text-right sm:text-2xl">
              The PRMM model revolutionizes perpetual DEX with CEX-like capital
              efficiency, offering competitive <br />
              fees, ample liquidity, and 200x leverage.
            </p>
          </div>
        </div>
      </div>
      <MagicStarDivider />
      <div className="bg-particle">
        <div className="flex flex-col items-center justify-center gap-y-12 p-5 sm:p-28">
          <div className="flex items-center justify-center text-4xl font-light leading-[84px] lg:whitespace-nowrap lg:text-8xl sm:text-4xl md:text-5xl lg:leading-[200px]">
            AI in play, BIG wins stay
          </div>
          <div className="w-full h-32">
            <Image
              src="/assets/icons/ball.svg"
              alt="ball-icon"
              width={40}
              height={40}
              className="hidden sm:block w-full h-full "
            />
          </div>
          <p className="text-left text-sm leading-loose sm:text-center sm:text-2xl">
            The PRMM model revolutionizes perpetual DEX with CEX-like capital
            efficiency, offering competitive fees, ample liquidity, and 200x
            leverage.
          </p>
        </div>
      </div>
      <MagicStarDivider />
      <div className="bg-particle">
        <div className="flex flex-col gap-y-5 p-5 sm:gap-y-12 sm:p-28">
          <div className="flex flex-col items-center gap-y-5 sm:flex-row sm:gap-x-24">
            <div className="jusify-start flex flex-shrink-0 text-4xl font-light leading-[84px] lg:text-8xl sm:leading-[200px]">
              Earn more <br className="hidden md:block" />
              the easy way
            </div>
            <div className="w-full h-64">
              <Image
                src="/assets/icons/braille.svg"
                alt="ball-icon"
                width={40}
                height={40}
                className="hidden flex-shrink-0 sm:block w-full h-full"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="mr-auto text-left text-sm leading-loose sm:w-5/6 sm:text-2xl">
              Even beginners can profit greatly with just three clicks. We share
              90% of trading fees with traders. Earn from trading, providing
              liquidity, using AI trading bots, and even from referrals. Enjoy
              additional INF earnings while earning fees.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionLanding;

function MagicStarDivider() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/assets/icons/magic.svg"
        alt="magic-icon"
        width={40}
        height={40}
        className="h-6 w-6 sm:h-14 sm:w-14"
      />
    </div>
  );
}
