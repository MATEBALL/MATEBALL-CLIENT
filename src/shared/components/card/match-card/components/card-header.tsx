import ChipList from '@components/chip/chip-list';
import { GROUP_MAX } from '../../constants/MATCH';
import type { CardProps } from '../types/card';
import CardProfile from './card-profile-image';

const CardHeader = (props: CardProps) => {
  const { type } = props;

  switch (type) {
    case 'single':
      return (
        <div className="flex">
          <CardProfile type="single" images={props.images} />
          <div>
            <div className="mb-[0.8rem] ml-[1.2rem] flex items-center gap-[0.8rem]">
              <div className="body_16_b">{props.name}</div>
              <div className="cap_12_m text-gray-600">
                {props.age}세 | {props.gender}
              </div>
            </div>
            <div className="ml-[1.2rem]">
              <ChipList names={props.chips} />
            </div>
          </div>
          <div className="ml-auto h-[2rem] bg-main-800">chipstate</div>
        </div>
      );

    case 'group':
      return (
        <div className="flex">
          <div>
            <div className="subhead_18_sb">{props.name} 외 3명</div>
            <div className="flex flex-row-center gap-[0.8rem] py-[0.4rem]">
              <div className="cap_12_m text-gray-900">
                매칭된 인원 {props.matched}/{GROUP_MAX}
              </div>
              <CardProfile type="group" images={props.images} />
            </div>
          </div>
          <div className="ml-auto h-[2rem] bg-main-800">chipstate</div>
        </div>
      );

    case 'detailed':
      return (
        <div className="flex">
          <CardProfile type="detailed" images={props.images} />
          <div>
            <div className="mb-[0.8rem] ml-[1.2rem] gap-[0.8rem]">
              <div className="body_16_b">{props.name}</div>
              <div className="cap_12_m text-gray-600">
                {props.age}세 | {props.gender}
              </div>
            </div>
            <div className="ml-[1.2rem] flex-row gap-[0.8rem]">
              <ChipList names={props.chips} />
            </div>
          </div>
          <div className="ml-auto h-[2rem] bg-main-800">chipstate</div>
        </div>
      );
  }
};

export default CardHeader;
