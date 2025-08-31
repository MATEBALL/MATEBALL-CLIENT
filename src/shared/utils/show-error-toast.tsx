import Icon from '@components/icon/icon';
import { toast } from 'react-compact-toast';

type ShowToastOptions = {
  icon?: boolean;
  offsetBottom?: string;
};

export const showErrorToast = (message: string, options?: ShowToastOptions) => {
  const { icon = true, offsetBottom } = options ?? {};

  toast({
    text: message,
    icon: icon ? <Icon name="error" className="mr-[0.4rem]" /> : undefined,
    autoClose: 3000,
    position: 'bottomCenter',
    ...(offsetBottom ? { offset: { bottom: offsetBottom } } : {}),
    className:
      'min-h-[4.5rem]! max-w-[calc(43rem-3.2rem)] w-[calc(100%-3.2rem)] cap_14_m text-gray-white rounded-[12px] bg-gray-900',
  });
};
