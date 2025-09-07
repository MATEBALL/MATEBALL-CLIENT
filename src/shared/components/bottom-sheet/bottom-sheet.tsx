import BottomSheetIndicator from '@components/bottom-sheet/bottom-sheet-indicator';
import useOutsideClick from '@components/bottom-sheet/hooks/use-outside-click';
import { cn } from '@libs/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { toggleScrollLock } from '@/shared/utils/scroll-lock';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  showIndicator?: boolean;
  gap?: string;
}

const BottomSheet = ({
  isOpen,
  onClose,
  children,
  className,
  showIndicator = true,
  gap,
}: BottomSheetProps) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  useOutsideClick(sheetRef, onClose);

  useEffect(() => {
    toggleScrollLock(isOpen);

    return () => {
      if (isOpen) {
        toggleScrollLock(false);
      }
    };
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            ref={sheetRef}
            className={cn(
              'relative flex w-full max-w-[43rem] flex-col rounded-tl-[12px] rounded-tr-[12px] bg-gray-white',
              gap,
              className,
            )}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {showIndicator && <BottomSheetIndicator onClick={onClose} />}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default BottomSheet;
