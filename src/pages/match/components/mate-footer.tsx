import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';
import { MATCHING_NOTICE } from '@pages/match/constants/matching';

interface MateFooterProps {
  isGroupMatching: boolean;
  onRequestClick: () => void;
}

const MateFooter = ({ isGroupMatching, onRequestClick }: MateFooterProps) => (
  <section className="-translate-x-1/2 fixed bottom-0 left-1/2 w-full max-w-[430px] gap-[0.4rem]">
    <div className="w-full flex-row-center gap-[0.8rem]">
      <Icon name="ic-caution" size={1.8} />
      <span className="cap_12_m text-gray-600">
        {isGroupMatching ? MATCHING_NOTICE.group : MATCHING_NOTICE.single}
      </span>
    </div>
    <div className="p-[1.6rem]">
      <Button className="w-full" label="매칭 요청하기" onClick={onRequestClick} />
    </div>
  </section>
);

export default MateFooter;
