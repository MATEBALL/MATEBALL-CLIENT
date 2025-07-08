import Button from '@components/button/button';
import ProfileCard from '@pages/sign-up/components/profile-card';
import { NOTICE } from '@pages/sign-up/constants/NOTICE';

const SignUp = () => {
  return (
    <div className="h-screen flex-col-between gap-[4rem] px-[1.6rem] pt-[4rem] pb-[1.6rem]">
      <div className="w-full flex-col gap-[4rem]">
        <div>
          <h1 className="title_24_sb text-gray-black">기본 정보를 확인해 주세요.</h1>
          <p className="cap_14_m whitespace-pre-line text-gray-600">{NOTICE}</p>
        </div>
        <div className="w-full flex-row gap-[1.2rem]">
          <ProfileCard title="생년" data="xxxx년도" aria-label="생년" />
          <ProfileCard title="성별" data="성별" aria-label="성별" />
        </div>
      </div>
      <Button label="가입하기" className="w-full" ariaLabel="가입하기" />
    </div>
  );
};

export default SignUp;
