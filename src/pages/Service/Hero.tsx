import SmallTitleHeader from '../../components/shared/SmallTitleHeader';
import HeroFrame from '../../assets/resq-emergency.png';
const ServiceHero = () => {
  return (
    <section>
      <div className=" w-full md:flex md:justify-between lg:pr-0">
        <div className="items-left flex flex-col justify-center bg-resq-service-hero-bg px-10 py-12 text-left md:w-2/3">
          <SmallTitleHeader title="About The Services" justifyCenter={false} />
          <h2 className="pt-2 text-2xl font-bold text-resq-dark-400  md:max-w-2xl md:text-6xl lg:text-5xl  ">
            Emergency <br /> Response Service
          </h2>
          
        </div>

        <div>
          <img src={HeroFrame} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
