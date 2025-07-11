<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import NicknameStep from '@pages/sign-up/components/nickname-step';
=======
import NicknameCheckStep from './components/nickname-check-step';
>>>>>>> 2932e7c (feat: 회원가입 페이지 뷰 구현 (#78))
=======
import NicknameStep from '@pages/sign-up/components/nickname-step';
>>>>>>> 18295f3 (chore: 충돌해결(#83))

const SignUp = () => {
  const isNicknameStep = 'nickname';

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className={`signup-layout ${isNicknameStep ? 'bg-gray-white' : ''}`}>
      <NicknameStep />
=======
    <div className="signup-layout">
      <NicknameCheckStep />
>>>>>>> 2932e7c (feat: 회원가입 페이지 뷰 구현 (#78))
=======
import NicknameStep from './components/nickname-step';

const SignUp = () => {
  const isNicknameStep = false;

  return (
    <div className={`signup-layout ${isNicknameStep ? 'bg-gray-white' : ''}`}>
      <NicknameStep />
>>>>>>> 1bba458 (feat: 닉네임 react-hook-form 연결 (#95))
=======
    <div className={`signup-layout ${isNicknameStep ? 'bg-gray-white' : ''}`}>
      <NicknameStep />
>>>>>>> 18295f3 (chore: 충돌해결(#83))
    </div>
  );
};

export default SignUp;
