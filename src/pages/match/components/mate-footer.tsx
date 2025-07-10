import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';

interface MateFooterProps {
  isGroupMatching: boolean;
  onRequestClick: () => void;
}

const MateFooter = ({ isGroupMatching, onRequestClick }: MateFooterProps) => (
  <section className="-translate-x-1/2 fixed bottom-0 left-1/2 w-full max-w-[430px] gap-[0.4rem]">
    <div className="w-full flex-row-center gap-[0.8rem]">
      <Icon name="ic-caution" size={1.8} />
      <span className="cap_12_m text-gray-600">
        {isGroupMatching
          ? '그룹 매칭은 최대 2건까지 요청할 수 있어요.'
          : '1:1 매칭은 최대 3건까지 요청할 수 있어요.'}
      </span>
    </div>
    <div className="p-[1.6rem]">
      <Button className="w-full" label="매칭 요청하기" onClick={onRequestClick} />
    </div>
  </section>
);

export default MateFooter;
