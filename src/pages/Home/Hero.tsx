import { BsFillPlayCircleFill } from 'react-icons/bs';

import Phone from '../../components/shared/svg/Phone';

import frame1 from '../../assets/resq-frame-1.webp';
import frame2 from '../../assets/resq-frame-2.webp';
import frame3 from '../../assets/resq-frame-3.webp';
import frame4 from '../../assets/resq-frame-4.webp';

const Hero = () => {
  return (
    <section className="bg-resq-brand-subtle">
      <div className="resq-container pt-5 pb-16 md:pt-24 md:pb-20 md:flex md:justify-between lg:pr-0">
        <div>
          <h2 className="text-[1.875rem]/[2.675rem] font-bold text-resq-dark-400 max-w-[16rem] md:max-w-xl md:text-h1">
            Problem? Call Us Anytime!
          </h2>
          <p className="mt-4  text-xs/6 max-w-[30.4375rem] md:mt-6 md:text-lg/8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
            nec gravida ipsum pulvinar vel non.
          </p>
          <div className="mt-4 flex gap-x-10 items-center md:mt-6">
            <button className="bg-resq-brand-main rounded-[100px] py-[0.8125rem] px-[1.125rem] md:px-[1.6875rem] flex justify-center items-center gap-x-[10px] hover:bg-resq-brand-dark duration-300 transition-colors">
              <Phone className="w-4 h-4 md:w-6 md:h-6" />
              <span className="text-xs/3 md:text-xl text-white">
                Call Us Now
              </span>
            </button>
            <button className="flex gap-x-2 items-center">
              <div className="relative w-5 h-5 md:w-9 md:h-9 rounded-full flex justify-center items-center border-l-2 border-resq-brand-main border-solid hover:border-resq-brand-dark duration-300 transition-all  ">
                <BsFillPlayCircleFill className="fill-resq-dark-100 w-3 h-3 md:w-6 md:h-6" />
              </div>
              <span className="text-resq-dark-400 text-xs md:text-base font-bold hover:text-resq-dark-200 duration-300 transition-colors">
                Learn More
              </span>
            </button>
          </div>
        </div>
        <div className="mt-8 flex gap-x-6 md:gap-x-12 md:mt-0 ">
          <div className="space-y-7 md:space-y-12">
            <img src={frame1} alt="" />
            <img src={frame3} alt="" />
          </div>
          <div className="pt-8 space-y-7 md:space-y-12">
            <img src={frame2} alt="" />
            <img src={frame4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
