import { matchQueries } from '@apis/match/match-queries';
import Button from '@components/button/button/button';
import Card from '@components/card/match-card/card';
import usePreventBackNavigation from '@hooks/use-prevent-back-navigation';
import { gaEvent } from '@libs/analytics';
import {
  GROUP_MATCHING_CREATED_DESCRIPTION,
  MATCHING_GUIDE_MESSAGE_TITLE,
} from '@pages/match/constants/matching';
import { ENTER_CHAT_COOLDOWN_MS } from '@pages/result/constants/matching-result';
import { parseId } from '@pages/result/utils/number';
import { openExternal } from '@pages/result/utils/url';
import { ROUTES } from '@routes/routes-config';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const MatchingCreatedView = () => {
  const [params] = useSearchParams();
  const { id, matchId: matchIdParam } = useParams<{ id?: string; matchId?: string }>();
  const navigate = useNavigate();
  const [clicking, setClicking] = useState(false);
  const cooldownRef = useRef<number | null>(null);

  const mode = params.get('mode');
  const isGroupMatching = mode === 'group';

  const matchIdFromPath = parseId(id ?? matchIdParam ?? null);
  const matchIdFromQuery = parseId(params.get('matchId'));
  const matchId = Number.isFinite(matchIdFromPath) ? matchIdFromPath : matchIdFromQuery;
  const isValidMatchId = Number.isFinite(matchId);

  usePreventBackNavigation(ROUTES.MATCH);

  const { data: singleData } = useQuery({
    ...matchQueries.SINGLE_MATCH_RESULT(matchId),
    enabled: isValidMatchId && !isGroupMatching,
  });

  const { data: groupData } = useQuery({
    ...matchQueries.GROUP_MATCH_RESULT(matchId, isValidMatchId && isGroupMatching),
  });

  const {
    data: chatData,
    isLoading: isUrlLoading,
    isError,
  } = useQuery({
    ...matchQueries.OPEN_CHAT_URL(matchId, isValidMatchId),
  });

  const createdData = isGroupMatching ? groupData : singleData;
  const openChatUrl = typeof chatData?.chattingUrl === 'string' ? chatData.chattingUrl.trim() : '';
  const nickname = createdData?.nickname ?? '';

  useEffect(() => {
    return () => {
      if (cooldownRef.current !== null) {
        window.clearTimeout(cooldownRef.current);
        cooldownRef.current = null;
      }
    };
  }, []);

  const handleEnterChatClick = useCallback((): void => {
    if (!openChatUrl || clicking) return;

    gaEvent('chat_enter_click', {
      match_id: matchId,
      match_type: 'group',
      role: 'creator',
    });
    setClicking(true);
    openExternal(openChatUrl);
    cooldownRef.current = window.setTimeout(() => {
      setClicking(false);
      cooldownRef.current = null;
    }, ENTER_CHAT_COOLDOWN_MS);
  }, [clicking, openChatUrl, matchId]);

  const handleGoToMatch = () => navigate(ROUTES.MATCH);

  const chatDisabled = isUrlLoading || isError || clicking || !openChatUrl;

  return (
    <div className="h-full flex-col-between">
      <div className="w-full flex-col-center gap-[4rem] px-[1.6rem] pt-[9.3rem]">
        <section className="flex-col-center gap-[0.8rem] whitespace-pre-line text-center">
          <h1 className="title_24_sb">{MATCHING_GUIDE_MESSAGE_TITLE(nickname)}</h1>
          <p className="body_16_m text-gray-600">{GROUP_MATCHING_CREATED_DESCRIPTION}</p>
        </section>

        {createdData && (
          <Card
            className="w-full"
            type="game"
            id={createdData.id}
            nickname={createdData.nickname}
            count={isGroupMatching ? createdData.count : 1}
            imgUrl={Array.isArray(createdData.imgUrl) ? createdData.imgUrl : [createdData.imgUrl]}
            awayTeam={createdData.awayTeam}
            homeTeam={createdData.homeTeam}
            stadium={createdData.stadium}
            date={createdData.date}
            isGroup={isGroupMatching}
          />
        )}
      </div>

      <div className="w-full flex-row-center gap-[0.8rem] p-[1.6rem]">
        <Button
          label="매칭 현황"
          variant="skyblue"
          size="M"
          className="w-full"
          onClick={handleGoToMatch}
        />
        <Button
          label="채팅방 입장"
          size="M"
          className="w-full"
          disabled={chatDisabled}
          onClick={handleEnterChatClick}
        />
      </div>
    </div>
  );
};

export default MatchingCreatedView;
