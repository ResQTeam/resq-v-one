import { useState } from 'react';
import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai'

interface FAQProps {
  id: Number;
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ id, question, answer }) => {
  const [isAnswerShowing, setAnswerShowing] = useState(false);

  return (
    <article className="md:p-6 p-4 rounded-lg cursor-pointer border-solid border mb-4" onClick={() => setAnswerShowing((prev) => !prev)}>
      <div className='flex justify-between gap-8 '>
        <h2 className='text-resq-dark-400 font-semibold inline-block text-[0.7255rem] text-600 md:text-lg'>{question}</h2>
        <button className="bg-transparent text-xl">
          {isAnswerShowing ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
