import { authQueries } from '@apis/auth/auth';
import { gaEvent } from '@libs/analytics';
import queryClient from '@libs/query-client';
import { ROUTES } from '@routes/routes-config';
import type { NavigateFunction } from 'react-router-dom';

export const getButtonLabel = (currentStep: string) => {
  switch (currentStep) {
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
  if (currentStep === 'COMPLETE') return false;
  return selections[currentStep] === null;
};

export const handleButtonClick = (
  currentStep: string,
  selections: Record<string, string | null>,
  goNext: () => void,
  navigate: NavigateFunction,
  matchMutate?: (
    payload: {
      team: string;
      teamAllowed: string | null;
      style: string;
      genderPreference: string;
    },
    options?: { onSuccess?: () => void },
  ) => void,
) => {
  if (currentStep === 'MATCHING_TYPE') {
    const { SUPPORT_TEAM, SYNC_SUPPORT_TEAM, VIEWING_STYLE, GENDER } = selections;
    const parsedTeamAllowed = SYNC_SUPPORT_TEAM === '상관없어요' ? null : SYNC_SUPPORT_TEAM;

    if (!SUPPORT_TEAM || !VIEWING_STYLE || !GENDER) return;

    matchMutate?.(
      {
        team: SUPPORT_TEAM,
        teamAllowed: parsedTeamAllowed,
        style: VIEWING_STYLE,
        genderPreference: GENDER,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: authQueries.USER_STATUS().queryKey });

          gaEvent('condition_set_completed', {
            match_type: selections.MATCHING_TYPE === '1:1 매칭' ? 'one_to_one' : 'group',
          });

          goNext();
        },
      },
    );

    return;
  }

  if (currentStep === 'COMPLETE') {
    navigate(ROUTES.HOME);
    return;
  }

  goNext();
};
