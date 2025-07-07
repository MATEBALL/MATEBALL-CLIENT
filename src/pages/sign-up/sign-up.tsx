import { NOTICE } from './constants/NOTICE';

const SignUp = () => {
  return (
    <div>
      <p className="title_24_sb text-gray-black">기본 정보를 확인해 주세요.</p>
      <p className="cap_14_m whitespace-pre-line text-gray-600">{NOTICE}</p>
    </div>
  );
};

export default SignUp;
