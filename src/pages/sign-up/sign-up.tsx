import NicknameStep from '@pages/sign-up/components/nickname-step';

const SignUp = () => {
  const isNicknameStep = 'nickname';

  return (
    <div className={`signup-layout ${isNicknameStep ? 'bg-gray-white' : ''}`}>
      <NicknameStep />
    </div>
  );
};

export default SignUp;
