import Button from '@components/button/button/button';
import { useFunnel } from '@hooks/use-funnel';
import AgreementStep from '@pages/sign-up/components/agreement-step';
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
    <div className="h-full flex-col bg-gray-white">
      <div className="flex-1">
        <Funnel>
          <Step name="AGREEMENT">
            <AgreementStep />
          </Step>
          <Step name="INFORMATION">
            <SignupStep />
          </Step>
        </Funnel>
      </div>

      <div className="sticky bottom-0 w-full p-[1.6rem]">
        <Button label={isFinalStep} ariaLabel="가입하기" type="submit" />
      </div>
    </div>
  );
};

export default SignUp;
