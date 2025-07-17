import { matchMutations } from '@apis/match/match-mutations';
import Button from '@components/button/button/button';
import { useFunnel } from '@hooks/use-funnel';
import Complete from '@pages/onboarding/components/complete';
import Gender from '@pages/onboarding/components/gender';
import MatchingType from '@pages/onboarding/components/matching-type';
import OnboardingHeader from '@pages/onboarding/components/onboarding-header';
import ProgressBar from '@pages/onboarding/components/progress-bar';
import Start from '@pages/onboarding/components/start';
import SupportTeam from '@pages/onboarding/components/support-team';
import SyncSupportTeam from '@pages/onboarding/components/sync-support-team';
import ViewingStyle from '@pages/onboarding/components/viewing-style';
import { FIRST_FUNNEL_STEPS, ONBOARDING_STORAGE_KEY } from '@pages/onboarding/constants/onboarding';
import {
  getButtonLabel,
  handleButtonClick,
  isButtonDisabled,
} from '@pages/onboarding/utils/onboarding-button';
import { getStoredData } from '@pages/onboarding/utils/onboarding-storage';
import { ROUTES } from '@routes/routes-config';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const { Funnel, Step, currentStep, currentIndex, steps, goNext, goPrev } = useFunnel(
    FIRST_FUNNEL_STEPS,
    ROUTES.HOME,
  );

  const [selections, setSelections] = useState<Record<string, string | null>>(() => {
    const stored = getStoredData(ONBOARDING_STORAGE_KEY);
    return {
      SUPPORT_TEAM: stored.SUPPORT_TEAM ?? null,
      SYNC_SUPPORT_TEAM: stored.SYNC_SUPPORT_TEAM ?? null,
      VIEWING_STYLE: stored.VIEWING_STYLE ?? null,
      GENDER: stored.GENDER ?? null,
      MATCHING_TYPE: stored.MATCHING_TYPE ?? null,
    };
  });

  const handleSelect = (stepName: string, value: string) => {
    setSelections((prev) => ({ ...prev, [stepName]: value }));
  };

  const navigate = useNavigate();

  const [progressOverride, setProgressOverride] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify(selections));
  }, [selections]);

  const { mutate } = useMutation(matchMutations.MATCH_CONDITION());

  return (
    <div className="h-full flex-col">
      <div className="sticky top-0 bg-background">
        <OnboardingHeader onClick={goPrev} />
        {currentStep !== 'START' && (
          <div className="w-full">
            <ProgressBar
              currentStep={progressOverride ?? currentIndex}
              totalSteps={steps.length - 1}
            />
          </div>
        )}
      </div>

      <div className="flex-1 flex-col-between">
        <Funnel>
          <Step name="START">
            <Start />
          </Step>

          <Step name="SUPPORT_TEAM">
            <SupportTeam
              selectedOption={selections.SUPPORT_TEAM}
              onSelect={(option) => handleSelect('SUPPORT_TEAM', option)}
            />
          </Step>

          <Step name="SYNC_SUPPORT_TEAM">
            <SyncSupportTeam
              selectedOption={selections.SYNC_SUPPORT_TEAM}
              onSelect={(option) => handleSelect('SYNC_SUPPORT_TEAM', option)}
            />
          </Step>

          <Step name="VIEWING_STYLE">
            <ViewingStyle
              selectedOption={selections.VIEWING_STYLE}
              onSelect={(option) => handleSelect('VIEWING_STYLE', option)}
            />
          </Step>

          <Step name="GENDER">
            <Gender
              selectedOption={selections.GENDER}
              onSelect={(option) => handleSelect('GENDER', option)}
            />
          </Step>

          <Step name="MATCHING_TYPE">
            <MatchingType
              selectedOption={selections.MATCHING_TYPE}
              onSelect={(option) => handleSelect('MATCHING_TYPE', option)}
            />
          </Step>

          <Step name="COMPLETE">
            <Complete />
          </Step>
        </Funnel>

        <div className="sticky bottom-0 w-full p-[1.6rem]">
          <Button
            label={getButtonLabel(currentStep)}
            size="L"
            variant="blue"
            disabled={isButtonDisabled(currentStep, selections)}
            onClick={() =>
              handleButtonClick(
                currentStep,
                selections,
                goNext,
                navigate,
                setProgressOverride,
                mutate,
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
