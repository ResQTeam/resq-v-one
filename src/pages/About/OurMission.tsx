import SmallHeader3 from '../../components/shared/SmallHeader3';
import SmallTitleHeader from '../../components/shared/SmallTitleHeader';

import security from '../../assets/resq-blog-security.webp';
import fire from '../../assets/resq-about-fire.webp';
import medical from '../../assets/resq-about-medical.webp';

const OurMission = () => {
  return (
    <section>
      <div className="resq-container pt-[3.125rem] md:flex md:gap-5 md:pt-[7.4375rem] lg:gap-10">
        <div className=" md:w-1/2 lg:w-2/5">
          <SmallTitleHeader title="our mission" justifyCenter={false} />
          <SmallHeader3 title="Ipsum ut sc Phasellus" justify={false} />
          <p className="mt-[0.625rem] max-w-[495px] text-[0.8125rem]/[1.3125rem]">
            Lorem ipsum dolor sit amet consectetur. Commodo tempus arcu cras
            cras dis mattis. Cursus adipiscing ac porta varius velit ut nibh.
            Phasellus id non phasellus phasellus tellus consequat.
          </p>
          <img
            src={fire}
            alt="fire man in with hose "
            className="mt-2 md:mt-16"
          />
        </div>
        <div className="mt-[0.625rem] md:w-1/2 lg:w-3/5 lg:max-w-[644px]">
          <img src={security} alt="man in a security wear" className="w-full" />
          <img
            src={medical}
            alt="woman dress in a labcoat with stethoscope"
            className="mt-[0.625rem] w-full"
          />{' '}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
