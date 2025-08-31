import Icon from '@components/icon/icon';
import { cn } from '@libs/cn';
import { toast } from 'react-compact-toast';

type ShowToastOptions = {
  icon?: boolean;
  bottom?: string;
};

const isValidLen = (v: string) => /^-?\d+(\.\d+)?(rem|px|vh|vw|%)$/.test(v);

const makeOffsetClass = (v: string) => {
  const clean = v.trim();
  const safe = isValidLen(clean) ? clean : '8.3rem';
  return cn(`!bottom-[${safe}]`);
};

const isShowToastOptions = (v: unknown): v is ShowToastOptions => {
  if (v === null || typeof v !== 'object') return false;
  return 'icon' in v || 'offsetBottom' in v || 'bottom' in v;
};

type ShowErrorToastFn = {
  (message: string): void;
  (message: string, bottom: string): void;
  (message: string, options: ShowToastOptions): void;
};

export const showErrorToast: ShowErrorToastFn = (message, arg?) => {
  let iconEnabled = true;
  let bottom = '8.3rem';

  if (typeof arg === 'string') {
    bottom = arg;
  } else if (isShowToastOptions(arg)) {
    if (typeof arg.icon === 'boolean') iconEnabled = arg.icon;
    bottom = arg.bottom ?? bottom;
  }

  const offsetClass = makeOffsetClass(bottom);

  toast({
    text: message,
    icon: iconEnabled ? <Icon name="error" className="mr-[0.4rem]" /> : undefined,
    autoClose: 3000,
    position: 'bottomCenter',
    className: cn(
      'min-h-[4.5rem]! w-[calc(100%-3.2rem)] max-w-[calc(43rem-3.2rem)]',
      'cap_14_m rounded-[12px] bg-gray-900 text-gray-white',
      offsetClass,
    ),
  });
};
