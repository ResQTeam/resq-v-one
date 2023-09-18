import { FaCheck } from 'react-icons/fa';

import SmallTitleHeader from '../../components/shared/SmallTitleHeader';

import woman from '../../assets/resq-aboutresq.webp';
import Phone from '../../components/shared/svg/Phone';

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
            Lorem ipsum dolor sit amet consectetur. Vel vulputate aliquam lectus
            elementum at. Enim nisl sagittis quis auctor mattis. Ut turpis
            viverra diam lacus ac in nunc morbi in sem.
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
            <div className="flex h-[27px] w-[29px] items-center justify-center rounded-md bg-resq-brand-main md:h-[52px] md:w-[59px] md:rounded-[10px]">
              <Phone className="h-5 w-5  md:h-[35px] md:w-[27px]" />
            </div>
            <div className="">
              <p className="text-[0.625rem] md:text-base">Emergency Call</p>
              <p className="text-xs font-bold text-resq-dark-400 md:text-[1.375rem]/[1.5rem]">
                777 657 0000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutResq;
