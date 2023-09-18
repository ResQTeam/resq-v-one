import SmallTitleHeader from '../../components/shared/SmallTitleHeader';
import manInMask from '../../assets/resq-man-in masks.webp';

const Hero = () => {
  return (
    <section>
      <div className="resq-container pt-7 md:pt-[3.6875rem]">
        <div className="lg:relative lg:z-[2] lg:flex lg:items-center lg:gap-8 lg:pl-20">
          <div className="bg-resq-bg-about px-8 py-8 md:p-16">
            <SmallTitleHeader justifyCenter={false} title="About us" />
            <h1 className="mt-[0.625rem] max-w-xl text-xl/[1.78125rem] font-bold  tracking-tight text-resq-dark-400 md:mt-4 md:text-[3.125rem]/[4rem] md:leading-[4rem]">
              We Are A Team of Emergency Workers Who Save Lives
            </h1>
          </div>
          <div>
            <p className="mt-3 text-[0.8125rem]/[1.3125rem] md:text-lg lg:mt-0 lg:max-w-[515px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea{' '}
            </p>
          </div>
        </div>

        <div className="relative mt-3 lg:-mt-[3.6875rem]">
          <img src={manInMask} alt="man in mask" />
          <div className="flex gap-6 bg-resq-brand-main px-[0.875rem] pb-[1.375rem] pt-6 md:absolute md:-bottom-[4.5rem] md:left-1/2 md:max-w-[630px] md:-translate-x-1/2 md:gap-10 md:px-12 md:pt-8">
            <p className="text-white ">
              <span className="block text-[1.5625rem]/[1.3125rem] font-bold md:text-[3.5rem]/[4rem]">
                7k+
              </span>
              <span className="mt-[2px] text-[0.5rem] md:text-base/7 ">
                Properties Saved
              </span>
            </p>
            <p className="text-white ">
              <span className="block text-[1.5625rem]/[1.3125rem] font-bold md:text-[3.5rem]/[4rem]">
                6k+
              </span>
              <span className="mt-[2px] text-[0.5rem] md:text-base/7 ">
                Numbers of Requests
              </span>
            </p>
            <p className="text-white ">
              <span className="block text-[1.5625rem]/[1.3125rem] font-bold md:text-[3.5rem]/[4rem]">
                3k+
              </span>
              <span className="mt-[2px] text-[0.5rem] md:text-base/7 ">
                Total Workers
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
