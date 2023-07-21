import { Dispatch, FC, memo, SetStateAction } from 'react';
import MembersCardsContainer from './MembersCardsContainer.tsx';
import { internationalCommittee, organisingCommittee } from './memberData.ts';
import { useHeaderTheme } from '../../hooks/useHeaderTheme.ts';
import { HeaderThemes } from '../../types/headerThemes.ts';

const MembersSection: FC<{
  setHeaderTheme: Dispatch<SetStateAction<HeaderThemes>>
}> = memo(({setHeaderTheme}) => {
  const themeRef = useHeaderTheme(HeaderThemes.light, setHeaderTheme);
  return (
    <section ref={themeRef} className="bg-white">
      <div className="container mx-auto py-6 ">
        <h1 id={'members-organising'} className="font-bold text-3xl h-4 mb-16 xs:px-6">ОРГАНИЗАЦИОННЫЙ
          КОМИТЕТ КОНФЕРЕНЦИИ</h1>
        <MembersCardsContainer title={'Сопредседатели'}
          members={organisingCommittee.coChairs}/>
        <MembersCardsContainer title={'Члены оргкомитета'}
          members={organisingCommittee.members}/>
        <h1 id={'members-international'} className="font-bold text-3xl h-4  mb-16 xs:px-6">МЕЖДУНАРОДНЫЙ
          ПРОГРАММНЫЙ КОМИТЕТ КОНФЕРЕНЦИИ</h1>
        <MembersCardsContainer title={'Председатель'}
          members={internationalCommittee.chairs}/>
        <MembersCardsContainer title={'Члены программного комитета'}
          members={internationalCommittee.members}/>
      </div>
    </section>
  );
});

export default MembersSection;