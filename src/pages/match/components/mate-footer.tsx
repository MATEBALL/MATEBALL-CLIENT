import Button from '@components/button/button/button';

interface MateFooterProps {
  isGroupMatching: boolean;
  onRequestClick: () => void;
}

const MateFooter = ({ onRequestClick }: MateFooterProps) => (
  <section className="w-full flex-col-center gap-[0.4rem]">
    <div className="w-full p-[1.6rem]">
      <Button size="L" className="w-full" label="매칭 요청하기" onClick={onRequestClick} />
    </div>
  </section>
);

export default MateFooter;
