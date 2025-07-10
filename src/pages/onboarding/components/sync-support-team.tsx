import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';

const SyncSupportTeam = () => {
  return (
    <div className="h-full w-full flex-col-between gap-[12.8rem]">
      <div className="flex-col-center gap-[2.4rem]">
        <Icon name="graphic-cheer-team" width={10.4} height={10.4} />
        <p className="head_20_sb text-center">
          메이트와 선호하는
          <br />
          응원 팀이 같으면 좋을까요?
        </p>
      </div>

      <div className="w-full flex-col gap-[0.8rem] px-[1.6rem]">
        <Button label="같은 팀 메이트와 보고 싶어요" size={'setting_L'} variant={'white'} />
        <Button label="상관없어요" size={'setting_L'} variant={'white'} />
      </div>
    </div>
  );
};

export default SyncSupportTeam;
