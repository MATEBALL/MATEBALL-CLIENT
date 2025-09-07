let scrollLockCount = 0;
let prevOverflow: string | null = null;
let prevTouchAction: string | null = null;

export const handleScrollLock = (lock: boolean) => {
  if (typeof document === 'undefined' || !document.body) return;
  const style = document.body.style;

  if (lock) {
    if (scrollLockCount === 0) {
      prevOverflow = style.overflow || '';
      prevTouchAction = style.touchAction || '';
      style.overflow = 'hidden';
      style.touchAction = 'none';
    }
    scrollLockCount += 1;
  } else {
    scrollLockCount = Math.max(0, scrollLockCount - 1);
    if (scrollLockCount === 0) {
      if (prevOverflow) style.overflow = prevOverflow;
      else style.removeProperty('overflow');
      if (prevTouchAction) style.touchAction = prevTouchAction;
      else style.removeProperty('touch-action');
      prevOverflow = null;
      prevTouchAction = null;
    }
  }
};
