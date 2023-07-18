type SmallHeaderProps = {
  title: string;
  justify: boolean;
};

const SmallHeader3 = ({ title, justify }: SmallHeaderProps) => {
  return (
    <h3
      className={`mt-[0.625rem]  text-xl/[1.78125rem] font-bold text-resq-dark-400  ${
        justify ? 'text-center md:mx-auto ' : 'text-left'
      } md:mt-2 md:max-w-[738px] md:text-[3.125rem]/[110%]`}
    >
      {title}
    </h3>
  );
};

export default SmallHeader3;
