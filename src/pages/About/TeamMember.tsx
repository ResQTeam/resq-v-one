import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

type TeamMemberProp = {
  member: {
    name: string;
    id: string;
    title: string;
    pic: string;
  };
};

const TeamMember = ({ member }: TeamMemberProp) => {
  return (
    <div className="md:w-1/3">
      <img
        src={member.pic}
        alt={`${member.title} ${member.name}`}
        className="w-full object-cover"
      />
      <div className="relative bg-resq-dark-400 px-5 py-4 text-white md:px-6 md:pb-7 md:pt-6">
        <div className="absolute -top-5 right-0 flex max-h-[40px] w-2/5 max-w-[6rem] items-center gap-2 bg-resq-brand-main px-3 py-3 md:px-4 md:py-5 lg:max-h-max">
          <div>
            <AiOutlineTwitter className="self-start fill-resq-dark-400 " />
          </div>
          <div>
            <FaFacebook className="self-start fill-resq-dark-400 " />
          </div>

          <div>
            <AiOutlineInstagram className="self-start fill-resq-dark-400 " />
          </div>
        </div>
        <p className="text[0.9375rem]/[1.07rem] font-[500] md:text-xl/[1.43125rem]">
          {member.name}
        </p>
        <p className="mt-1 text-[0.625rem] text-white/[0.66] md:mt-[0.625rem] md:text-sm">
          {member.title}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
