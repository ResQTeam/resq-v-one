import { FaStar } from 'react-icons/fa';

const StarRenderd = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-x-1 mt-3">
      {[...Array(5)].map((_star, i) => {
        const ratingValue = i + 1;
        return (
          <div key={`${i}-star`}>
            <FaStar
              className={`h-5 w-5 ${
                ratingValue <= rating ? ' text-yellow-300' : ' text-gray-200'
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StarRenderd;
