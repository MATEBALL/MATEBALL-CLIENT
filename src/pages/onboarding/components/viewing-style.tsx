import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';

const ViewingStyle = () => {
  return (
    <div className="h-full w-full flex-col-between gap-[5.4rem]">
      <div className="flex-col-center gap-[2.4rem]">
        <Icon name="graphic-watching" width={10.4} height={10.4} />
        <div className="flex-col-center gap-[0.8rem]">
          <p className="head_20_sb text-center text-gray-black">관람 스타일은 어떤 편이신가요?</p>
          <p className="cap_14_m text-center text-gray-600">
            스타일이 비슷한 메이트를 매칭해 드릴게요.
          </p>
        </div>
      </div>

      <div className="w-full flex-col gap-[0.8rem] px-[1.6rem]">
        <Button label="열정 응원러" size={'setting_L'} variant={'white'} />
        <Button label="경기 집중러" size={'setting_L'} variant={'white'} />
        <Button label="직관 먹방러" size={'setting_L'} variant={'white'} />
      </div>
    </div>
  );
};

export default ViewingStyle;
