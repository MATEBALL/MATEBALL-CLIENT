import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';

const MatchingType = () => {
  return (
    <div className="h-full w-full flex-col-between gap-[5.4rem]">
      <div className="flex-col-center gap-[2.4rem]">
        <Icon name="graphic-matching" width={10.4} height={10.4} />
        <div className="flex-col-center gap-[0.8rem]">
          <p className="head_20_sb text-center text-gray-black">
            거의 다 왔어요.
            <br />
            어떤 유형의 매칭을 원하시나요?
          </p>
        </div>
      </div>

      <div className="w-full flex-col gap-[0.8rem] px-[1.6rem]">
        <Button label="1:1 매칭" size={'setting_L'} variant={'white'} />
        <Button label="그룹 매칭" size={'setting_L'} variant={'white'} />
      </div>
    </div>
  );
};

export default MatchingType;
