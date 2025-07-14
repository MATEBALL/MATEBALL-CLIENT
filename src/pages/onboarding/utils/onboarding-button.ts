import { ROUTES } from '@routes/routes-config';
import type { NavigateFunction } from 'react-router-dom';

export const getButtonLabel = (currentStep: string) => {
  switch (currentStep) {
    case 'START':
      return '시작하기';
    case 'COMPLETE':
      return '메이트 더 찾아보기';
    default:
      return '다음으로';
  }
};

export const isButtonDisabled = (
  currentStep: string,
  selections: Record<string, string | null>,
) => {
  if (currentStep === 'START' || currentStep === 'COMPLETE') return false;
  return selections[currentStep] === null;
};

export const handleButtonClick = (
  currentStep: string,
  selections: Record<string, string | null>,
  goNext: () => void,
  navigate: NavigateFunction,
  setProgressOverride?: (step: number) => void,
) => {
  if (currentStep === 'START') {
    goNext();
  } else if (currentStep === 'MATCHING_TYPE') {
    if (selections.MATCHING_TYPE === '1:1 매칭') {
      goNext();
    } else {
      if (setProgressOverride) {
        setProgressOverride(0);
        setTimeout(() => {
          navigate(ROUTES.ONBOARDING_GROUP);
        }, 300);
      }
    }
  } else if (currentStep === 'COMPLETE') {
    navigate(ROUTES.HOME);
  } else {
    goNext();
  }
};
