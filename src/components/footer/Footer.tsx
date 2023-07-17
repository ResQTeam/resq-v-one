import { AiOutlineRight } from 'react-icons/ai';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Emergency from '../shared/Emergency';
import Message from '../shared/svg/Message';
import { footerLinks, footerLinksDesktop } from '../../utils/footer';

const Footer = () => {
  return (
    <footer>
      <div className="bg-resq-dark-300">
        <div className="resq-container pb-8 pt-6 lg:flex lg:items-center lg:justify-between lg:py-16">
          <div className="flex items-center gap-x-5">
            <Message className="h-8 w-8 lg:h-16 lg:w-16" />
            <p className="font-bold leading-[1.15625rem] text-white lg:text-2xl">
              Join our newsletter and get latest update
            </p>
          </div>
          <div className="mt-6 flex lg:mt-0">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your Email"
              className="w-9/12 bg-transparent px-3 py-[1.125rem] text-white outline outline-1 outline-white placeholder:text-resq-dark-100"
            />
            <button className="w-3/12 bg-resq-brand-main px-3 py-[1.125rem] uppercase text-white outline outline-1 outline-white transition-colors duration-300 hover:bg-resq-brand-dark">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="bg-resq-dark-200">
        <div className="resq-container pb-[2.125rem] pt-7 lg:flex lg:gap-x-24 lg:pb-28 lg:pt-24">
          <div>
            <p className="font-volkhov text-2xl/6 text-white ">ResQ</p>
            <p className="mb-5 mt-4 max-w-[260px] text-[0.6875rem]/[0.9375rem] text-[#787878]">
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
                  className="flex justify-between border-b border-solid border-resq-dark-100 pb-3 pt-4 first:pt-0"
                >
                  <a className="text-[0.8125rem]/[0.6875rem] font-bold text-white">
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
                  <p className="text-3xl font-bold text-white">{f.name}</p>
                  <div className="mt-6 space-y-3">
                    {f.links?.map((l) => (
                      <div key={`flinks-${l}`} className="flex items-center">
                        <AiOutlineRight />
                        <span className="text-[1.0625rem] capitalize text-resq-body-text-2">
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
      <div className="border-t border-solid border-resq-dark-100 bg-resq-dark-200">
        <div className="resq-container flex flex-col  items-center pb-8 pt-6 lg:flex-row lg:justify-between ">
          <p className="font-bold text-resq-body-text-2">
            ResQ, 2023 All rights reserved
          </p>
          <div className="mt-4  flex gap-1">
            <span className="group flex h-8 w-8 items-center justify-center rounded-full bg-resq-brand-main transition-colors duration-300 hover:bg-resq-brand-dark lg:h-10 lg:w-10">
              <FiFacebook className="stroke-white stroke-1 transition-colors duration-300 group-hover:stroke-resq-light-100" />
            </span>
            <span className="group flex h-8 w-8 items-center justify-center rounded-full bg-resq-brand-main transition-colors duration-300 hover:bg-resq-brand-dark   lg:h-10 lg:w-10">
              <FiTwitter className="stroke-white stroke-1 transition-colors duration-300 group-hover:stroke-resq-light-100" />
            </span>
            <span className="group flex h-8 w-8 items-center justify-center rounded-full bg-resq-brand-main transition-colors duration-300 hover:bg-resq-brand-dark  lg:h-10 lg:w-10">
              <FiInstagram className="stroke- transition-colors1 stroke-white duration-300 group-hover:stroke-resq-light-100" />
            </span>
            <span className="group flex h-8 w-8 items-center justify-center rounded-full bg-resq-brand-main transition-colors duration-300 hover:bg-resq-brand-dark lg:h-10 lg:w-10 ">
              <FiLinkedin className="stroke-white stroke-1 transition-colors duration-300 group-hover:stroke-resq-light-100 " />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
