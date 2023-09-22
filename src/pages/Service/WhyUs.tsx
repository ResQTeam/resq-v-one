import { AiOutlineRight } from 'react-icons/ai';
import { PiFilePdfDuotone } from 'react-icons/pi';
import { PiFileZip } from 'react-icons/pi';
import whyUsFrame from '../../assets/resq-frame-5.png';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  return (
    <section>
      <div className="resq-container">
        <div className="my-8 justify-between bg-resq-service-hero-bg md:flex md:bg-transparent">
          <div className="bg-resq-service-hero-bg p-6 md:mt-8 md:h-[24rem] md:w-2/5 md:p-8 ">
            <h2 className="mb-3 text-[1.1rem]  font-bold text-resq-dark-400 md:pt-9  md:text-3xl">
              Services
            </h2>
            <div className="flex cursor-pointer items-center justify-between bg-resq-brand-main px-4 py-3 text-left md:px-8 md:py-4 md:text-center">
              <h6 className="text-[0.8125rem] md:text-xl">
                Fire And Rescue Service
              </h6>
              <AiOutlineRight className="text-xl md:text-2xl" />
            </div>

            <div className="flex cursor-pointer items-center justify-between px-4 py-3 text-left md:px-8 md:py-4 md:text-center">
              <h6 className="text-[0.8125rem] md:text-xl">Medical Service</h6>
              <AiOutlineRight className="text-xl md:text-2xl" />
            </div>

            <div className="flex cursor-pointer items-center justify-between px-4 py-3 text-left md:px-8 md:py-4 md:text-center">
              <h6 className="text-[0.8125rem] md:text-xl">Security Service</h6>
              <AiOutlineRight className="text-xl md:text-2xl" />
            </div>

            <div className="flex cursor-pointer items-center justify-between px-4 py-3 text-left md:px-8 md:py-4 md:text-center">
              <h6 className="text-[0.8125rem] md:text-xl">
                24/7 Call Assitance
              </h6>
              <AiOutlineRight className="text-xl md:text-2xl" />
            </div>
          </div>
          <div className="pb-8 pt-8">
            <img src={whyUsFrame} />
          </div>
        </div>
        <div className="flex-row-reverse justify-between md:flex">
          <div className="md:-mt-12 md:w-3/5 md:px-10 ">
            <h4 className="mt-3 max-w-[33.0625rem] text-[1rem]/[1.21875rem] font-bold text-resq-dark-400 md:mt-5 md:text-3xl/9">
              Why Us For Nationwide Emergency Response Service?
            </h4>
            <p className="mt-4 text-[0.8125rem]/6 md:mt-6 md:text-lg/8">
              If you happen to be in a medical, fire, or other life-threatening
              emergency, the help you need is only one tap away. We provide fast
              and reliable emergency contact services
            </p>
            <p className="mt-4  text-[0.8125rem]/6 text-resq-brand-main md:mt-12 md:text-lg/8 ">
              Proactively envisioned emergency service based expertise company
              with reliable partners.
            </p>

            <p className="mt-4 text-[0.8125rem]/6 md:mt-6 md:text-lg/8">
              If you happen to be in a medical, fire, or other life-threatening
              emergency, the help you need is only one tap away. We provide fast
              and reliable emergency contact services
            </p>
          </div>
          <div className="mt-4 bg-resq-service-hero-bg p-10 md:-mt-20 md:h-[24rem] md:w-2/5 md:p-8 ">
            <h3 className="mt-3 max-w-[29.125rem] text-[0.9375rem]/[1.21875rem] font-bold text-resq-dark-400 md:mt-5 md:text-3xl/9">
              Download
            </h3>
            <div className="mx-auto my-4 w-full border border-solid border-resq-dark-500"></div>
            <h6 className="text-[0.8125rem] md:text-xl">
              One-On-one customer service with full guide.
            </h6>
            <Link
              to="/"
              className="mt-4 flex w-2/3 items-center justify-start gap-2 bg-resq-brand-main p-2 text-center text-white md:w-3/5 md:gap-4 md:p-4 md:px-8"
            >
              <PiFilePdfDuotone className="text-xl md:text-2xl" />
              <span className="text-[0.5625rem] md:text-lg">Document.pdf</span>
            </Link>
            <Link
              to="/"
              className="mt-4 flex w-2/3 items-center justify-start gap-2 bg-resq-brand-main p-2 text-center text-white md:w-3/5 md:gap-4 md:p-4 md:px-8"
            >
              <PiFileZip className="text-xl md:text-2xl" />
              <span className="text-[0.5625rem] md:text-lg">Document.zip</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
