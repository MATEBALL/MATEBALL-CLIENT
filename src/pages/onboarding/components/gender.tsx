import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';

const Gender = () => {
  return (
    <div className="h-full w-full flex-col-between gap-[5.4rem]">
      <div className="flex-col-center gap-[2.4rem]">
        <Icon name="graphic-gender" width={10.4} height={10.4} />
        <div className="flex-col-center gap-[0.8rem]">
          <p className="head_20_sb text-center text-gray-black">
            선호하시는 메이트의 성별이 있나요?
          </p>
        </div>
      </div>

      <div className="w-full flex-col gap-[0.8rem] px-[1.6rem]">
        <Button label="남성" size={'setting_L'} variant={'white'} />
        <Button label="여성" size={'setting_L'} variant={'white'} />
        <Button label="상관없어요" size={'setting_L'} variant={'white'} />
      </div>
    </div>
  );
};

export default Gender;
