import Icon from '@components/icon/icon';
import { toast } from 'react-compact-toast';

export const showErrorToast = (
  message: string,
  options?: { bottom?: '2.4rem' | '7.6rem' | '8.3rem' },
) => {
  const bottomClassMap = {
    '2.4rem': 'bottom-[2.4rem]',
    '7.6rem': 'bottom-[7.6rem]',
    '8.3rem': 'bottom-[8.3rem]',
  };

  const bottomClass = bottomClassMap[options?.bottom ?? '8.3rem'];

  toast({
    text: message,
    icon: <Icon name="error" />,
    autoClose: 3000,
    position: 'bottomCenter',
    className: `min-h-[4.5rem]! w-[34.3rem] cap_14_m text-gray-white rounded-[12px] gap-[0.8rem] bg-gray-900 ${bottomClass}`,
  });
};
