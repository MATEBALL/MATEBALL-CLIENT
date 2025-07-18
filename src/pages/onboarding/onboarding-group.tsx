import Button from '@components/button/button/button';
import { useFunnel } from '@hooks/use-funnel';
import Complete from '@pages/onboarding/components/complete';
import DateSelect from '@pages/onboarding/components/date-select';
import GroupRole from '@pages/onboarding/components/group-role';
import OnboardingHeader from '@pages/onboarding/components/onboarding-header';
import ProgressBar from '@pages/onboarding/components/progress-bar';
import { GROUP_FUNNEL_STEPS } from '@pages/onboarding/constants/onboarding';
import {
  getButtonLabel,
  handleButtonClick,
  isButtonDisabled,
} from '@pages/onboarding/utils/onboarding-button';
import { ROUTES } from '@routes/routes-config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingGroup = () => {
  const { Funnel, Step, currentStep, currentIndex, steps, goNext, goPrev, goTo } = useFunnel(
    GROUP_FUNNEL_STEPS,
    ROUTES.HOME,
  );

  const navigate = useNavigate();

  const [selection, setSelection] = useState<Record<string, string | null>>({
    GROUP_ROLE: null,
  });

  const handleSelect = (stepName: string, value: string) => {
    setSelection((prev) => ({ ...prev, [stepName]: value }));
  };

  return (
    <div className="h-full flex-col">
      <div className="sticky top-0 bg-background">
        <OnboardingHeader onClick={goPrev} />
        {currentStep !== 'START' && (
          <div className="w-full">
            <ProgressBar currentStep={currentIndex} totalSteps={steps.length - 1} />
          </div>
        )}
      </div>

      <div className="flex-1 flex-col-between">
        <Funnel>
          <Step name="GROUP_ROLE">
            <GroupRole
              selectedOption={selection.GROUP_ROLE}
              onSelect={(option) => handleSelect('GROUP_ROLE', option)}
            />
          </Step>

          <Step name="DATE_SELECT">
            <DateSelect />
          </Step>

          <Step name="COMPLETE">
            <Complete />
          </Step>
        </Funnel>
        {currentStep !== 'DATE_SELECT' && (
          <div className="sticky bottom-0 w-full p-[1.6rem]">
            <Button
              label={getButtonLabel(currentStep)}
              size="L"
              variant="blue"
              disabled={isButtonDisabled(currentStep, selection)}
              onClick={() =>
                handleButtonClick(
                  currentStep,
                  selection,
                  goNext,
                  navigate,
                  undefined,
                  undefined,
                  goTo,
                )
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingGroup;
