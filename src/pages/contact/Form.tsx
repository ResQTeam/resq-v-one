import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { IoBookOutline } from 'react-icons/io5';
import { LuEdit } from 'react-icons/lu';

const Form = () => {
  return (
    <section className="mt-12 bg-resq-service-hero-bg md:mt-28">
      <div className="resq-container py-10  md:py-32">
        <h2 className="text-center text-xl font-bold leading-[130%] tracking-[-0.2px] text-resq-dark-400 md:text-[3.125rem]">
          Contact Us Anytime
        </h2>
        <p className="mx-auto mt-3 max-w-[622px] text-center text-[0.625rem] leading-[175%] md:text-lg">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>

        <form className="mt-6 space-y-3 bg-white px-5 py-7 shadow-medium md:mt-16 md:px-[6.25rem] md:py-24">
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder=" "
              className="peer w-full border border-solid border-resq-brand-main px-10 py-4  focus:outline-none focus:outline-offset-0  focus:placeholder:hidden focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-resq-brand-dark md:py-[1.125rem]"
            />
            <label
              htmlFor="name"
              className=" absolute left-10 top-1/2 -translate-y-1/2 bg-white px-1 transition-transform duration-300 peer-focus:-translate-y-10 peer-focus:text-xs   peer-[:not(:placeholder-shown)]:-translate-y-10 peer-[:not(:placeholder-shown)]:text-xs"
            >
              Name
            </label>
            <FiUser className="absolute left-5 top-1/2  -translate-y-1/2 stroke-resq-brand-main " />
          </div>
          <div className="relative">
            <input
              type="text"
              id="email"
              placeholder=" "
              className="peer w-full border border-solid border-resq-brand-main px-10 py-4  focus:outline-none focus:outline-offset-0  focus:placeholder:hidden focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-resq-brand-dark md:py-[1.125rem]"
            />
            <label
              htmlFor="email"
              className=" absolute left-10 top-1/2 -translate-y-1/2 bg-white px-1 transition-transform duration-300 peer-focus:-translate-y-10 peer-focus:text-xs   peer-[:not(:placeholder-shown)]:-translate-y-10 peer-[:not(:placeholder-shown)]:text-xs"
            >
              Email
            </label>
            <AiOutlineMail className="absolute left-5 top-1/2  -translate-y-1/2 stroke-resq-brand-main " />
          </div>
          <div className="relative">
            <input
              type="text"
              id="phone"
              placeholder=" "
              className="peer w-full border border-solid border-resq-brand-main px-10 py-4  focus:outline-none focus:outline-offset-0  focus:placeholder:hidden focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-resq-brand-dark md:py-[1.125rem]"
            />
            <label
              htmlFor="phone"
              className=" absolute left-10 top-1/2 -translate-y-1/2 bg-white px-1 transition-transform duration-300 peer-focus:-translate-y-10 peer-focus:text-xs   peer-[:not(:placeholder-shown)]:-translate-y-10 peer-[:not(:placeholder-shown)]:text-xs"
            >
              Phone
            </label>
            <BsTelephone className="absolute left-5 top-1/2  -translate-y-1/2 stroke-resq-brand-main " />
          </div>
          <div className="relative">
            <input
              type="text"
              id="service"
              placeholder=" "
              className="peer w-full border border-solid border-resq-brand-main px-10 py-4  focus:outline-none focus:outline-offset-0  focus:placeholder:hidden focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-resq-brand-dark md:py-[1.125rem]"
            />
            <label
              htmlFor="service"
              className=" absolute left-10 top-1/2 -translate-y-1/2 bg-white px-1 transition-transform duration-300 peer-focus:-translate-y-10 peer-focus:text-xs   peer-[:not(:placeholder-shown)]:-translate-y-10 peer-[:not(:placeholder-shown)]:text-xs"
            >
              Service you need
            </label>
            <IoBookOutline className="absolute left-5 top-1/2  -translate-y-1/2 stroke-resq-brand-main " />
          </div>
          <div className="relative">
            <textarea
              id="note"
              placeholder=" "
              className="peer w-full border border-solid border-resq-brand-main px-10 py-4  focus:outline-none focus:outline-offset-0  focus:placeholder:hidden focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-resq-brand-dark md:py-[1.125rem]"
            ></textarea>
            <label
              htmlFor="note"
              className=" absolute left-10 top-1/2 -translate-y-1/2 bg-white px-1 transition-transform duration-300 peer-focus:-translate-y-10 peer-focus:text-xs   peer-[:not(:placeholder-shown)]:-translate-y-10 peer-[:not(:placeholder-shown)]:text-xs"
            >
              Any Note For us
            </label>
            <LuEdit className="absolute left-5 top-1/2  -translate-y-1/2 stroke-resq-brand-main " />
          </div>

          <button className="mt-5 w-full bg-resq-brand-main py-2 text-center font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-resq-brand-dark md:py-5">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
