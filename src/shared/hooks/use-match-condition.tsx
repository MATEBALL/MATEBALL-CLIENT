import { matchMutations } from '@apis/match/match-mutations';
import { useMutation } from '@tanstack/react-query';

export const useMatchConditionMutation = () => {
  return useMutation(matchMutations.MATCH_CONDITION());
};
