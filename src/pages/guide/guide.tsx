import CarouselIndicator from '@pages/match/groups/components/carousel_indicator';
import { useSlide } from '@pages/match/hooks/useSlide';
import { getSlideTransformStyle } from '@pages/match/styles/get-slide-transformstyle';
import { useState } from 'react';
import { GUIDE_IMAGES } from './constants/guide-images';

const Guide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { handleTouchStart, handleTouchEnd, handleMouseDown } = useSlide({
    length: GUIDE_IMAGES.length,
    currentIndex,
    onChange: setCurrentIndex,
  });

  return (
    <section
      className="w-full flex-col gap-[2.4rem] overflow-hidden "
      aria-label="가이드 이미지 캐러셀"
    >
      <ul
        className="flex pt-[3.2rem] transition-transform duration-300 ease-in-out"
        style={getSlideTransformStyle(currentIndex)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        aria-roledescription="carousel"
        aria-live="polite"
      >
        {GUIDE_IMAGES.map((image, index) => (
          <li
            key={image.id}
            aria-roledescription="slide"
            aria-label={`가이드 이미지 ${index + 1} / ${GUIDE_IMAGES.length}`}
            aria-hidden={index !== currentIndex}
            className="min-w-full px-[0.8rem]"
          >
            <div className="box-border min-w-full flex-row-center ">
              <img src={image.src} alt={image.alt} className="h-auto w-full " />
            </div>
          </li>
        ))}
      </ul>

      <div className="flex-row-center">
        <CarouselIndicator
          ids={GUIDE_IMAGES.map((image) => `guide-${image.id}`)}
          currentIndex={currentIndex}
          onDotClick={setCurrentIndex}
        />
      </div>
    </section>
  );
};

export default Guide;
