import Button from '@components/button/button';
import { NICKNAME_PLACEHOLDER } from '@components/input/constants/validation';
import Input from '@components/input/input';
import { NICKNAME_TITLE } from '@pages/sign-up/constants/NOTICE';

const NicknameStep = () => {
  return (
    <>
      <div className="flex-col gap-[4rem]">
        <h1 className="title_24_sb whitespace-pre-line">{NICKNAME_TITLE}</h1>
        <Input placeholder={NICKNAME_PLACEHOLDER} label="닉네임" />
      </div>
      <Button label="가입하기" className="w-full" ariaLabel="가입하기" />
    </>
  );
};

export default NicknameStep;
