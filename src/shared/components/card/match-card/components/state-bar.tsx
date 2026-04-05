import Icon from '@components/icon/icon';

interface StateBarProps {
  currentStep: number;
  totalSteps: number;
}

const StateBar = ({ currentStep, totalSteps }: StateBarProps) => {
  const progressPercent = Math.min((currentStep / totalSteps) * 100, 100);

  return (
    <div className="pt-[1.2rem]">
      <div className="relative h-[0.8rem] w-full rounded-[20px] bg-gray-100 ">
        <div
          className="progress-gradient h-full rounded-l-[20px]"
          style={{ width: `${progressPercent}%` }}
        />
        <div
          className="-translate-x-1/2 absolute top-0 flex h-full items-center"
          style={{ left: `${progressPercent}%` }}
        >
          <Icon name="now-point" size={0.8} />
        </div>
      </div>
    </div>
  );
};

export default StateBar;
