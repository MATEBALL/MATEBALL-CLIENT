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
import { FIRST_FUNNEL_STEPS } from '@pages/onboarding/constants/onboarding';
import { ROUTES } from '@routes/routes-config';

const Onboarding = () => {
  const { Funnel, Step, currentStep, currentIndex, steps, goNext, goPrev } = useFunnel(
    FIRST_FUNNEL_STEPS,
    ROUTES.HOME,
  );
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
            <div className="onboarding-footer">
              <Button label="시작하기" size={'L'} variant={'blue'} onClick={goNext} />
            </div>
          </Step>

          <Step name="SUPPORT_TEAM">
            <SupportTeam
              selectedOption={selections.SUPPORT_TEAM}
              onSelect={(option) => handleSelect('SUPPORT_TEAM', option)}
            />
            <div className="onboarding-footer">
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
            <div className="onboarding-footer">
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
            <div className="onboarding-footer">
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
            <div className="onboarding-footer">
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
            <div className="onboarding-footer">
              <Button
                label="다음으로"
                size={'L'}
                onClick={() => {
                  if (selections.MATCHING_TYPE === '1:1 매칭') {
                    goNext();
                  } else if (selections.MATCHING_TYPE === '그룹 매칭') {
                    navigate(ROUTES.ONBOARDING_GROUP);
                  }
                }}
                disabled={!isStepCompleted('MATCHING_TYPE')}
              />
            </div>
          </Step>

          <Step name="COMPLETE">
            <Complete />
            <div className="onboarding-footer">
              <Button label="메인 화면으로 이동하기" size={'L'} onClick={goNext} />
            </div>
          </Step>
        </Funnel>
      </div>
    </div>
  );
};

export default Onboarding;
