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
    comment:
      'I love this emergency website! It’s so convenient and reliable. I can easily connect to an emergency responder when I’m in an emergency. ResQ is designed to keep me safe and I am very impressed',
  },
  {
    name: 'Nkechi Steward',
    job: 'A Level Student',
    img: customer2,
    rating: 5,
    id: 'bxchbdjhfbeiufheui48r87ey7',
    middle: true,
    comment:
      'ReQ is a lifesaver! I can instantly get in touch with an emergency responder in an emergency. The website is straightforward and ',
  },
  {
    name: 'James Obong',
    job: 'Marketing Assistant',
    img: customer3,
    rating: 4,
    id: 'd7yf87dy07dyv07dfvvhdbbhd',
    comment:
      'This ResQ is a must-have if you are ever in a difficult situation. The platform helps you get in touch with emergency responders quickly and it is very easy to use. I am very pleased with the level of protection it provides. Highly recommend it!',
  },
  {
    name: 'Iboro Ada',
    job: 'Product Manager',
    img: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwYmxhY2slMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    rating: 4,
    id: 'd7yf87sbhd63621',
    comment:
      'This ResQ is a must-have if you are ever in a difficult situation. The platform helps you get in touch with emergency responders quickly and it is very easy to use. I am very pleased with the level of protection it provides. Highly recommend it!',
    middle: true,
  },
  {
    name: 'Tunde Hakeem',
    job: 'Media and Personel',
    img: 'https://images.unsplash.com/photo-1620511450270-47162b983078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBtYW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    rating: 4,
    id: '2xvsyf87sbhd2ehv221',
    comment:
      'This ResQ is a must-have if you are ever in a difficult situation. The platform helps you get in touch with emergency responders quickly and it is very easy to use. I am very pleased with the level of protection it provides. Highly recommend it!',
  },
];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const activeDiv =
    activeSlide > 1 ? (activeSlide - 1) * -100 : (activeSlide - 1) * -90;
  return (
    <section>
      <div className="md:resq-container pb-20 pl-7 pt-20 md:pb-28 md:pt-28">
        <SmallTitleHeader title="Happy Customers" justifyCenter={true} />
        <h3 className="mt-3 text-center text-xl/[1.78125rem] font-bold  uppercase text-resq-dark-400 md:text-[3.125rem] ">
          What Our Customers Say
        </h3>

        <div className="mt-[3.8125rem] flex gap-x-5  overflow-x-clip md:mt-[5.3125rem]">
          {customers.map((c) => {
            return (
              <div
                key={c.id}
                className={`${
                  c.middle
                    ? 'bg-resq-brand-main text-white'
                    : 'border border-solid border-resq-light-grey bg-transparent'
                } relative min-w-[90%] max-w-[18.5rem] rounded-[5px] p-12 pb-[1.375rem] text-center transition-transform duration-300 md:min-w-[30%] md:max-w-[25rem] md:px-[3.75rem]`}
                style={{
                  transform: `translateX(${activeDiv}%)`,
                }}
              >
                <img
                  src={c.img}
                  alt={c.name}
                  className="absolute -top-8 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full object-cover"
                />
                <h4
                  className={`${
                    c.middle ? 'text-white' : 'text-resq-dark-400'
                  } mt-[0.8125rem] text-base/[1.125rem] font-bold capitalize md:text-xl/5`}
                >
                  {c.name}
                </h4>
                <p className="mt-[0.28125rem] text-xs/3">{c.job}</p>
                <p className="mt-[0.78125rem] text-sm">{c.comment}</p>
                <div className="mt-5 flex items-center justify-center">
                  <StarRenderd rating={c.rating} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-5 flex justify-center gap-3 ">
          {[...Array(customers.length)].map((_c, i) => {
            const activeValue = i + 1;
            return (
              <button
                key={`testimonial-button${i}`}
                className={`h-[0.625rem] w-[0.625rem]   rounded-full transition-all duration-300 md:h-5 md:w-5 ${
                  activeSlide === activeValue
                    ? 'bg-resq-brand-dark outline outline-1 outline-offset-2 outline-resq-brand-main'
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
