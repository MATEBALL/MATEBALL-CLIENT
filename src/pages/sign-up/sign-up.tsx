import Button from '@components/button/button/button';
import { useFunnel } from '@hooks/use-funnel';
import SignupStep from '@pages/sign-up/components/signup-step';
import { SIGNUP_STEPS } from '@pages/sign-up/constants/validation';
import { ROUTES } from '@routes/routes-config';

const SignUp = () => {
  const { Funnel, Step, currentStep, currentIndex, steps, goNext, goPrev } = useFunnel(
    SIGNUP_STEPS,
    ROUTES.HOME,
  );

  const isFinalStep = currentIndex === 1 ? '가입하기' : '다음으로';

  return (
    <div className="signup-layout h-full bg-gray-white">
      <Funnel>
        <Step name="AGREEMENT">
          <SignupStep />
        </Step>
        <Step name="INFORMATION">
          <SignupStep />
        </Step>
      </Funnel>

      <Button label={isFinalStep} className="w-full" ariaLabel="가입하기" type="submit" />
    </div>
  );
};

export default SignUp;
