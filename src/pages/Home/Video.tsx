import { FaPlay } from 'react-icons/fa';
import vid from '../../assets/resq-video.webp';

const Video = () => {
  return (
    <section className="">
      <div className="pt-8 md:pt-28 relative">
        <img
          src={vid}
          alt=""
          className="h-64 w-full object-cover md:h-[40.5625rem]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center  space-y-2 pt-8 md:pt-28 min-w-[250px] md:space-y-12">
          <div className="flex justify-center">
            <button className="w-[1.875rem] h-[1.875rem] bg-resq-brand-main rounded-full md:w-28 md:h-28 flex justify-center items-center">
              <FaPlay className="fill-white text-sm md:text-6xl" />
            </button>
          </div>
          <p className="text-white text-2xl/5 font-bold capitalize w-full md:text-6xl/10 lg:text-6xl/7">
            Think Safety Today.
          </p>
          <p className="text-white text-2xl/5 font-bold capitalize w-full md:text-6xl/10 lg:text-6xl/7">
            Be Alive Tomorrow
          </p>
        </div>
      </div>
    </section>
  );
};

export default Video;
