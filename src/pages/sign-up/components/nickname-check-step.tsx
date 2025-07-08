import { NICKNAME_PLACEHOLDER } from '@components/input/constants/validation';
import Input from '@components/input/input';
import { NICKNAME_TITLE } from '@pages/sign-up/constants/NOTICE';

const NicknameCheckStep = () => {
  return (
    <div>
      <h1 className="title_24_sb whitespace-pre-line">{NICKNAME_TITLE}</h1>
      <Input placeholder={NICKNAME_PLACEHOLDER} label="닉네임" />
    </div>
  );
};

export default NicknameCheckStep;
