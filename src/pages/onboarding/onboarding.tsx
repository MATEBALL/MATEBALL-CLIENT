import Button from '@components/button/button/button';
import { useFunnel } from '@hooks/use-funnel';
import { ROUTES } from '@routes/routes-config';
import Complete from './components/complete';
import Gender from './components/gender';
import MatchingType from './components/matching-type';
import ProgressBar from './components/progress-bar';
import Start from './components/start';
import SupportTeam from './components/support-team';
import SyncSupportTeam from './components/sync-support-team';
import ViewingStyle from './components/viewing-style';
import { ONBOARDING_STEPS } from './constants/onboarding';

const Onboarding = () => {
  const { Funnel, Step, currentStep, currentIndex, steps, goNext, goPrev } = useFunnel(
    ONBOARDING_STEPS,
    ROUTES.HOME,
  );
  return (
    <div className="h-full flex-col-between gap-[1.6rem]">
      <div className="w-full">
        <ProgressBar currentStep={currentIndex + 1} totalSteps={steps.length} />
      </div>

      <Funnel>
        <Step name="START">
          <Start />
          <div className="sticky bottom-0 w-full p-[1.6rem]">
            <Button label="시작하기" size={'L'} variant={'blue'} onClick={goNext} />
          </div>
        </Step>

        <Step name="SUPPORT_TEAM">
          <SupportTeam />
          <div className="sticky bottom-0 w-full p-[1.6rem]">
            <Button label="다음으로" size={'L'} variant={'blue'} onClick={goNext} />
          </div>
        </Step>

        <Step name="SYNC_SUPPORT_TEAM">
          <SyncSupportTeam />
          <div className="sticky bottom-0 w-full p-[1.6rem]">
            <Button label="다음으로" size={'L'} onClick={goNext} />
          </div>
        </Step>

        <Step name="VIEWING_STYLE">
          <ViewingStyle />
          <div className="sticky bottom-0 w-full p-[1.6rem]">
            <Button label="다음으로" size={'L'} onClick={goNext} />
          </div>
        </Step>

        <Step name="GENDER">
          <Gender />
          <div className="sticky bottom-0 w-full p-[1.6rem]">
            <Button label="다음으로" size={'L'} onClick={goNext} />
          </div>
        </Step>

        <Step name="MATCHING_TYPE">
          <MatchingType />
          <div className="sticky bottom-0 w-full p-[1.6rem]">
            <Button label="다음으로" size={'L'} onClick={goNext} />
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
  );
};

export default Onboarding;
