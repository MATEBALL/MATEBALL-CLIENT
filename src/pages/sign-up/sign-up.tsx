<<<<<<< HEAD
import NicknameStep from '@pages/sign-up/components/nickname-step';
=======
import NicknameCheckStep from './components/nickname-check-step';
>>>>>>> 2932e7c (feat: 회원가입 페이지 뷰 구현 (#78))

const SignUp = () => {
  const isNicknameStep = 'nickname';

  return (
<<<<<<< HEAD
    <div className={`signup-layout ${isNicknameStep ? 'bg-gray-white' : ''}`}>
      <NicknameStep />
=======
    <div className="signup-layout">
      <NicknameCheckStep />
>>>>>>> 2932e7c (feat: 회원가입 페이지 뷰 구현 (#78))
    </div>
  );
};

export default SignUp;
