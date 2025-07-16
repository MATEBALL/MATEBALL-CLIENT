import Icon from '@components/icon/icon';
import { toast } from 'react-compact-toast';

export const showErrorToast = (message: string) => {
  toast({
    text: message,
    icon: <Icon name="error" />,
    autoClose: 900000,
    position: 'bottomCenter',
    className:
      'min-h-[4.5rem]! bottom-[8.3rem] cap_14_m text-gray-white rounded-[12px] gap-[0.8rem] bg-gray-900',
  });
};
