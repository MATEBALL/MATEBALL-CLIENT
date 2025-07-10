import { useMate } from '@pages/match/groups/hooks/useMate';
import GroupMateCard from './group-mate-card';
import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';

interface Props {
  matchId: string;
  onRequestClick: () => void;
}

const GroupMate = ({ matchId, onRequestClick }: Props) => {
  const numericMatchId = Number(matchId);
  const { mate, loading } = useMate(numericMatchId);

  if (loading) {
    return <p className="text-center mt-20 text-gray-500">로딩 중...</p>;
  }

  if (!mate) {
    return <p className="text-center mt-20 text-red-500">해당 매칭 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <div className="flex mt-[4rem] flex-col justify-start items-center gap-[4rem]">
      <section className="gap-[0.8rem]">
        <h1 className="title_24_sb text-gray-black">사용자님과 딱 맞는 그룹원이에요!</h1>
        <p className="body_16_m text-gray-600">상대의 정보를 확인하고, 매칭을 요청해 보세요.</p>
      </section>
      <section className="px-[1.6rem]">
        <GroupMateCard mate={mate} />
      </section>
      <section className="w-full gap-[0.4rem]">
        <div className="flex w-full items-center justify-center gap-[0.8rem]">
          <Icon name="ic-caution" size={1.8} />
          <span className="cap_12_m text-gray-600">
            1:1 매칭은 최대 3건까지 요청할 수 있어요.
          </span>
        </div>
        <div className="p-[1.6rem]">
          <Button className="w-full" label="매칭 요청하기" onClick={onRequestClick} />
        </div>
      </section>
    </div>
  );
};

export default GroupMate;
