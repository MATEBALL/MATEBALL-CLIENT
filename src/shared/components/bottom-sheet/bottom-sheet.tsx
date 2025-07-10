import BottomSheetIndicator from '@components/bottom-sheet/bottom-sheet-indicator';
import useOutsideClick from '@components/bottom-sheet/hooks/use-outside-click';
import { cn } from '@libs/cn';
import { useRef } from 'react';
import { createPortal } from 'react-dom';

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

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-end justify-center">
      <div className="absolute inset-0 bg-overlay" />
      <div
        ref={sheetRef}
        className={cn(
          'relative flex w-full max-w-[43rem] flex-col justify-center rounded-tl-[12px] rounded-tr-[12px] bg-gray-white',
          gap,
          className,
        )}
      >
        {showIndicator && <BottomSheetIndicator />}
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default BottomSheet;
