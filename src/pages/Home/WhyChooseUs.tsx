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
      <div className="resq-container pt-20 md:pt-28 md:flex md:gap-x-12 md:items-center lg:items-start lg:gap-x-28">
        <div className="md:w-1/2 md:max-w-[487px]">
          <SmallTitleHeader title="Why Choose Us" justifyCenter={false} />
          <h3 className="text-resq-dark-400 font-bold mt-2 md:mt-4 text-[0.9375rem]/[1.21875rem] md:text-5xl md:leading-normal max-w-[29.125rem]">
            Premium Rapid <br /> Response Service
          </h3>
          <p className="mt-3 md:mt-5 text-[0.8125rem]/[1.375rem] max-w-[487px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            mi, bibendum eu erat id, ultricies semper metus. Nunc dolor.
          </p>

          <img src={img} alt="" className="mt-6 md:mt-8" />
          <div className="bg-resq-brand-main py-5 px-[0.625rem] md:px-6 md:py-8 flex justify-between items-center -mt-16 md:-mt-[5.45rem]">
            <span className="text-[0.625rem] md:text-lg text-white ">
              Volunteers Wanted ASAP!
            </span>
            <button className="bg-white text-resq-brand-main rounded-full px-4 py-1 md:py-[0.375rem] md:px-7 text-[0.625rem]/[1.7125rem] md:text-lg/[1.7125rem] ">
              Apply Now
            </button>
          </div>
        </div>
        <div className="mt-2 md:mt-0 md:w-1/2 md:max-w-[637px]">
          <div className="bg-resq-light-300  md:py-5 px-6 divide-y-2 md:divide-y-4">
            {feats.map((f) => (
              <div
                key={f.num}
                className="flex items-center justify-center gap-5 py-[3.75rem] lg:w-3/5 lg:mx-auto "
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
                  <p className="text-resq-dark-400 text-4xl/[1.875rem] font-bold lg:text-[4.375rem] lg:leading-none">
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
