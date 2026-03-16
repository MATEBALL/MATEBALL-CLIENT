import Icon from '@components/icon/icon';
import Input from '@components/input/input';

const Frequency = () => {
  return (
    <div className="mt-[5rem] h-full w-full flex-col items-center gap-[5.1rem]">
      <div className="onboarding-title">
        <Icon name="group-role" width={10.4} height={10.4} />
        <div className="flex-col-center gap-[0.8rem]">
          <p className="head_20_sb text-center text-gray-black">시즌 중에 몇 번 직관하세요?</p>
        </div>
      </div>

      <div className="onboarding-inner">
        <p className="body_16_m text-gray-black">경기 수</p>
        <Input className="bg-gray-white" placeholder="숫자로 입력하세요." />
      </div>
    </div>
  );
};

export default Frequency;
