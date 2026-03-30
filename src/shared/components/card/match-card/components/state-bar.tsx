interface StateBarProps {
  currentStep: number;
  totalSteps: number;
}

const StateBar = ({ currentStep, totalSteps }: StateBarProps) => {
  const progressPercent = Math.min((currentStep / totalSteps) * 100, 100);

  return (
    <div className="pt-[1.2rem]">
      <div className="h-[0.6rem] w-full rounded-[20px] bg-gray-100 ">
        <div
          className="progress-gradient h-full rounded-l-[20px] transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercent}%` }}
        />
        {/* TODO: now-point icon 추가 */}
      </div>
    </div>
  );
};

export default StateBar;
