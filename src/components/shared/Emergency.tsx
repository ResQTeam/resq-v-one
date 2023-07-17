import Phone from './svg/Phone';

const Emergency = ({ textColor }: { textColor: string }) => {
  return (
    <div className="flex items-center gap-x-1 md:gap-x-3 ">
      <div className="bg-resq-brand-main w-[29px] h-[27px] md:w-[59px] md:h-[52px] flex justify-center items-center rounded-md md:rounded-[10px]">
        <Phone className="w-5 h-5  md:w-[27px] md:h-[35px]" />
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
          } font-bold text-xs md:text-[1.375rem]/[1.5rem]`}
        >
          777 657 0000
        </p>
      </div>
    </div>
  );
};

export default Emergency;
