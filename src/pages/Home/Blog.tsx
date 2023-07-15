import SmallTitleHeader from '../../components/shared/SmallTitleHeader';
import img1 from '../../assets/resq-blog-security.webp';
import img2 from '../../assets/resq-blog-security2.webp';

const Blog = () => {
  return (
    <section>
      <div className="resq-container pt-20 md:pt-28">
        <SmallTitleHeader title="Blog" justifyCenter={true} />
        <h3 className="text-resq-dark-400 text-xl/7 font-bold md:text-[3.125rem]/[2.409375rem] mt-2 md:mt-5 text-center">
          Be First Who Read News
        </h3>
        <div className="mt-6 md:mt-12 space-y-8 md:space-y-0 md:flex md:justify-between md:gap-10">
          <div>
            <div>
              <img src={img1} alt="" />
            </div>
            <div className="shadow-medium px-5  md:px-8 py-6 md:pt-11">
              <div className=" flex justify-between items-center md:justify-start md:gap-x-5">
                <span className="block bg-resq-light-200 text-resq-dark-100 rounded-full p-2 text-[0.8125rem]/[1.125rem] md:tracking-wider md:uppercase md:rounded-none md:border-t md:border-b md:border-resq-brand-main md:text-resq-dark-400 md:p-0 md:py-1 md:bg-transparent">
                  Security Tips
                </span>
                <span className="block bg-resq-light-200 text-resq-dark-100 rounded-full p-2 text-[0.8125rem]/[0.625rem] md:tracking-wider md:uppercase md:rounded-none md:border-t md:border-b md:border-resq-brand-main md:text-resq-dark-400 md:p-0 md:py-2 md:bg-transparent">
                  Feb 2022, 2023
                </span>
              </div>
              <h4 className="text-resq-dark-400 font-bold mt-3 md:mt-5 text-[0.9375rem]/[1.21875rem] md:text-3xl/9 max-w-[29.125rem]">
                The Most Helpful Security Tips Of The Modern World
              </h4>
              <p className="mt-3 md:mt-5 text-[0.8125rem]/[1.375rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui mi, bibendum eu erat id, ultricies semper metus. Nunc dolor.
              </p>
            </div>
          </div>
          <div>
            <div className="relative">
              <img src={img2} alt="" />
              <button className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-2 hover:text-white duration-500 transition-colors rounded-full border-resq-brand-main border border-solid text-resq-brand-main text-[0.8125rem]/[1.05rem]">
                View More
              </button>
            </div>
            <div className="shadow-medium px-5 md:px-8 py-6 md:pt-11">
              <div className=" flex justify-between items-center md:justify-start md:gap-x-5">
                <span className="block bg-resq-light-200 text-resq-dark-100 rounded-full p-2 text-[0.8125rem]/[1.125rem] md:tracking-wider md:uppercase md:rounded-none md:border-t md:border-b md:border-resq-brand-main md:text-resq-dark-400 md:p-0 md:py-1 md:bg-transparent">
                  Security Tips
                </span>
                <span className="block bg-resq-light-200 text-resq-dark-100 rounded-full p-2 text-[0.8125rem]/[0.625rem] md:tracking-wider md:uppercase md:rounded-none md:border-t md:border-b md:border-resq-brand-main md:text-resq-dark-400 md:p-0 md:py-2 md:bg-transparent">
                  Feb 2022, 2023
                </span>
              </div>
              <h4 className="text-resq-dark-400 font-bold mt-3 md:mt-5 text-[0.9375rem]/[1.21875rem] md:text-3xl/9 max-w-[29.125rem]">
                The Most Helpful Security Tips Of The Modern World
              </h4>
              <p className="mt-3 md:mt-5 text-[0.8125rem]/[1.375rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui mi, bibendum eu erat id, ultricies semper metus. Nunc dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
