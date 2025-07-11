import Button from '@components/button/button/button';
import { useFunnel } from '@hooks/use-funnel';
import { ROUTES } from '@routes/routes-config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Complete from './components/complete';
import Gender from './components/gender';
import MatchingType from './components/matching-type';
import OnboardingHeader from './components/onboarding-header';
import ProgressBar from './components/progress-bar';
import Start from './components/start';
import SupportTeam from './components/support-team';
import SyncSupportTeam from './components/sync-support-team';
import ViewingStyle from './components/viewing-style';
import { FIRST_FUNNEL_STEPS } from './constants/onboarding';

const Onboarding = () => {
  const { Funnel, Step, currentStep, currentIndex, steps, goNext, goPrev } = useFunnel(
    FIRST_FUNNEL_STEPS,
    ROUTES.HOME,
  );

  const [selections, setSelections] = useState<Record<string, string | null>>({
    SUPPORT_TEAM: null,
    SYNC_SUPPORT_TEAM: null,
    VIEWING_STYLE: null,
    GENDER: null,
    MATCHING_TYPE: null,
  });

  const handleSelect = (stepName: string, value: string) => {
    setSelections((prev) => ({ ...prev, [stepName]: value }));
  };

  const isStepCompleted = (stepName: string) => selections[stepName] !== null;

  const navigate = useNavigate();

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
          <Step name="START">
            <Start />
            <div className="sticky bottom-0 w-full p-[1.6rem]">
              <Button label="시작하기" size={'L'} variant={'blue'} onClick={goNext} />
            </div>
          </Step>

          <Step name="SUPPORT_TEAM">
            <SupportTeam
              selectedOption={selections.SUPPORT_TEAM}
              onSelect={(option) => handleSelect('SUPPORT_TEAM', option)}
            />
            <div className="sticky bottom-0 w-full p-[1.6rem]">
              <Button
                label="다음으로"
                size={'L'}
                variant={'blue'}
                onClick={goNext}
                disabled={!isStepCompleted('SUPPORT_TEAM')}
              />
            </div>
          </Step>

          <Step name="SYNC_SUPPORT_TEAM">
            <SyncSupportTeam
              selectedOption={selections.SYNC_SUPPORT_TEAM}
              onSelect={(option) => handleSelect('SYNC_SUPPORT_TEAM', option)}
            />
            <div className="sticky bottom-0 w-full p-[1.6rem]">
              <Button
                label="다음으로"
                size={'L'}
                onClick={goNext}
                disabled={!isStepCompleted('SYNC_SUPPORT_TEAM')}
              />
            </div>
          </Step>

          <Step name="VIEWING_STYLE">
            <ViewingStyle
              selectedOption={selections.VIEWING_STYLE}
              onSelect={(option) => handleSelect('VIEWING_STYLE', option)}
            />
            <div className="sticky bottom-0 w-full p-[1.6rem]">
              <Button
                label="다음으로"
                size={'L'}
                onClick={goNext}
                disabled={!isStepCompleted('VIEWING_STYLE')}
              />
            </div>
          </Step>

          <Step name="GENDER">
            <Gender
              selectedOption={selections.GENDER}
              onSelect={(option) => handleSelect('GENDER', option)}
            />
            <div className="sticky bottom-0 w-full p-[1.6rem]">
              <Button
                label="다음으로"
                size={'L'}
                onClick={goNext}
                disabled={!isStepCompleted('GENDER')}
              />
            </div>
          </Step>

          <Step name="MATCHING_TYPE">
            <MatchingType
              selectedOption={selections.MATCHING_TYPE}
              onSelect={(option) => handleSelect('MATCHING_TYPE', option)}
            />
            <div className="sticky bottom-0 w-full p-[1.6rem]">
              <Button
                label="다음으로"
                size={'L'}
                onClick={() => {
                  if (selections.MATCHING_TYPE === '1:1 매칭') {
                    goNext();
                  } else if (selections.MATCHING_TYPE === '그룹 매칭') {
                    navigate('/onboarding/group');
                  }
                }}
                disabled={!isStepCompleted('MATCHING_TYPE')}
              />
            </div>
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

export default Onboarding;
