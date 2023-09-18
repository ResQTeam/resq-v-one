type SmallTitleHeaderProps = { title: string; justifyCenter: boolean };

const SmallTitleHeader = ({ title, justifyCenter }: SmallTitleHeaderProps) => {
  return (
    <div
      className={`flex items-center ${
        justifyCenter ? 'justify-center' : 'justify-start'
      } gap-3`}
    >
      <span className="inline-block h-2 w-2 bg-resq-brand-main md:h-3 md:w-3"></span>
      <h2 className="ujtext-[0.8125rem]/[0.625rem] text-center uppercase tracking-widest md:text-lg/[1.78125rem]  ">
        {title}
      </h2>
    </div>
  );
};

export default SmallTitleHeader;
