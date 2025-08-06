import Icon from '@components/icon/icon';
import { toast } from 'react-compact-toast';

export const showErrorToast = (message: string, offset: string = '8.3rem') => {
  toast({
    text: message,
    icon: <Icon name="error" className="mr-[0.4rem]" />,
    autoClose: 3000,
    position: 'bottomCenter',
    offset,
    className:
      'min-h-[4.5rem]! max-w-[calc(43rem-3.2rem)] w-[calc(100%-3.2rem)] cap_14_m text-gray-white rounded-[12px] bg-gray-900',
  });
};
