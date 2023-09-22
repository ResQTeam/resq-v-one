import Phone from './svg/Phone';

const Emergency = ({ textColor }: { textColor: string }) => {
  return (
    <a href="tel:112" className="flex items-center gap-x-1 md:gap-x-3 ">
      <div className="flex h-[27px] w-[29px] items-center justify-center rounded-md bg-resq-brand-main md:h-[52px] md:w-[59px] md:rounded-[10px]">
        <Phone className="h-5 w-5  md:h-[35px] md:w-[27px]" />
      </div>
      <div className="">
        <p
          className={`text-[0.625rem] md:text-base ${
            textColor.toLowerCase() === 'black'
              ? 'text-resq-dark-100'
              : 'text-white'
          }`}
        >
          Emergency Call
        </p>
        <p
          className={`${
            textColor.toLowerCase() === 'black'
              ? 'text-resq-dark-400'
              : 'text-white'
          }  text-xs font-bold md:text-[1.375rem]/[1.5rem]`}
        >
          112
        </p>
      </div>
    </a>
  );
};

export default Emergency;
