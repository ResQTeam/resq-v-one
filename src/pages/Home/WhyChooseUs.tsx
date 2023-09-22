import SmallTitleHeader from '../../components/shared/SmallTitleHeader';
import img from '../../assets/resq-whychoose-us-2.webp';
import Hands from '../../components/shared/svg/Hands';
import Settings from '../../components/shared/svg/Settings';
import People from '../../components/shared/svg/People';

const feats = [
  {
    text: ' Families & Properties Saved',
    num: '  7891',
    img: 'hands',
  },
  {
    text: '  Total Number of Requests',
    num: '  6542',
    img: 'settings',
  },
  {
    text: ' Dedicated And Trusted Workers',
    num: '  3275',
    img: 'people',
  },
];

const WhyChooseUs = () => {
  return (
    <section>
      <div className="resq-container pt-20 md:flex md:items-center md:gap-x-12 md:pt-28 lg:items-start lg:gap-x-28">
        <div className="md:w-1/2 md:max-w-[487px]">
          <SmallTitleHeader title="Why Choose Us" justifyCenter={false} />
          <h3 className="mt-2 max-w-[29.125rem] text-[0.9375rem]/[1.21875rem] font-bold text-resq-dark-400 md:mt-4 md:text-5xl md:leading-normal">
            Premium Rapid <br /> Response Service
          </h3>
          <p className="mt-3 max-w-[487px] text-[0.8125rem]/[1.375rem] md:mt-5">
            With ResQ, emergency responders are just a touch away. The website
            works by allowing users to quickly and easily contact the nearest
            emergency responders with just a few taps. This process is
            completely secure and private, so you can rest assured that your
            information remains safe and no one else will be able to access it.
          </p>

          <img src={img} alt="" className="mt-6 md:mt-8" />
          <div className="-mt-16 flex items-center justify-between bg-resq-brand-main px-[0.625rem] py-5 md:-mt-[5.45rem] md:px-6 md:py-8">
            <span className="text-[0.625rem] text-white md:text-lg ">
              Volunteers Wanted ASAP!
            </span>
            <button className="rounded-full bg-white px-4 py-1 text-[0.625rem]/[1.7125rem] text-resq-brand-main md:px-7 md:py-[0.375rem] md:text-lg/[1.7125rem] ">
              Apply Now
            </button>
          </div>
        </div>
        <div className="mt-2 md:mt-0 md:w-1/2 md:max-w-[637px]">
          <div className="divide-y-2 divide-white  bg-resq-brand-subtle px-6 md:divide-y-4 md:py-5">
            {feats.map((f) => (
              <div
                key={f.num}
                className="flex items-center justify-center gap-5 py-[3.75rem]  "
              >
                <div>
                  {f.img === 'hands' ? (
                    <Hands className="h-[4.375rem] w-[4.375rem] lg:h-32 lg:w-32" />
                  ) : f.img === 'settings' ? (
                    <Settings className="h-[4.375rem] w-[4.375rem] lg:h-32 lg:w-32" />
                  ) : (
                    <People className="h-[4.375rem] w-[4.375rem] lg:h-32 lg:w-32" />
                  )}
                </div>
                <div className="space-y-2">
                  <p className="text-4xl/[1.875rem] font-bold text-resq-dark-400 lg:text-[4.375rem] lg:leading-none">
                    {f.num}
                  </p>
                  <p className="text-[0.625rem]/3 capitalize md:text-lg/6">
                    {f.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
