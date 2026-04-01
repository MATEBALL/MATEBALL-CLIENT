import { GROUP_MAX } from '@components/card/constants/MATCH';
import CardProfile from '@components/card/match-card/components/card-profile-image';
import type { CardProps } from '@components/card/match-card/types/card';
import Chip from '@components/chip/chip';
import ChipList from '@components/chip/chip-list';
import ChipState from '@components/chip/chip-state/chip-state';
import Icon from '@components/icon/icon';
import { cn } from '@libs/cn';
import { ROUTES } from '@routes/routes-config';
import { matchPath, useLocation } from 'react-router-dom';

type CardHeaderProps = CardProps & {
  onMembersClick?: () => void;
};

const CardHeader = ({ onMembersClick, ...props }: CardHeaderProps) => {
  const { pathname } = useLocation();
  const isCreateMatchPage = matchPath(ROUTES.MATCH_CREATE(), pathname);

  const getCrownSpec = (t: CardProps['type']) => {
    if (t === 'group' || t === 'game' || t === 'match') {
      return {
        box: 'h-[1.2rem] w-[1.2rem]',
        pos: 'left-[1.6rem] bottom-0',
        size: 1.2,
      };
    }
    return {
      box: 'h-[1.2rem] w-[1.2rem]',
      pos: 'right-0 bottom-0',
      size: 1.2,
    };
  };

  const renderProfile = (p: CardProps) => {
    const spec = getCrownSpec(p.type);
    const shouldShowCrown = p.isCreated || p.type === 'game' || p.type === 'match';

    return (
      <div className="relative isolate flex items-center gap-[0.4rem]">
        <CardProfile
          type={p.type}
          imgUrl={p.imgUrl}
          isGroup={p.type === 'game' || p.type === 'match' ? p.isGroup : undefined}
        />
        {shouldShowCrown && (
          <span
            className={cn(
              'pointer-events-none absolute z-[var(--z-card-owner)]',
              spec.pos,
              'grid place-items-center rounded-full',
              spec.box,
            )}
          >
            <Icon name="crown" size={spec.size} className="text-owner" aria-hidden />
          </span>
        )}
        <button type="button" onClick={onMembersClick}>
          <Icon name="arrow-right-18" size={1.8} className="text-gray-white" />
        </button>
      </div>
    );
  };

  const chips = props.chips ?? [];

  switch (props.type) {
    case 'single':
      return (
        <div className="flex">
          {renderProfile(props)}
          <div className="pl-[1.2rem]">
            <div className="flex items-center gap-[0.8rem] pb-[0.8rem]">
              <div className="body_16_b">{props.nickname}</div>
              <div className="cap_12_m text-gray-600">
                {props.age} | {props.gender}
              </div>
            </div>
            <ChipList names={chips} />
          </div>
          {!isCreateMatchPage && (
            <div className="ml-auto">
              <ChipState status={props.status} rate={props.matchRate} colorType={props.chipColor} />
            </div>
          )}
        </div>
      );

    case 'group':
      return (
        <div className="flex">
          <div>
            <div className="subhead_18_sb text-start">
              {props.nickname} 외 {props.count - 1}명
            </div>
            <div className="flex-row-center">
              <div className="cap_12_m text-gray-900">
                매칭된 인원 {props.count}/{GROUP_MAX}
              </div>
              {renderProfile(props)}
            </div>
          </div>
          {!isCreateMatchPage && (
            <div className="ml-auto">
              <ChipState status={props.status} rate={props.matchRate} colorType={props.chipColor} />
            </div>
          )}
        </div>
      );

    case 'detailed':
      return (
        <div className="flex-col gap-[1.6rem]">
          <div className="flex gap-[0.9rem]">
            {renderProfile(props)}
            <div className="flex-col-center gap-[0.8rem]">
              <div className="flex-col">
                <div className="subhead_18_sb text-gray-black">{props.nickname}</div>
                <div className="cap_12_m text-gray-black">
                  {props.age} | {props.gender}
                </div>
              </div>
            </div>
            <div className="ml-auto">
              {props.matchRate != null && (
                <ChipState
                  status={props.status}
                  rate={props.matchRate}
                  colorType={props.chipColor}
                />
              )}
            </div>
          </div>

          <div className="flex-row gap-[0.8rem]">
            <ChipList names={chips} />
          </div>
        </div>
      );

    case 'user':
      return (
        <div className="flex">
          {renderProfile(props)}
          <div className="pl-[1.2rem]">
            <div className="flex items-center gap-[0.8rem] pb-[0.8rem]">
              <div className="body_16_b">{props.nickname}</div>
              <div className="cap_12_m text-gray-600">
                {props.age} | {props.gender}
              </div>
            </div>
            <div className="flex-row gap-[0.8rem]">
              <ChipList names={chips} />
            </div>
          </div>
        </div>
      );

    case 'game':
      return (
        <div className="flex">
          <div className="w-full flex-col gap-[0.4rem]">
            <div className="subhead_18_sb text-start">
              <div className="flex w-full">
                {props.nickname} 외 {props.count - 1}명
                {!isCreateMatchPage && (
                  <div className="ml-auto flex-row gap-[0.8rem]">
                    {props.matchRate != null && (
                      <ChipState
                        status={props.status}
                        rate={props.matchRate}
                        colorType={props.chipColor}
                      />
                    )}
                    <Chip
                      label={props.isGroup ? '그룹' : '1:1'}
                      bgColor={props.isGroup ? '그룹' : '1:1'}
                      textColor={props.isGroup ? '그룹' : '1:1'}
                      className="rounded-[8px]"
                    />
                  </div>
                )}
              </div>
            </div>
            {renderProfile(props)}
          </div>
        </div>
      );

    case 'match':
      return (
        <div className="w-full flex-col gap-[0.4rem]">
          <div className="subhead_18_sb text-start">
            <div className="flex w-full text-gray-white">
              {props.nickname} 외 {props.count - 1}명
              {!isCreateMatchPage && (
                <div className="ml-auto flex-row gap-[0.8rem]">
                  <Chip
                    label={props.isGroup ? '그룹' : '1:1'}
                    bgColor={props.isGroup ? '그룹' : '1:1'}
                    textColor={props.isGroup ? '그룹' : '1:1'}
                    className="rounded-[8px]"
                  />
                </div>
              )}
            </div>
          </div>
          {renderProfile(props)}
        </div>
      );
  }
};

export default CardHeader;
