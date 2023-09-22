import Phone from '../../components/shared/svg/Phone';

import { Link } from 'react-router-dom';
import frame1 from '../../assets/resq-frame-1.webp';
import frame2 from '../../assets/resq-frame-2.webp';
import frame3 from '../../assets/resq-frame-3.webp';
import frame4 from '../../assets/resq-frame-4.webp';

const Hero = () => {
  return (
    <section className="bg-resq-brand-subtle">
      <div className="resq-container pb-16 pt-5 md:flex md:justify-between md:pb-20 md:pt-24 lg:pr-0">
        <div>
          <h2 className="max-w-[16rem] text-[1.875rem]/[2.675rem] font-bold text-resq-dark-400 md:max-w-xl md:text-h1">
            Problem? <br /> Call Us Anytime!
          </h2>
          <p className="mt-4  max-w-[30.4375rem] text-xs/6 md:mt-6 md:text-lg/8">
            Connecting People in Need to Emergency Responders in Seconds Are you
            in an Emergency? Don't Panic — sign up in less than 60 seconds and
            get the closest responder to your location
          </p>
          <div className="mt-4 flex items-center gap-x-10 md:mt-6">
            <button className="flex items-center justify-center gap-x-[10px] rounded-[100px] bg-resq-brand-main px-[1.125rem] py-[0.8125rem] transition-colors duration-300 hover:bg-resq-brand-dark md:px-[1.6875rem]">
              <Phone className="h-4 w-4 md:h-6 md:w-6" />
              <span className="text-xs/3 text-white md:text-xl">
                Call Us Now
              </span>
            </button>
            <Link
              to="services"
              className="rounded-[100px] border border-resq-brand-main bg-white px-[1.125rem] py-[0.8125rem]  text-xs/3 font-bold text-resq-brand-main  transition-colors duration-300 hover:border-white hover:bg-resq-brand-dark hover:text-white md:px-[1.6875rem] md:text-xl"
            >
              View Services
            </Link>
          </div>
        </div>
        <div className="mt-8 flex gap-x-6 md:mt-0 md:gap-x-12 ">
          <div className="space-y-7 md:space-y-12">
            <img src={frame1} alt="" />
            <img src={frame3} alt="" />
          </div>
          <div className="space-y-7 pt-8 md:space-y-12">
            <img src={frame2} alt="" />
            <img src={frame4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
