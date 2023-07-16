import { AiOutlineRight } from 'react-icons/ai';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Emergency from '../shared/Emergency';
import Message from '../shared/svg/Message';
import { footerLinks, footerLinksDesktop } from '../../utils/footer';

const Footer = () => {
  return (
    <footer>
      <div className="bg-resq-dark-300">
        <div className="resq-container pt-6 pb-8 lg:py-16 lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center gap-x-5">
            <Message className="w-8 h-8 lg:w-16 lg:h-16" />
            <p className="text-white leading-[1.15625rem] font-bold lg:text-2xl">
              Join our newsletter and get latest update
            </p>
          </div>
          <div className="flex mt-6 lg:mt-0">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your Email"
              className="outline-1 outline outline-white bg-transparent px-3 py-[1.125rem] w-9/12 text-white placeholder:text-resq-dark-100"
            />
            <button className="uppercase bg-resq-brand-main text-white w-3/12 px-3 py-[1.125rem] outline-1 outline outline-white hover:bg-resq-brand-dark duration-300 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="bg-resq-dark-200">
        <div className="resq-container pt-7 pb-[2.125rem] lg:pt-24 lg:pb-28 lg:flex lg:gap-x-24">
          <div>
            <p className="font-volkhov text-white text-2xl/6 ">ResQ</p>
            <p className="text-[#787878] text-[0.6875rem]/[0.9375rem] mt-4 mb-5 max-w-[260px]">
              Lorem ipsum dolor sit amet consectetur. Purus arcu id etiam leo at
              egestas cursus tempus molestie.{' '}
            </p>
            <Emergency textColor="white" />
          </div>

          <div className="mt-8 border-t border-solid border-resq-dark-100 pt-3 first-of-type:pt-0 lg:hidden">
            {footerLinks.map((f) => {
              return (
                <div
                  key={f.id}
                  className="flex justify-between first:pt-0 pt-4 pb-3 border-b border-solid border-resq-dark-100"
                >
                  <a className="text-white font-bold text-[0.8125rem]/[0.6875rem]">
                    {f.name}
                  </a>
                  <AiOutlineRight className="text-white" />
                </div>
              );
            })}
          </div>
          <div className="hidden lg:flex lg:gap-x-14 ">
            {footerLinksDesktop.map((f) => {
              return (
                <div key={f.id}>
                  <p className="text-white font-bold text-3xl">{f.name}</p>
                  <div className="mt-6 space-y-3">
                    {f.links?.map((l) => (
                      <div key={`flinks-${l}`} className="flex items-center">
                        <AiOutlineRight />
                        <span className="capitalize text-resq-body-text-2 text-[1.0625rem]">
                          {l}
                        </span>
                      </div>
                    ))}

                    {f.img ? (
                      <div>
                        {' '}
                        <img src={f.img} alt="" />{' '}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-resq-dark-200 border-t border-resq-dark-100 border-solid">
        <div className="resq-container pt-6 pb-8  flex flex-col items-center lg:flex-row lg:justify-between ">
          <p className="font-bold text-resq-body-text-2">
            ResQ, 2023 All rights reserved
          </p>
          <div className="flex  gap-1 mt-4">
            <span className="flex justify-center items-center w-8 h-8 rounded-full bg-resq-brand-main hover:bg-resq-brand-dark group duration-300 transition-colors lg:w-10 lg:h-10">
              <FiFacebook className="stroke-white stroke-1 group-hover:stroke-resq-light-100 duration-300 transition-colors" />
            </span>
            <span className="flex justify-center items-center w-8 h-8 rounded-full bg-resq-brand-main hover:bg-resq-brand-dark group duration-300 transition-colors   lg:w-10 lg:h-10">
              <FiTwitter className="stroke-white stroke-1 group-hover:stroke-resq-light-100 duration-300 transition-colors" />
            </span>
            <span className="flex justify-center items-center w-8 h-8 rounded-full bg-resq-brand-main hover:bg-resq-brand-dark group duration-300 transition-colors  lg:w-10 lg:h-10">
              <FiInstagram className="stroke-white stroke- group-hover:stroke-resq-light-100 duration-300 transition-colors1" />
            </span>
            <span className="flex justify-center items-center w-8 h-8 rounded-full bg-resq-brand-main hover:bg-resq-brand-dark group duration-300 transition-colors lg:w-10 lg:h-10 ">
              <FiLinkedin className="group-hover:stroke-resq-light-100 duration-300 transition-colors stroke-white stroke-1 " />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
