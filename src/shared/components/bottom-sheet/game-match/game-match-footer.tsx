import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';

const GameMatchFooter = () => {
  return (
    <section className="w-full flex-col-center gap-[0.4rem]">
      <div className="w-full flex-row-center gap-[0.8rem]">
        <Icon name="ic-caution" size={1.8} />
        <span className="cap_12_m text-gray-600">하루에 한 경기만 매칭 생성이 가능해요.</span>
      </div>
      <div className="p-[1.6rem]">
        <Button className="w-full" label="맞춤 매칭 생성하기" />
      </div>
    </section>
  );
};

export default GameMatchFooter;
