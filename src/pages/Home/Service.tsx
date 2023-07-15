import { BsArrowRight } from 'react-icons/bs';

type ServiceProps = {
  img: string;
  title: string;
  bgColor: string;
  beforeBg: string;
};

const Service = ({ img, title, bgColor, beforeBg }: ServiceProps) => {
  return (
    <div
      className={`${bgColor} pt-8 px-9 pb-6 md:pt-[7.75rem] md:px-11 md:pb-[5.375rem] w-full min-w-[20.5rem] md:w-1/3 snap-start`}
    >
      <h4 className="text-white text-center font-bold text-lg/[1.78125rem] md:text-[2.5rem]/[3.375rem] pb-5 border-b-2 border-dashed border-b-white/70 md:pb-9">
        {title}
      </h4>
      <div
        className={`relative before:absolute ${beforeBg} before:-left-[0.375rem] before:-bottom-[0.375rem] before:w-full before:h-full before:z-[1]`}
      >
        <img
          src={img}
          alt=""
          className="mt-9 md:mt-[3.375rem] w-full  max-h-[213.05px] object-cover relative z-[2] hover:translate-y-[0.375rem] transition-all duration-500 "
        />
      </div>
      <div className="flex gap-x-2 items-center mt-5 md:mt-9">
        <p className="text-white/70 md:text-2xl/[2.1rem]">Select Service</p>
        <BsArrowRight className="fill-white md:w-[1.125rem] md:h-[1.125rem] mt-[2px]" />
      </div>
    </div>
  );
};

export default Service;
