import GroupMatchCard from '@pages/match/create/components/group-match-card-section';
import SingleMatchCard from '@pages/match/create/components/single-match-card-section';

interface MatchCardSectionProps {
  matchId: number;
  type: 'single' | 'group';
}

const MatchCardSection = ({ matchId, type }: MatchCardSectionProps) => {
  if (type === 'single') {
    return <SingleMatchCard matchId={matchId} />;
  }

  if (type === 'group') {
    return <GroupMatchCard matchId={matchId} />;
  }

  return null;
};

export default MatchCardSection;