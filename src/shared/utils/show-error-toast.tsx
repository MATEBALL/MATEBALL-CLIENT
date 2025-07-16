import Icon from '@components/icon/icon';
import { toast } from 'react-compact-toast';

export const showErrorToast = (
  message: string,
  options?: { bottom?: '-1.4rem' | '4.6rem' | '5.3rem' },
) => {
  const bottomClassMap = {
    '-1.4rem': 'bottom-[-1.4rem]',
    '4.6rem': 'bottom-[4.6rem]',
    '5.3rem': 'bottom-[5.3rem]',
  };

  const bottomClass = bottomClassMap[options?.bottom ?? '5.3rem'];

  toast({
    text: message,
    icon: <Icon name="error" />,
    autoClose: 3000,
    position: 'bottomCenter',
    className: `min-h-[4.5rem]! w-[34.3rem] cap_14_m text-gray-white rounded-[12px] gap-[0.8rem] bg-gray-900 ${bottomClass}`,
  });
};
