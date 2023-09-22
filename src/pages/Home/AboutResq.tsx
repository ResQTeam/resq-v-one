import { FaCheck } from 'react-icons/fa';

import SmallTitleHeader from '../../components/shared/SmallTitleHeader';

import woman from '../../assets/resq-aboutresq.webp';
import Emergency from '../../components/shared/Emergency';

const AboutResq = () => {
  return (
    <section>
      <div className="pt-20 md:mt-20 md:grid md:grid-cols-2 md:gap-x-7 md:pt-32 ">
        <div className="pl-7">
          <SmallTitleHeader title="About Resq" justifyCenter={false} />
          <h3 className="mb-14 mt-2 max-w-[11.5rem] text-xl/[1.5625rem]  font-bold text-resq-dark-400 md:max-w-[30.375rem] md:text-[3.125rem] md:leading-normal">
            Exceptional Solution for Rapid Response Service
          </h3>
        </div>
        <div className="relative h-[340px] w-full bg-resq-light-200 md:order-1 md:row-span-full md:h-[690px]">
          <img
            src={woman}
            alt=""
            className="absolute -top-[3.75rem] left-1/2 mt-4 max-h-[21.3125rem] w-[19rem] -translate-x-1/2 object-cover md:max-h-[691px] md:w-[35.125rem]"
          />
        </div>
        <div className="mt-4 px-7 md:col-start-2 md:-mt-[410px]">
          <p className="max-w-[32.5625rem] text-[0.8125rem]/[1.5625rem]">
            Our secure, efficient, and comprehensive emergency service
            management platform is designed to streamline and enhance safety
            during critical events. We know that the most important thing in an
            emergency is reliable, fast assistance from professionals. But a lot
            of the time we don’t know the right numbers to call or even the
            closest responders to us. That’s why our mission is to help people
            get the help they need when they’re in an emergency.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-7 md:mt-10  md:gap-y-12">
            <div className="flex gap-x-3">
              <span className=" flex aspect-square h-4 w-4 items-center justify-center rounded-full bg-resq-brand-main p-2 md:h-9 md:w-9">
                <FaCheck className="h-6 w-6 fill-white font-bold" />
              </span>
              <span className="text-[0.625rem] font-bold text-resq-dark-400 md:text-2xl">
                24-Hour Support
              </span>
            </div>
            <div className="flex gap-x-3">
              <span className=" flex aspect-square h-4 w-4 items-center justify-center rounded-full bg-resq-brand-main p-2 md:h-9 md:w-9">
                <FaCheck className="h-6 w-6 fill-white font-bold" />
              </span>
              <span className="text-[0.625rem] font-bold text-resq-dark-400 md:text-2xl">
                Efficiency
              </span>
            </div>
            <div className="flex gap-x-3">
              <span className=" flex aspect-square h-4 w-4 items-center justify-center rounded-full bg-resq-brand-main md:h-9 md:w-9">
                <FaCheck className="h-6 w-6 fill-white font-bold" />
              </span>
              <span className="text-[0.625rem] font-bold text-resq-dark-400 md:text-2xl">
                Well coordinated
              </span>
            </div>
            <div className="flex gap-x-3">
              <span className=" flex aspect-square h-4  w-4 items-center justify-center rounded-full bg-resq-brand-main md:h-9 md:w-9">
                <FaCheck className="h-6 w-6 fill-white font-bold" />
              </span>
              <span className="text-[0.625rem] font-bold text-resq-dark-400 md:text-2xl">
                Teamwork
              </span>
            </div>
          </div>
          <div className="mt-6 flex h-[42px] w-[148px] items-center gap-x-1 rounded-full bg-resq-light-200 px-3 py-2 md:mt-24 md:h-[82px]   md:w-[271px] md:gap-x-3 md:px-6">
            <Emergency textColor="black" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutResq;
