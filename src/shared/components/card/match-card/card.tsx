import Button from '@components/button/button/button';
import CardGameInfo from '@components/card/match-card/components/card-game-info';
import CardHeader from '@components/card/match-card/components/card-header';
import { cardVariants } from '@components/card/match-card/styles/card-variants';
import type { CardProps } from '@components/card/match-card/types/card';
import Divider from '@components/divider/divider';
import { cn } from '@libs/cn';
import { useState } from 'react';
import MembersBottomSheet from './components/members-bottom-sheet';
import StateBar from './components/state-bar';
import { MATCH_STATE } from './constants/status';
import { getMatchCurrentStep } from './utils/get-match-current-step';

const Card = (props: CardProps) => {
  const { type, className, color } = props;

  const introductionClass = 'cap_14_m mt-[1.2rem]';
  const gameInfoClass = 'mt-[1.2rem] ';

  const currentStep =
    type === 'match' ? getMatchCurrentStep(props.statusLabel, props.matchTabType) : 1;

  const [isMembersSheetOpen, setIsMembersSheetOpen] = useState(false);

  return (
    <div className={cn(cardVariants({ type, color }), className)}>
      <CardHeader
        {...props}
        onMembersClick={type === 'match' ? () => setIsMembersSheetOpen(true) : undefined}
      />
      <div className={cn(type === 'detailed' && 'flex-col gap-[2rem]')}>
        {(type === 'detailed' || type === 'user') && (
          <p className={introductionClass}>{props.introduction}</p>
        )}

        {type !== 'user' && type !== 'detailed' && (
          <CardGameInfo
            className={cn(type === 'single' && 'mt-[1.2rem]', gameInfoClass)}
            awayTeam={props.awayTeam}
            homeTeam={props.homeTeam}
            stadium={props.stadium || ''}
            date={props.date}
          />
        )}

        {type === 'detailed' && (
          <div className="flex-col gap-[1.6rem]">
            <div className="w-full flex-row items-center rounded-[8px] bg-gray-white px-[1.2rem] py-[0.8rem]">
              <div className="flex-1 flex-col-between gap-[0.2rem]">
                <p className="cap_14_sb text-gray-600">함께한 매칭</p>
                <p className="head_20_sb text-gray-800">{props.avgGame ?? '-'}</p>
              </div>
              <div className="h-[3.3rem]">
                <Divider direction="vertical" thickness={0.1} color="bg-gray-300" />
              </div>
              <div className="flex-1 flex-col-between gap-[0.2rem]">
                <p className="cap_14_sb text-gray-600">시즌 평균 직관</p>
                <p className="head_20_sb text-gray-800">{props.avgSeason ?? '-'}</p>
              </div>
            </div>
          </div>
        )}

        {type === 'match' && (
          <div className="flex-col gap-[1.2rem]">
            <div className="flex-col gap-[0.4rem]">
              <StateBar currentStep={currentStep} totalSteps={2} />
              <div className="cap_12_m grid grid-cols-3 text-gray-300">
                {props.matchTabType === 'created' ? (
                  <>
                    <p className="text-left">{MATCH_STATE.CREATED}</p>
                    <p className="text-center">{MATCH_STATE.RECRUITING}</p>
                    <p className="text-right">{MATCH_STATE.MATCHING_COMPLETE}</p>
                  </>
                ) : (
                  <>
                    <p className="text-left">{MATCH_STATE.REQUESTED}</p>
                    <p className="text-center">{MATCH_STATE.WAITING}</p>
                    <p className="text-right">{MATCH_STATE.APPROVAL_COMPLETE}</p>
                  </>
                )}
              </div>
            </div>
            {/* TODO: 오픈채팅방 링크 연결 */}
            <Button
              label="채팅방 입장하기"
              size="XS"
              className="cap_14_sb"
              disabled={!props.isButtonEnabled}
              onClick={(event) => {
                event.stopPropagation();
              }}
            />
          </div>
        )}

        {type === 'match' && (
          <MembersBottomSheet
            isOpen={isMembersSheetOpen}
            onClose={() => setIsMembersSheetOpen(false)}
            matchId={props.id}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
