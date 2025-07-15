export interface OnboardingStepProps {
  selectedOption: string | null;
  onSelect: (option: string) => void;
}

export interface MatchingTypeProps extends OnboardingStepProps {
  selections: Record<string, string | null>;
}
