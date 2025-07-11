import BottomSheetModal from '@components/bottom-sheet/bottom-sheet-modal';
import Mate from '@pages/match/components/mate';
import { isInvalidMatchId, MATCHING_DESCRIPTION } from '@pages/match/constants/matching';
import { ROUTES } from '@routes/routes-config';
import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const SinglePage = () => {
  const { matchId } = useParams();
  const numericMatchId = Number(matchId);
  const [showModal, setShowModal] = useState(false);

  if (isInvalidMatchId(matchId)) {
    return <Navigate to={ROUTES.ERROR} replace />;
  }

  return (
    <>
      <Mate
        isGroupMatching={false}
        matchId={numericMatchId}
        onRequestClick={() => setShowModal(true)}
      />
      {showModal && (
        <BottomSheetModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          description={MATCHING_DESCRIPTION.single.description}
          subDescription={MATCHING_DESCRIPTION.single.subDescription}
          isGroupMatching={false}
        />
      )}
    </>
  );
};

export default SinglePage;
