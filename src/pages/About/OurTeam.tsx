import SmallHeader3 from '../../components/shared/SmallHeader3';
import SmallTitleHeader from '../../components/shared/SmallTitleHeader';

import fire from '../../assets/resq-team-fire.webp';
import medical from '../../assets/resq-team-medical.webp';
import security from '../../assets/resq-team-security.webp';
import TeamMember from './TeamMember';

const teamMembers = [
  {
    name: 'Tomilola Faloye',
    title: 'Head of Fire Service',
    id: 'Tomi-457-abc',
    pic: fire,
  },
  {
    name: 'Ike Ikenna',
    title: 'Head of Medical Service',
    id: 'Ike-4sh7-abc',
    pic: medical,
  },
  {
    name: 'Tareh Oghene',
    title: 'Head of Fire Service',
    id: 'T-457-abc',
    pic: security,
  },
];

const OurTeam = () => {
  return (
    <section>
      <div className="resq-container pb-12 pt-[3.125rem] md:pb-28 md:pt-[7.4375rem] lg:gap-10">
        <SmallTitleHeader justifyCenter={true} title="Our Team" />
        <SmallHeader3 title="Meet Our Team" justify={true} />
        <div className="mt-6 space-y-4 md:flex md:gap-2 md:space-y-0 lg:gap-8">
          {teamMembers.map((member) => {
            return <TeamMember key={member.id} member={member} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
