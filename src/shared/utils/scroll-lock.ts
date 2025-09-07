export const handleScrollLock = (isOpen: boolean) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  } else {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('touch-action');
  }
};
