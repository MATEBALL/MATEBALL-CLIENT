export const getSlideTransformStyle = (index: number): React.CSSProperties => ({
  transform: `translateX(-${index * 100}%)`,
});
