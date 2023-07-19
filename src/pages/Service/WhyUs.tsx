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
              <h6 className="md:text-xl text-[0.8125rem]">Fire And Rescue Service</h6>
              <AiOutlineRight className="text-xl md:text-2xl" />
            </div>

            <div className="flex cursor-pointer items-center justify-between px-4 py-3 text-left md:px-8 md:py-4 md:text-center">
              <h6 className="md:text-xl text-[0.8125rem]">Medical Service</h6>
              <AiOutlineRight className="text-xl md:text-2xl" />
            </div>

            <div className="flex cursor-pointer items-center justify-between px-4 py-3 text-left md:px-8 md:py-4 md:text-center">
              <h6 className="md:text-xl text-[0.8125rem]">Security Service</h6>
              <AiOutlineRight className="text-xl md:text-2xl" />
            </div>

            <div className="flex cursor-pointer items-center justify-between px-4 py-3 text-left md:px-8 md:py-4 md:text-center">
              <h6 className="md:text-xl text-[0.8125rem]">24/7 Call Assitance</h6>
              <AiOutlineRight className="text-xl md:text-2xl" />
            </div>
          </div>
          <div className="pb-8 pt-8">
            <img src={whyUsFrame} />
          </div>
        </div>
        <div className="flex-row-reverse justify-between md:flex">
          <div className='md:w-3/5 md:px-10 md:-mt-12 '>
            <h4 className="mt-3 max-w-[33.0625rem] text-[1rem]/[1.21875rem] font-bold text-resq-dark-400 md:mt-5 md:text-3xl/9">
            Why Us For Nationwide Emergency Response Service?
            </h4>
            <p className="mt-4 text-[0.8125rem]/6 md:mt-6 md:text-lg/8">
            Lorem ipsum dolor sit amet consectetur. Fusce non ut urna aliquet. Arcu cras imperdiet pharetra pharetra amet. Vehicula fermentum hac fermentum urna risus maecenas magna. Pellentesque porta sapien non egestas. In vest maecenas magna. Pellentesque porta sapien non egestas.
            </p>
            <p className="mt-4  text-[0.8125rem]/6 text-resq-brand-main md:mt-12 md:text-lg/8 ">
              Proactively envisioned emergency service based expertise company
              with reliable partners.
            </p>

            <p className="mt-4 text-[0.8125rem]/6 md:mt-6 md:text-lg/8">
              Lorem ipsum dolor sit amet consectetur. Hendrerit lorem velit
              augue mus ornare imperdiet. Ornare magna egestas consectetur vel.
              Et sem odio sodales pretium.
            </p>
          </div>
          <div className="bg-resq-service-hero-bg p-10 mt-4 md:-mt-20 md:h-[24rem] md:w-2/5 md:p-8 ">
            <h3 className="mt-3 max-w-[29.125rem] text-[0.9375rem]/[1.21875rem] font-bold text-resq-dark-400 md:mt-5 md:text-3xl/9">
              Download
            </h3>
            <div className="mx-auto my-4 w-full border border-solid border-resq-dark-500"></div>
            <h6 className='text-[0.8125rem] md:text-xl'>One-On-one customer service with full guide.</h6>
            <Link to="/" className="flex items-center justify-start gap-2 md:gap-4 text-center p-2 bg-resq-brand-main w-2/3 md:w-3/5 md:px-8 md:p-4 mt-4 text-white">
              <PiFilePdfDuotone className="md:text-2xl text-xl" />
              <span className='text-[0.5625rem] md:text-lg'>Document.pdf</span>
            </Link>
            <Link to="/" className="flex items-center justify-start gap-2 md:gap-4 text-center p-2 bg-resq-brand-main w-2/3 md:w-3/5 md:px-8 md:p-4 mt-4 text-white">
              <PiFileZip className="md:text-2xl text-xl" />
               <span className='text-[0.5625rem] md:text-lg'>Document.zip</span>
            </Link>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
