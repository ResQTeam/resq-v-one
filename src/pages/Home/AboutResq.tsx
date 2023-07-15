import { AiOutlineCheck } from 'react-icons/ai';

import SmallTitleHeader from '../../components/shared/SmallTitleHeader';

import woman from '../../assets/resq-aboutresq.webp';
import Phone from '../../components/shared/svg/Phone';

const AboutResq = () => {
  return (
    <section>
      <div className="pt-20 md:pt-32 md:mt-20 md:grid md:grid-cols-2 md:gap-x-7 ">
        <div className="pl-7">
          <SmallTitleHeader title="About Resq" justifyCenter={false} />
          <h3 className="text-xl/[1.5625rem] text-resq-dark-400 font-bold md:text-[3.125rem]  md:leading-normal md:max-w-[30.375rem] mb-14 max-w-[11.5rem] mt-2">
            Exceptional Solution for Rapid Response Service
          </h3>
        </div>
        <div className="bg-resq-light-200 w-full h-[340px] relative md:order-1 md:row-span-full md:h-[690px]">
          <img
            src={woman}
            alt=""
            className="absolute -top-[3.75rem] mt-4 left-1/2 -translate-x-1/2 w-[19rem] max-h-[21.3125rem] object-cover md:w-[35.125rem] md:max-h-[691px]"
          />
        </div>
        <div className="mt-4 px-7 md:col-start-2 md:-mt-[410px]">
          <p className="text-[0.8125rem]/[1.5625rem] max-w-[32.5625rem]">
            Lorem ipsum dolor sit amet consectetur. Vel vulputate aliquam lectus
            elementum at. Enim nisl sagittis quis auctor mattis. Ut turpis
            viverra diam lacus ac in nunc morbi in sem.
          </p>
          <div className="grid grid-cols-2 gap-7 mt-5 md:mt-10  md:gap-y-12">
            <div className="flex gap-x-3">
              <span className=" w-4 h-4 md:w-9 md:h-9 bg-resq-brand-main rounded-full flex justify-center items-center">
                <AiOutlineCheck className="fill-white font-bold w-full h-full" />
              </span>
              <span className="text-resq-dark-400 text-[0.625rem] font-bold md:text-2xl">
                24-Hour Support
              </span>
            </div>
            <div className="flex gap-x-3">
              <span className=" w-4 h-4 md:w-9 md:h-9 bg-resq-brand-main rounded-full flex justify-center items-center">
                <AiOutlineCheck className="fill-white font-bold w-full h-full" />
              </span>
              <span className="text-resq-dark-400 text-[0.625rem] font-bold md:text-2xl">
                Efficiency
              </span>
            </div>
            <div className="flex gap-x-3">
              <span className=" w-4 h-4 md:w-9 md:h-9 bg-resq-brand-main rounded-full flex justify-center items-center">
                <AiOutlineCheck className="fill-white font-bold w-full h-full" />
              </span>
              <span className="text-resq-dark-400 text-[0.625rem] font-bold md:text-2xl">
                Well coordinated
              </span>
            </div>
            <div className="flex gap-x-3">
              <span className=" w-4 h-4 md:w-9 md:h-9 bg-resq-brand-main rounded-full flex justify-center items-center">
                <AiOutlineCheck className="fill-white font-bold w-full h-full" />
              </span>
              <span className="text-resq-dark-400 text-[0.625rem] font-bold md:text-2xl">
                Teamwork
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-1 md:gap-x-3 mt-6 md:mt-24 bg-resq-light-200 md:w-[271px] md:h-[82px] rounded-full w-[148px] h-[42px]   md:px-6 py-2 px-3">
            <div className="bg-resq-brand-main w-[29px] h-[27px] md:w-[59px] md:h-[52px] flex justify-center items-center rounded-md md:rounded-[10px]">
              <Phone className="w-5 h-5  md:w-[27px] md:h-[35px]" />
            </div>
            <div className="">
              <p className="text-[0.625rem] md:text-base">Emergency Call</p>
              <p className="text-resq-dark-400 font-bold text-xs md:text-[1.375rem]/[1.5rem]">
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
