import ButtonCreate from '@components/button/button-create/button-create';
import EmptyState from '@components/ui/empty-state';

const HomeCardList = () => {
  return (
    <div className="p-[1.6rem]">
      <ButtonCreate label="맞춤 매칭 생성하기" className="ml-auto" />
      <EmptyState
        className="mt-[4rem]"
        text="해당 날짜에 등록된 매칭이 없어요!"
        subText="맞춤 매칭을 생성하거나, 다른 날짜를 탐색해 보세요. "
      />
    </div>
  );
};

export default HomeCardList;
