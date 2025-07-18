import Icon from '@components/icon/icon';

interface OnboardingHeaderProps {
  onClick: () => void;
}

const OnboardingHeader = ({ onClick }: OnboardingHeaderProps) => {
  return (
    <div className="flex h-[5.6rem] w-full justify-start py-[0.4rem]">
      <Icon
        name="arrow-left-24"
        width={4.8}
        height={4.8}
        onClick={onClick}
        className="cursor-pointer p-[1.2rem]"
      />
    </div>
  );
};

export default OnboardingHeader;
