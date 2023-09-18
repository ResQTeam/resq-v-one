import { Link } from 'react-router-dom';
import SmallHeader3 from '../../components/shared/SmallHeader3';
import SmallTitleHeader from '../../components/shared/SmallTitleHeader';
import ValueCard from './ValueCard';

const ourvalues: {
  id: string;
  cardType: 'excellence' | 'innovative' | 'teamwork';
}[] = [
  {
    cardType: 'excellence',
    id: '1m83vqrwpcuw',
  },
  {
    cardType: 'teamwork',
    id: '109c9eep0ccceeeeee',
  },
  {
    cardType: 'innovative',
    id: '9bbbbbbaaaaaababa',
  },
];

const OurValue = () => {
  return (
    <section>
      <div className="resq-container pt-[3.125rem] md:pt-44">
        <SmallTitleHeader justifyCenter={true} title="Our Value" />
        <SmallHeader3
          justify={true}
          title="The Story And Values Behind
 Our Company"
        />

        <div className="mt-14 md:mt-20">
          <div className="space-y-12 lg:flex lg:gap-8 lg:space-y-0">
            {ourvalues.map((v) => {
              return <ValueCard key={v.id} cardType={v.cardType} />;
            })}
          </div>
          <div className="mt-8 flex justify-center gap-5">
            <Link
              to="/contact"
              className="rounded-full border border-solid border-resq-dark-400 bg-white px-6 py-4 text-xs text-resq-dark-400 transition-colors duration-300 hover:bg-resq-brand-subtle md:px-9 md:text-lg"
            >
              Get In Touch
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-full bg-resq-dark-400 px-6 py-4 text-xs text-white transition-colors duration-300 hover:bg-resq-dark-300 md:px-9 md:text-lg"
            >
              <span>Our Services </span>{' '}
              <span className="inline-block">
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-3.0598e-07 7.5C-2.45463e-07 8.88447 0.410543 10.2378 1.17971 11.389C1.94888 12.5401 3.04213 13.4373 4.32122 13.9672C5.6003 14.497 7.00776 14.6356 8.36563 14.3655C9.7235 14.0954 10.9708 13.4287 11.9497 12.4497C12.9287 11.4708 13.5954 10.2235 13.8655 8.86563C14.1356 7.50776 13.997 6.1003 13.4672 4.82122C12.9373 3.54213 12.0401 2.44888 10.889 1.67971C9.73784 0.910543 8.38447 0.5 7 0.5C5.14458 0.503558 3.36617 1.2422 2.05418 2.55418C0.742198 3.86617 0.00355748 5.64458 -3.0598e-07 7.5ZM6.55577 4.67981L9.24807 7.10288C9.30316 7.15333 9.34716 7.21469 9.37725 7.28305C9.40735 7.35142 9.42289 7.4253 9.42289 7.5C9.42289 7.5747 9.40735 7.64858 9.37725 7.71694C9.34716 7.78531 9.30316 7.84667 9.24807 7.89711L6.55577 10.3202C6.44988 10.413 6.31186 10.4606 6.17128 10.4528C6.0307 10.4451 5.89875 10.3826 5.8037 10.2788C5.70864 10.1749 5.65804 10.0379 5.66274 9.89723C5.66745 9.75651 5.72707 9.62324 5.82884 9.52596L8.07692 7.5L5.82884 5.47404C5.77492 5.42679 5.73098 5.36925 5.69959 5.30479C5.6682 5.24034 5.65 5.17026 5.64606 5.09868C5.64212 5.02709 5.65251 4.95544 5.67662 4.88793C5.70074 4.82041 5.73809 4.75839 5.7865 4.70551C5.8349 4.65262 5.89338 4.60993 5.9585 4.57995C6.02362 4.54996 6.09408 4.53328 6.16573 4.53089C6.23738 4.5285 6.30879 4.54044 6.37577 4.56601C6.44275 4.59158 6.50394 4.63027 6.55577 4.67981Z"
                    fill="#CC5E28"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
