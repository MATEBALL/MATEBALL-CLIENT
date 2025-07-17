import { authQueries } from '@apis/auth/auth';
import queryClient from '@libs/query-client';
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
  matchMutate?: (
    payload: {
      team: string;
      teamAllowed: string | null;
      style: string;
      genderPreference: string;
    },
    options?: { onSuccess?: () => void },
  ) => void,
  goTo?: (step: 'COMPLETE') => void,
) => {
  if (currentStep === 'START') {
    goNext();
  } else if (currentStep === 'MATCHING_TYPE') {
    const { SUPPORT_TEAM, SYNC_SUPPORT_TEAM, VIEWING_STYLE, GENDER } = selections;
    const parsedTeamAllowed = SYNC_SUPPORT_TEAM === '상관없어요' ? null : SYNC_SUPPORT_TEAM;

    if (!SUPPORT_TEAM || !VIEWING_STYLE || !GENDER) return;

    if (matchMutate) {
      matchMutate(
        {
          team: SUPPORT_TEAM,
          teamAllowed: parsedTeamAllowed,
          style: VIEWING_STYLE,
          genderPreference: GENDER,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: authQueries.USER_STATUS().queryKey });
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
          },
        },
      );
    }
  } else if (currentStep === 'GROUP_ROLE' && selections.GROUP_ROLE === '그룹원') {
    goTo?.('COMPLETE');
  } else if (currentStep === 'COMPLETE') {
    navigate(ROUTES.HOME);
  } else {
    goNext();
  }
};
