import { FC, memo } from 'react';
import { IMember } from '../../types/members.ts';

interface MemberCardProps {
  memberData: IMember;
}

const MemberCard: FC<MemberCardProps> = memo(({memberData}) => {
  const {name, sfeduRank, confRank, imgLink} = memberData;

  return (
    <div
      className={'w-80 rounded-2xl flex flex-col relative bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl mb-10'}>
      <div className="rounded-xl bg-white p-4 sm:p-6 lg:p-8 h-full">
        <img className="mx-auto" src={imgLink} width="200" height="200" alt=""/>
        <p className="font-bold pt-6 pb-2.5 text-gray-900">{name}</p>
        <p className="text-gray-900">{sfeduRank}</p>
        <p className="text-gray-900">{confRank}</p>
      </div>
    </div>
  );
});

export default MemberCard;