import Button from '@components/button/button/button';
import { useFunnel } from '@hooks/use-funnel';
import { ROUTES } from '@routes/routes-config';
import ProgressBar from './components/progress-bar';
import Start from './components/start';
import { ONBOARDING_STEPS } from './constants/steps';

const Onboarding = () => {
  const { Funnel, Step, currentStep, currentIndex, steps, goNext, goPrev } = useFunnel(
    ONBOARDING_STEPS,
    ROUTES.HOME,
  );
  return (
    <>
      <ProgressBar currentStep={currentIndex + 1} totalSteps={steps.length} />
      <Funnel>
        <Step name="START">
          <div className="flex flex-col justify-between">
            <Start />
            <div className="fixed bottom-0 w-full p-[1.6rem] ">
              <Button label="시작하기" size={'L'} variant={'blue'} />
            </div>
          </div>
        </Step>
        <Step name="support_team">
          <Button label="다음으로" />
        </Step>
      </Funnel>
    </>
  );
};

export default Onboarding;
