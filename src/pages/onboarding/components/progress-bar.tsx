interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progressPercent = Math.min((currentStep / totalSteps) * 100, 100);

  return (
    <div className="px-[0.8rem] py-[1.6rem]">
      <div className="h-[0.6rem] w-full rounded-[16px] bg-gray-300 ">
        <div
          className="h-[0.6rem] rounded-[16px] bg-main-900 transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
