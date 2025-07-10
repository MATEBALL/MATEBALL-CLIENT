import Mate from '@pages/match/components/mate';
import BottomSheetModal from '@components/bottom-sheet/bottom-sheet-modal';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
  const { matchId } = useParams();
  const numericMatchId = Number(matchId);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Mate
        isGroupMatching={false}
        matchId={numericMatchId!}
        onRequestClick={() => setShowModal(true)}
      />
      {showModal && (
        <BottomSheetModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          description="1:1 매칭은 최대 3건까지 요청할 수 있어요."
          subDescription="단, 하루에 한 경기만 매칭이 성사되며 같은 날짜의 중복 매칭은 불가능해요!"
        />
      )}
    </>
  );
};

export default SinglePage;
