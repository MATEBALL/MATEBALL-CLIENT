import Button from '@components/button/button/button';
import Card from '@components/card/match-card/card';
import Icon from '@components/icon/icon';
import { cn } from '@libs/cn';
import CarouselIndicator from '@pages/match/groups/components/carousel_indicator';
import type { MateProps } from '@pages/match/groups/types/mate-type';
import { useMate } from '@pages/match/hooks/useMate';
import { useState } from 'react';

const Mate = ({ matchId, onRequestClick, isGroupMatching = true }: MateProps) => {
  const { mates } = useMate(matchId);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative max-h-screen flex-col-center items-center gap-[4rem] pt-[4rem]">
      <section className="gap-[0.8rem] text-center">
        <h1 className="title_24_sb text-gray-black">사용자님과 딱 맞는 그룹원이에요!</h1>
        <p className="body_16_m text-gray-600">상대의 정보를 확인하고, 매칭을 요청해 보세요.</p>
      </section>

      <section className="w-full flex-col gap-[1.6rem] overflow-hidden">
        <div
          className={cn('flex transition-transform duration-300 ease-in-out')}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {mates.map((mate) => (
            <div key={mate.id} className="box-border min-w-full flex-row-center px-[1.6rem]">
              <Card className="w-full" {...mate} type="detailed" />
            </div>
          ))}
        </div>

        {isGroupMatching && (
          <div className="flex-row-center">
            <CarouselIndicator
              ids={mates.map((mate) => `mate-${mate.id}`)}
              currentIndex={currentIndex}
              onDotClick={setCurrentIndex}
            />
          </div>
        )}
      </section>

      <section className="-translate-x-1/2 fixed bottom-0 left-1/2 w-full max-w-[430px] gap-[0.4rem]">
        <div className="w-full flex-row-center gap-[0.8rem]">
          <Icon name="ic-caution" size={1.8} />
          <span className="cap_12_m text-gray-600">
            {isGroupMatching
              ? '그룹 매칭은 최대 2건까지 요청할 수 있어요.'
              : '1:1 매칭은 최대 3건까지 요청할 수 있어요.'}
          </span>
        </div>
        <div className="p-[1.6rem]">
          <Button className="w-full" label="매칭 요청하기" onClick={onRequestClick} />
        </div>
      </section>
    </div>
  );
};

export default Mate;
