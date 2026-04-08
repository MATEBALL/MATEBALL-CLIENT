import { matchMutations } from '@apis/match/match-mutations';
import Button from '@components/button/button/button';
import { TAB_TYPES } from '@components/tab/tab/constants/tab-type';
import { useFunnel } from '@hooks/use-funnel';
import Complete from '@pages/onboarding/components/complete';
import CompleteButtonSection from '@pages/onboarding/components/complete-button-section';
import DateSelect from '@pages/onboarding/components/date-select';
import Frequency from '@pages/onboarding/components/frequency';
import MatchingType from '@pages/onboarding/components/matching-type';
import OnboardingHeader from '@pages/onboarding/components/onboarding-header';
import ProgressBar from '@pages/onboarding/components/progress-bar';
import SupportTeam from '@pages/onboarding/components/support-team';
import SyncSupportTeam from '@pages/onboarding/components/sync-support-team';
import ViewingStyle from '@pages/onboarding/components/viewing-style';
import { FIRST_FUNNEL_STEPS, NO_TEAM_OPTION } from '@pages/onboarding/constants/onboarding';
import { handleButtonClick, isButtonDisabled } from '@pages/onboarding/utils/onboarding-button';
import { ROUTES } from '@routes/routes-config';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const { Funnel, Step, currentStep, currentIndex, steps, goNext, goPrev, goTo } = useFunnel(
    FIRST_FUNNEL_STEPS,
    ROUTES.HOME,
  );

  const [selections, setSelections] = useState<Record<string, string | null>>({
    SUPPORT_TEAM: null,
    SYNC_SUPPORT_TEAM: null,
    FREQUENCY: null,
    VIEWING_STYLE: null,
    MATCHING_TYPE: null,
  });

  const [createdMatch, setCreatedMatch] = useState<{
    matchId: number;
    type: 'single' | 'group';
  } | null>(null);

  const handleSelect = (stepName: string, value: string) => {
    setSelections((prev) => ({ ...prev, [stepName]: value }));
  };

  const navigate = useNavigate();

  const { mutate } = useMutation(matchMutations.MATCH_CONDITION());

  const handlePrev = () => {
    if (currentStep === 'COMPLETE') {
      navigate(ROUTES.HOME);
      return;
    }

    if (currentStep === 'FREQUENCY' && selections.SUPPORT_TEAM === NO_TEAM_OPTION) {
      goTo('SUPPORT_TEAM');
    } else {
      goPrev();
    }
  };

  return (
    <div className="h-full flex-col">
      <div className="sticky top-0 bg-background">
        <OnboardingHeader onClick={handlePrev} />
        {currentStep !== 'COMPLETE' && (
          <div className="w-full">
            <ProgressBar currentStep={currentIndex} totalSteps={steps.length - 1} />
          </div>
        )}
      </div>

      <div className="flex-1 flex-col-between">
        <Funnel currentStep={currentStep}>
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

          <Step name="FREQUENCY">
            <Frequency
              value={selections.FREQUENCY ?? ''}
              onChange={(value) => handleSelect('FREQUENCY', value)}
            />
          </Step>

          <Step name="VIEWING_STYLE">
            <ViewingStyle
              selectedOption={selections.VIEWING_STYLE}
              onSelect={(option) => handleSelect('VIEWING_STYLE', option)}
            />
          </Step>

          <Step name="MATCHING_TYPE">
            <MatchingType
              selectedOption={selections.MATCHING_TYPE}
              onSelect={(option) => handleSelect('MATCHING_TYPE', option)}
            />
          </Step>

          <Step name="DATE_SELECT">
            <DateSelect
              activeType={
                selections.MATCHING_TYPE === '1:1 매칭' ? TAB_TYPES.SINGLE : TAB_TYPES.GROUP
              }
              onComplete={(matchId) => {
                setCreatedMatch({
                  matchId,
                  type: selections.MATCHING_TYPE === '1:1 매칭' ? 'single' : 'group',
                });
                goNext();
              }}
            />
          </Step>

          <Step name="COMPLETE">
            {createdMatch && <Complete matchId={createdMatch.matchId} type={createdMatch.type} />}
          </Step>
        </Funnel>

        {currentStep !== 'DATE_SELECT' && currentStep !== 'COMPLETE' && (
          <div className="sticky bottom-0 w-full p-[1.6rem]">
            <Button
              label="다음으로"
              size="L"
              variant="blue"
              disabled={isButtonDisabled(currentStep, selections)}
              onClick={() => {
                if (currentStep === 'SUPPORT_TEAM' && selections.SUPPORT_TEAM === NO_TEAM_OPTION) {
                  setSelections((prev) => ({ ...prev, SYNC_SUPPORT_TEAM: null }));
                  goTo('FREQUENCY');
                  return;
                }

                handleButtonClick(currentStep, selections, goNext, navigate, mutate);
              }}
            />
          </div>
        )}
        {currentStep === 'COMPLETE' && <CompleteButtonSection />}
      </div>
    </div>
  );
};

export default Onboarding;
