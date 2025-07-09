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
  showOverlay?: boolean;
  rounded?: 'xl' | '2xl';
  padding?: string;
}

const BottomSheet = ({
  isOpen,
  onClose,
  children,
  className,
  showIndicator = true,
  showOverlay = true,
  rounded = 'xl',
  padding = 'p-4',
}: BottomSheetProps) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  useOutsideClick(sheetRef, onClose);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-10 flex items-end justify-center">
      {showOverlay && (
        <div className="absolute inset-0 bg-[var(--color-overlay)] backdrop-blur-sm" />
      )}

      <div
        ref={sheetRef}
        className={cn(
          'relative w-full max-w-[384px] bg-[var(--color-gray-white)] shadow-2',
          rounded === '2xl' ? 'rounded-tl-2xl rounded-tr-2xl' : 'rounded-tl-xl rounded-tr-xl',
          'flex flex-col gap-4',
          padding,
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
