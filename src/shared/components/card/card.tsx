interface CardProps {
  type: 'solo' | 'group' | 'detailed';
  username: string;
  age: string;
  gender: string;
  team: string;
  enthusiasm: string;
  status: '매칭 완료' | '승인 대기 중' | '새 요청';
  subText?: string; // 한 줄 소개 or 인원 수 등
  percent?: number; // 매칭률 (optional)
  avatars: string[]; // 아바타 url 리스트
}

const Card = ({ type, username, age, gender, subText, percent, avatars }: CardProps) => {
  return (
    <div className="relative w-[34.3rem] rounded-[1rem] bg-white p-[1.2rem] shadow-md">
      {/* 유저/그룹 아바타 */}
      <div className="flex items-center">
        {avatars.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className="-ml-2 h-8 w-8 rounded-full border-2 border-white"
          />
        ))}
        <div className="ml-3">
          <div className="font-bold">
            {type === 'group' ? `${username} 외 ${avatars.length - 1}명` : username}
          </div>
          <div className="text-gray-500 text-sm">
            {age}세 | {gender}
          </div>
        </div>
        <div className="ml-auto" />
      </div>

      {/* 태그 */}
      <div className="mt-2 flex gap-2" />

      {/* 한 줄 소개 or 매칭 인원 */}
      {subText && <div className="mt-2 text-sm">{subText}</div>}

      {/* 하단 경기 정보 */}
      <div className="mt-2 flex items-center gap-2 text-gray-500 text-xs">
        <span>⚾ 어웨이 vs 홈</span>
        <span>📍 경기장</span>
        <span>📅 NN월 NN일</span>
      </div>

      {/* 매칭률 표시 */}
      {percent !== undefined && (
        <div className="absolute right-2 bottom-2 flex items-center gap-1 rounded bg-gray-100 px-2 py-1">
          <span className="text-xs">매칭률</span>
          <span className="font-bold text-sm">{percent}%</span>
        </div>
      )}
    </div>
  );
};

export default Card;
