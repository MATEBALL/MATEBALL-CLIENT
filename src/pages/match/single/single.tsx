import Mate from '@pages/match/components/mate';
import MatchingRequestModal from '@pages/match/groups/components/matching-request-modal';
import { ROUTES } from '@routes/routes-config';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SinglePage = () => {
  const { matchId } = useParams();
  const numericMatchId = Number(matchId);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleRequest = () => {
    // TODO: 요청 API
    setShowModal(false);
    navigate(`${ROUTES.RESULT}?type=sent`);
  };

  return (
    <>
      <Mate
        isGroupMatching={false}
        matchId={numericMatchId!}
        onRequestClick={() => setShowModal(true)}
      />
      {showModal && (
        <MatchingRequestModal onConfirm={handleRequest} onCancel={() => setShowModal(false)} />
      )}
    </>
  );
};

export default SinglePage;
