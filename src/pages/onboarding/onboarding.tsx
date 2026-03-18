import { matchMutations } from '@apis/match/match-mutations';
import { userQueries } from '@apis/user/user-queries';
import Button from '@components/button/button/button';
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
import { useMutation, useQuery } from '@tanstack/react-query';
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
    GENDER: null,
    MATCHING_TYPE: null,
  });

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

    if (currentStep === 'VIEWING_STYLE' && selections.SUPPORT_TEAM === NO_TEAM_OPTION) {
      goTo('SUPPORT_TEAM');
    } else {
      goPrev();
    }
  };

  const { data } = useQuery(userQueries.USER_INFO());
  if (!data) return null;

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

          {/* TODO: GENDER 단계 관련 전부 삭제 */}
          {/* <Step name="GENDER">
            <Gender
              selectedOption={selections.GENDER}
              onSelect={(option) => handleSelect('GENDER', option)}
            />
          </Step> */}

          <Step name="MATCHING_TYPE">
            <MatchingType
              selectedOption={selections.MATCHING_TYPE}
              onSelect={(option) => handleSelect('MATCHING_TYPE', option)}
            />
          </Step>

          <Step name="DATE_SELECT">
            <DateSelect onComplete={goNext} />
          </Step>

          <Step name="COMPLETE">
            <Complete nickname={data.nickname ?? ''} />
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
