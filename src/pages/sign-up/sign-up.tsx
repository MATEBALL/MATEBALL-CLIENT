import Icon from '@components/icon/icon';
import { useFunnel } from '@hooks/use-funnel';
import KakaoStep from '@pages/sign-up/components/kakao-step';
import NicknameStep from '@pages/sign-up/components/nickname-step';
import { ROUTES } from '@routes/routes-config';

const SignUp = () => {
  const steps = ['info', 'nickname'] as const;
  const { Funnel, Step, goNext, goPrev, currentStep } = useFunnel(steps, ROUTES.HOME);

  const isNicknameStep = currentStep === 'nickname';
  const bgColor = isNicknameStep ? 'bg-gray-white' : 'bg-background';

  return (
    <div className="h-full flex-col">
      <header className={`h-[5.6rem] py-[1.55rem] pl-[2rem] ${bgColor}`}>
        <Icon
          name="ic-arrow-left-24"
          width={2.4}
          height={2.4}
          onClick={goPrev}
          className="cursor-pointer"
        />
      </header>
      <div className={`signup-layout ${bgColor} flex-1`}>
        <Funnel>
          <Step name="info">
            <KakaoStep goNext={goNext} />
          </Step>
          <Step name="nickname">
            <NicknameStep goNext={goNext} />
          </Step>
        </Funnel>
      </div>
    </div>
  );
};

export default SignUp;
