import medical from '../../assets/resq-medical-service.webp';
import fire from '../../assets/resq-fire-service.webp';
import security from '../../assets/resq-security-service.webp';
import Service from './Service';
import SmallTitleHeader from '../../components/shared/SmallTitleHeader';

const services = [
  {
    title: 'Medical Service',
    img: medical,
    bgColor: 'bg-resq-brand-main',
    beforeBg: 'before:bg-resq-brand-dark',
  },
  {
    title: 'Fire Service',
    img: fire,
    bgColor: 'bg-resq-brand-dark',
    beforeBg: 'before:bg-resq-brand-light',
  },
  {
    title: 'Security Service',
    img: security,
    bgColor: 'bg-resq-brand-light',
    beforeBg: 'before:bg-resq-brand-dark',
  },
];

const Services = () => {
  return (
    <section className="overflow-hidden ">
      <div className="relative pt-12 md:pt-[8.6875rem] ">
        <SmallTitleHeader title="Services" justifyCenter={true} />
        <h3 className="mt-2 text-center  text-resq-dark-400 font-bold text-xl/[1.78125rem] md:text-[3.125rem]/[1.78125rem] md:mt-5">
          Services We're Offering
        </h3>

        <div className="mt-4 md:mt-[4.375rem] flex overflow-x-auto snap-mandatory">
          {services.map((service) => (
            <Service
              key={service.title}
              img={service.img}
              beforeBg={service.beforeBg}
              title={service.title}
              bgColor={service.bgColor}
            />
          ))}
        </div>
        <div className="mt-5 md:mt-8 flex justify-center">
          <button className="bg-resq-brand-main text-white text-xs/3  font-bold py-2 px-6 md:px-[4.5rem] md:py-7 md:text-3xl/6 rounded-full hover:bg-resq-brand-dark">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
