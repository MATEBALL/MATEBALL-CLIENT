import { useFunnel } from '@hooks/use-funnel';
import AgreementStep from '@pages/sign-up/components/agreement-step';
import SignupStep from '@pages/sign-up/components/signup-step';
import { SIGNUP_STEPS } from '@pages/sign-up/constants/validation';
import { ROUTES } from '@routes/routes-config';

const SignUp = () => {
  const { Funnel, Step, goNext } = useFunnel(SIGNUP_STEPS, ROUTES.HOME);

  return (
    <div className="flex-col bg-gray-white">
      <Funnel>
        <Step name="AGREEMENT">
          <AgreementStep next={goNext} />
        </Step>
        <Step name="INFORMATION">
          <SignupStep />
        </Step>
      </Funnel>
    </div>
  );
};

export default SignUp;
