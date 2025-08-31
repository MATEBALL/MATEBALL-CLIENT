import { matchQueries } from '@apis/match/match-queries';
import Button from '@components/button/button/button';
import { LOTTIE_PATH } from '@constants/lotties';
import usePreventBackNavigation from '@hooks/use-prevent-back-navigation';
import { MATCHING_SUCCESS_TITLE } from '@pages/match/constants/matching';
import { ROUTES } from '@routes/routes-config';
import { useQuery } from '@tanstack/react-query';
import { Lottie } from '@toss/lottie';
import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

interface MatchingSuccessViewProps {
  isGroupMatching: boolean;
}

const MatchingSuccessView = ({ isGroupMatching }: MatchingSuccessViewProps) => {
  const [params] = useSearchParams();
  const { id, matchId: matchIdParam } = useParams<{ id?: string; matchId?: string }>();
  const [clicking, setClicking] = useState(false);

  const tab = isGroupMatching ? 'group' : 'single';
  const matchIdFromPath = Number(id ?? matchIdParam ?? '');
  const matchIdFromQuery = Number(params.get('matchId') ?? '');
  const matchId = Number.isFinite(matchIdFromPath) ? matchIdFromPath : matchIdFromQuery;

  usePreventBackNavigation(`${ROUTES.MATCH}?tab=${tab}&filter=전체`);

  const {
    data: openChatRes,
    isLoading: isUrlLoading,
    isError,
  } = useQuery({
    ...matchQueries.OPEN_CHAT_URL(matchId),
    staleTime: 0,
  });

  const openChatUrl =
    openChatRes?.data?.chattingUrl && typeof openChatRes.data.chattingUrl === 'string'
      ? openChatRes.data.chattingUrl.trim()
      : '';

  const normalizeUrl = (url: string) => (/^https?:\/\//i.test(url) ? url : `https://${url}`);

  const openExternal: (url: string) => void = (() => {
    let opening = false;
    return (url: string) => {
      if (opening) return;
      opening = true;

      const finalUrl = normalizeUrl(url);
      window.open(finalUrl, '_blank', 'noopener,noreferrer');

      window.setTimeout(() => {
        opening = false;
      }, 800);
    };
  })();

  const handleEnterChatClick = (): void => {
    if (!openChatUrl) return;
    setClicking(true);
    openExternal(openChatUrl);
    window.setTimeout(() => setClicking(false), 300);
  };

  const disabled = isUrlLoading || isError || clicking || !openChatUrl;

  return (
    <div className="h-full flex-col-between">
      <div className="flex-col-center gap-[4rem] rounded-full px-[1.6rem] pt-[4rem] pb-[8rem]">
        <h2 className="title_24_sb z-[var(--z-card-profile-4)] mb-[20rem] text-center">
          {isGroupMatching ? MATCHING_SUCCESS_TITLE.group : MATCHING_SUCCESS_TITLE.single}
        </h2>

        <div className="fixed top-[17rem]">
          <div className="matching-success-background" />
          <div className="matching-lottie-gradient" />
          <div className="z-[var(--z-card-profile-4)] h-[16rem] w-[16rem] flex-row-center">
            <Lottie src={LOTTIE_PATH.SUCCESS} loop className="w-[16rem]" />
          </div>
        </div>

        <p className="body_16_m z-[var(--z-card-profile-4)] text-center text-gray-600">
          이제 메이트와 소통할 수 있어요. <br />
          채팅방에서는 기본 예의와 매너를 지켜주세요.
        </p>
      </div>

      <div className="w-full flex-row-center gap-[0.8rem] p-[1.6rem]">
        <Button
          label="채팅방 입장하기"
          className="w-full"
          disabled={disabled}
          onClick={handleEnterChatClick}
        />
      </div>
    </div>
  );
};

export default MatchingSuccessView;
