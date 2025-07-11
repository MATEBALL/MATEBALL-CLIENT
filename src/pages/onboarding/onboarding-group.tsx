import Button from '@components/button/button/button';
import { useFunnel } from '@hooks/use-funnel';
import { ROUTES } from '@routes/routes-config';
import { useState } from 'react';
import Complete from './components/complete';
import DateSelect from './components/date-select';
import GroupRole from './components/group-role';
import OnboardingHeader from './components/onboarding-header';
import ProgressBar from './components/progress-bar';
import { GROUP_FUNNEL_STEPS } from './constants/onboarding';

const OnboardingGroup = () => {
  const { Funnel, Step, currentStep, currentIndex, steps, goNext, goPrev } = useFunnel(
    GROUP_FUNNEL_STEPS,
    ROUTES.HOME,
  );

  const [selections, setSelections] = useState<Record<string, string | null>>({
    GROUP_ROLE: null,
  });

  const handleSelect = (stepName: string, value: string) => {
    setSelections((prev) => ({ ...prev, [stepName]: value }));
  };

  const isStepCompleted = (stepName: string) => selections[stepName] !== null;

  return (
    <div className="flex h-[100svh] flex-col">
      <div className="sticky top-0 bg-background">
        <OnboardingHeader onClick={goPrev} />
        {currentStep !== 'START' && (
          <div className="w-full">
            <ProgressBar currentStep={currentIndex} totalSteps={steps.length - 1} />
          </div>
        )}
      </div>

      <div className="h-full flex-col-between">
        <Funnel>
          <Step name="GROUP_ROLE">
            <GroupRole
              selectedOption={selections.GROUP_ROLE}
              onSelect={(option) => handleSelect('GROUP_ROLE', option)}
            />
            <div className="sticky bottom-0 w-full p-[1.6rem]">
              <Button
                label="다음으로"
                size={'L'}
                onClick={goNext}
                disabled={!isStepCompleted('GROUP_ROLE')}
              />
            </div>
          </Step>

          <Step name="DATE_SELECT">
            <DateSelect
              onComplete={() => {
                goNext();
              }}
            />
          </Step>

          <Step name="COMPLETE">
            <Complete />
            <div className="sticky bottom-0 w-full p-[1.6rem]">
              <Button label="메인 화면으로 이동하기" size={'L'} onClick={goNext} />
            </div>
          </Step>
        </Funnel>
      </div>
    </div>
  );
};

export default OnboardingGroup;
