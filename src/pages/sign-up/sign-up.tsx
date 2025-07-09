import NicknameStep from './components/nickname-step';

const SignUp = () => {
  const isNicknameStep = true;

  return (
    <div className={`signup-layout ${isNicknameStep ? 'bg-gray-white' : ''}`}>
      <NicknameStep />
    </div>
  );
};

export default SignUp;
