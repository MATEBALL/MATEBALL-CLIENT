import CarouselIndicator from '@pages/match/groups/components/carousel_indicator';
import { useSlide } from '@pages/match/hooks/useSlide';
import { getSlideTransformStyle } from '@pages/match/styles/get-slide-transformstyle';
import { useState } from 'react';

const guideImages = [
  { id: 1, src: 'images/guide_image_1.webp', alt: '가이드 1' },
  { id: 2, src: 'images/guide_image_2.webp', alt: '가이드 2' },
  { id: 3, src: 'images/guide_image_3.webp', alt: '가이드 3' },
  { id: 4, src: 'images/guide_image_4.webp', alt: '가이드 4' },
  { id: 5, src: 'images/guide_image_5.webp', alt: '가이드 5' },
  { id: 6, src: 'images/guide_image_6.webp', alt: '가이드 6' },
];

const Guide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { handleTouchStart, handleTouchEnd, handleMouseDown } = useSlide({
    length: guideImages.length,
    currentIndex,
    onChange: setCurrentIndex,
  });

  return (
    <div>
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
          {guideImages.map((image, index) => (
            <li
              key={image.id}
              aria-roledescription="slide"
              aria-label={`가이드 이미지 ${index + 1} / ${guideImages.length}`}
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
            ids={guideImages.map((image) => `guide-${image.id}`)}
            currentIndex={currentIndex}
            onDotClick={setCurrentIndex}
          />
        </div>
      </section>
    </div>
  );
};

export default Guide;
