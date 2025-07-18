import { GROUP_MAX } from '@components/card/constants/MATCH';
import CardProfile from '@components/card/match-card/components/card-profile-image';
import type { CardProps } from '@components/card/match-card/types/card';
import ChipList from '@components/chip/chip-list';
import ChipState from '@components/chip/chip-state/chip-state';
import { ROUTES } from '@routes/routes-config';
import { matchPath, useLocation } from 'react-router-dom';

const CardHeader = (props: CardProps) => {
  const { type } = props;
  const { pathname } = useLocation();

  const isCreateMatchPage = matchPath(ROUTES.MATCH_CREATE(), pathname);

  switch (type) {
    case 'single':
      return (
        <div className="flex">
          <CardProfile type="single" imgUrl={props.imgUrl} />
          <div>
            <div className="flex items-center gap-[0.8rem] pb-[0.8rem] pl-[1.2rem]">
              <div className="body_16_b">{props.nickname}</div>
              <div className="cap_12_m text-gray-600">
                {props.age} | {props.gender}
              </div>
            </div>
            <div className="pl-[1.2rem]">
              <ChipList names={props.chips ?? []} />
            </div>
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
            <div className="flex-row-center gap-[0.8rem] py-[0.4rem]">
              <div className="cap_12_m text-gray-900">
                매칭된 인원 {props.count}/{GROUP_MAX}
              </div>
              <CardProfile type="group" imgUrl={props.imgUrl} />
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
        <div className="flex gap-[1.2rem]">
          <CardProfile type="detailed" imgUrl={props.imgUrl} />
          <div className="flex-col gap-[0.8rem]">
            <div className="flex-col gap-[0.4rem]">
              <div className="body_16_b">{props.nickname}</div>
              <div className="cap_12_m text-gray-600">
                {props.age} | {props.gender}
              </div>
            </div>
            <div className="flex-row gap-[0.8rem]">
              <ChipList names={props.chips} />
            </div>
          </div>
        </div>
      );

    case 'user':
      return (
        <div className="flex">
          <CardProfile type="user" imgUrl={props.imgUrl} />
          <div>
            <div className="gap-[0.8rem] pb-[0.8rem] pl-[1.2rem]">
              <div className="body_16_b">{props.nickname}</div>
              <div className="cap_12_m text-gray-600">
                {props.age} | {props.gender}
              </div>
            </div>
            <div className="ml-[1.2rem] flex-row gap-[0.8rem]">
              <ChipList names={props.chips} />
            </div>
          </div>
        </div>
      );
  }
};

export default CardHeader;
