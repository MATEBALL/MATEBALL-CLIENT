interface Props {
  onCancel: () => void;
  onConfirm: () => void;
}

// TODO: 추후 바텀시트 컴포넌트로 수정
const MatchingRequestModal = ({ onCancel, onConfirm }: Props) => {
  return (
    <div className="fixed right-0 bottom-0 left-0 rounded-t-2xl bg-gray-white p-6 shadow-xl">
      <p className="mb-4 text-center text-gray-800">
        그룹 매칭은 최대 2건까지 요청할 수 있어요. 단, 하루에 한 번만 요청할 수 있어요!
      </p>
      <div className="flex gap-4">
        <button type="button" className="btn-outline w-1/2" onClick={onCancel}>
          다음에 할래요
        </button>
        <button className="btn-primary w-1/2" onClick={onConfirm}>
          요청할래요
        </button>
      </div>
    </div>
  );
}

export default MatchingRequestModal;