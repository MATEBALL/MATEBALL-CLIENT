let scrollPosition = 0;

export const lockScroll = () => {
  scrollPosition = window.scrollY;
  document.body.classList.add('scroll-locked');
  document.body.style.top = `-${scrollPosition}px`;
};

export const unlockScroll = () => {
  document.body.classList.remove('scroll-locked');
  document.body.style.top = '';
  window.scrollTo(0, scrollPosition);
};

export const toggleScrollLock = (isOpen: boolean) => {
  if (isOpen) {
    lockScroll();
  } else {
    unlockScroll();
  }
};
