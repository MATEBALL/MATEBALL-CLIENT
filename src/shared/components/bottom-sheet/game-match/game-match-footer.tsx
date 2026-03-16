import Button from '@components/button/button/button';

interface GameMatchFooterProps {
  onSubmit: () => void;
  disabled: boolean;
}

const GameMatchFooter = ({ onSubmit, disabled }: GameMatchFooterProps) => {
  return (
    <section className="w-full flex-col-center gap-[1.2rem]">
      <div className="w-full p-[1.6rem]">
        <Button disabled={disabled} className="w-full" label="다음으로" onClick={onSubmit} />
      </div>
    </section>
  );
};

export default GameMatchFooter;
