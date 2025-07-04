import { NICKNAME_PLACEHOLDER } from '@components/input/constants/validation';
import Input from '@components/input/input';

const SignUp = () => {
  return (
    <div>
      회원가입페이지
      <Input placeholder={NICKNAME_PLACEHOLDER} svg="x" />
    </div>
  );
};

export default SignUp;
