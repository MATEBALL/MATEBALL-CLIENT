import BottomSheetModal from '@components/bottom-sheet/bottom-sheet-modal';
import Mate from '@pages/match/components/mate';
import { MATCHING_DESCRIPTION } from '@pages/match/constants/matching';
import { isInvalidMatchId } from '@pages/match/utils/match-validators';
import { ROUTES } from '@routes/routes-config';
import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const MatesPage = () => {
  const { matchId } = useParams();
  const numericMatchId = Number(matchId);
  const [showModal, setShowModal] = useState(false);

  if (isInvalidMatchId(matchId)) {
    return <Navigate to={ROUTES.ERROR} replace />;
  }

  return (
    <>
      <Mate
        matchId={numericMatchId}
        isGroupMatching={true}
        onRequestClick={() => setShowModal(true)}
      />
      {showModal && (
        <BottomSheetModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          description={MATCHING_DESCRIPTION.group.description}
          subDescription={MATCHING_DESCRIPTION.group.subDescription}
          isGroupMatching={true}
        />
      )}
    </>
  );
};

export default MatesPage;
