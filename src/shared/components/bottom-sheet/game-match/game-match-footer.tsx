import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';

interface GameMatchFooterProps {
  onSubmit: () => void;
  disabled: boolean;
}

const GameMatchFooter = ({ onSubmit, disabled }: GameMatchFooterProps) => {
  return (
    <section className="w-full flex-col-center gap-[1.2rem]">
      <div className="flex-row-center gap-[0.8rem] text-gray-600">
        <Icon name="caution" size={1.8} />
        <span className="cap_12_m">하루에 한 경기만 매칭 생성이 가능해요.</span>
      </div>
      <div className="w-full p-[1.6rem]">
        <Button
          disabled={disabled}
          className="w-full"
          label="맞춤 매칭 생성하기"
          onClick={onSubmit}
        />
      </div>
    </section>
  );
};

export default GameMatchFooter;
