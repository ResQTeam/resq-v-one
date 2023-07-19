import { useState } from 'react';
import { faqs } from '../../utils/dataFaq';
import FAQ from './FAQ';
import FaqSideBar from './FaqSideBar';

interface FAQData {
  id: Number;
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Main Questions');
  const categories = [
    'Main Questions',
    'Common Queries',
    'General Questions',
    'Legal information',
  ];
  return (
    <section>
      <div className="resq-container pb-20 pl-7 pt-20 md:pt-28">
        <h3 className="mt-3 text-center text-xl/[1.78125rem] font-bold uppercase text-resq-dark-400 md:text-[3.125rem]">
          Frequently Asked Questions
        </h3>
        <div className="mt-4 gap-16 bg-resq-service-hero-bg p-4 md:mt-[4.375rem] md:flex md:bg-transparent">
          <div className="  mb-4 bg-resq-service-hero-bg md:h-[24rem] md:w-2/5">
            <FaqSideBar
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>
          <div className="w-full ">
            {faqs.map(({ id, question, answer }: FAQData) => (
              <FAQ key={id} question={question} answer={answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
