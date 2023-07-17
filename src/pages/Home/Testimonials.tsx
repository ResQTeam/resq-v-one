import SmallTitleHeader from '../../components/shared/SmallTitleHeader';
import StarRenderd from '../../components/shared/StarRendered';

import customer1 from '../../assets/resq-customer-1.png';
import customer2 from '../../assets/resq-customer-2.png';
import customer3 from '../../assets/resq-customer-3.png';
import { useState } from 'react';

const customers = [
  {
    name: 'Adetobi Henry',
    job: 'Nursing Assistant',
    img: customer1,
    rating: 4,
    id: 'kdjyhdbyehfyegfyweyfey',
  },
  {
    name: 'Nkechi Steward',
    job: 'A Level Student',
    img: customer2,
    rating: 5,
    id: 'bxchbdjhfbeiufheui48r87ey7',
    middle: true,
  },
  {
    name: 'James Obong',
    job: 'Marketing Assistant',
    img: customer3,
    rating: 4,
    id: 'd7yf87dy07dyv07dfvvhdbbhd',
  },
];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const activeDiv =
    activeSlide > 1 ? (activeSlide - 1) * -100 : (activeSlide - 1) * -90;
  return (
    <section>
      <div className="pt-20 md:pt-28 pl-7 pb-20 md:pb-28 md:resq-container">
        <SmallTitleHeader title="Happy Customers" justifyCenter={true} />
        <h3 className="text-resq-dark-400 text-center font-bold mt-3  text-xl/[1.78125rem] md:text-[3.125rem] uppercase ">
          What Our Customers Say
        </h3>

        <div className="mt-[3.8125rem] md:mt-[5.3125rem] overflow-x-clip  flex gap-x-5">
          {customers.map((c) => {
            return (
              <div
                key={c.id}
                className={`${
                  c.middle
                    ? 'bg-resq-brand-main text-white'
                    : 'bg-transparent border border-solid border-resq-light-grey'
                } p-12 pb-[1.375rem] md:px-[3.75rem] rounded-[5px] text-center relative max-w-[18.5rem] min-w-[90%] md:min-w-[30%] md:max-w-[25rem] transition-transform duration-300`}
                style={{
                  transform: `translateX(${activeDiv}%)`,
                }}
              >
                <img
                  src={c.img}
                  alt={c.name}
                  className="absolute left-1/2 -translate-x-1/2 -top-8"
                />
                <h4
                  className={`${
                    c.middle ? 'text-white' : 'text-resq-dark-400'
                  } text-base/[1.125rem] mt-[0.8125rem] capitalize font-bold md:text-xl/5`}
                >
                  {c.name}
                </h4>
                <p className="text-xs/3 mt-[0.28125rem]">{c.job}</p>
                <p className="text-[0.625rem]/5 mt-[0.78125rem]">
                  Aliqua id fugiat nostrud irure ex duis ea quis quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim.
                </p>
                <div className="mt-5 flex justify-center items-center">
                  <StarRenderd rating={c.rating} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-2 mt-5 md:hidden">
          {[...Array(customers.length)].map((_c, i) => {
            const activeValue = i + 1;
            return (
              <button
                key={`testimonial-button${i}`}
                className={`w-[0.625rem] h-[0.625rem] rounded-full transition-all duration-300 ${
                  activeSlide === activeValue
                    ? 'bg-resq-brand-dark outline-1 outline outline-offset-2 outline-resq-brand-main'
                    : 'bg-resq-light-300'
                }`}
                onClick={() => setActiveSlide(activeValue)}
              ></button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
