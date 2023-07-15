type SmallTitleHeaderProps = { title: string; justifyCenter: boolean };

const SmallTitleHeader = ({ title, justifyCenter }: SmallTitleHeaderProps) => {
  return (
    <div
      className={`flex items-center ${
        justifyCenter ? 'justify-center' : 'justify-start'
      } gap-x-1`}
    >
      <span className="w-2 h-2 md:w-3 md:h-3 inline-block bg-resq-brand-main"></span>
      <h2 className="text-center uppercase text-[0.8125rem]/[0.625rem] md:text-lg/[1.78125rem]  ">
        {title}
      </h2>
    </div>
  );
};

export default SmallTitleHeader;
