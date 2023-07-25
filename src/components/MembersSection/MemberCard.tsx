import { FC, memo } from 'react';
import { IMember } from '../../types/members.ts';

interface MemberCardProps {
  memberData: IMember;
}

const MemberCard: FC<MemberCardProps> = memo(({memberData}) => {
  const {name, sfeduRank, confRank, imgLink, sfeduLink} = memberData;

  return (
    <div
      className={'w-80 rounded-2xl flex flex-col relative bg-gradient-to-r from-green-300 via-mantis-500 to-green-700 p-1 shadow-xl mb-10'}>
      <div className="rounded-xl bg-white h-full">
        {
          sfeduLink ? (
            <a href={sfeduLink} className={'p-4 lg:p-8 block sm:p-6'}>
              <div className={'mx-auto w-[200px] h-[230px] overflow-hidden'}>
                <img className="object-contain" src={imgLink} alt=""/>
              </div>
              <p className="font-bold pt-6 pb-2.5 text-gray-900">
                {name}
              </p>
              <p className="text-gray-900">{sfeduRank}</p>
              <p className="text-gray-900">{confRank}</p>
            </a>
          ) : (
            <div className={'p-4 lg:p-8 block sm:p-6'}>
              <div className={'mx-auto w-[200px] h-[230px] overflow-hidden'}>
                <img className="object-contain" src={imgLink} alt=""/>
              </div>
              <p className="font-bold pt-6 pb-2.5 text-gray-900">
                {name}
              </p>
              <p className="text-gray-900">{sfeduRank}</p>
              <p className="text-gray-900">{confRank}</p>
            </div>
          )
        }

      </div>
    </div>
  );
});

export default MemberCard;