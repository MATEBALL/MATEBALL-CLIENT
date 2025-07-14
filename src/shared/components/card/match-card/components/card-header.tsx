import { GROUP_MAX } from '@components/card/constants/MATCH';
import CardProfile from '@components/card/match-card/components/card-profile-image';
import type { CardProps } from '@components/card/match-card/types/card';
import ChipList from '@components/chip/chip-list';
import ChipState from '@components/chip/chip-state/chip-state';

const CardHeader = (props: CardProps) => {
  const { type } = props;

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
          <div className="ml-auto">
            <ChipState status={props.status} rate={props.matchRate} colorType={props.color} />
          </div>
        </div>
      );

    case 'group':
      return (
        <div className="flex">
          <div>
            <div className="subhead_18_sb">
              {props.nickname} 외 {Math.max(props.count - 1, 0)}명
            </div>
            <div className="flex flex-row-center gap-[0.8rem] py-[0.4rem]">
              <div className="cap_12_m text-gray-900">
                매칭된 인원 {props.count}/{GROUP_MAX}
              </div>
              <CardProfile type="group" imgUrl={props.imgUrl} />
            </div>
          </div>
          <div className="ml-auto">
            <ChipState status={props.status} rate={props.matchRate} colorType={props.color} />
          </div>
        </div>
      );

    case 'detailed':
      return (
        <div className="flex">
          <CardProfile type="detailed" imgUrl={props.imgUrl} />
          <div>
            <div className="gap-[0.8rem] pb-[0.8rem] pl-[1.2rem]">
              <div className="body_16_b">{props.nickname}</div>
              <div className="cap_12_m text-gray-600">
                {props.age}세 | {props.gender}
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
