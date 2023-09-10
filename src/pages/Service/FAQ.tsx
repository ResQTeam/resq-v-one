import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isAnswerShowing, setAnswerShowing] = useState(false);

  return (
    <article
      className="mb-4 cursor-pointer rounded-lg border border-solid p-4 md:p-6"
      onClick={() => setAnswerShowing((prev) => !prev)}
    >
      <div className="flex justify-between gap-8 ">
        <h2 className="text-600 inline-block text-[0.7255rem] font-semibold text-resq-dark-400 md:text-lg">
          {question}
        </h2>
        <button className="bg-transparent text-xl">
          {isAnswerShowing ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
