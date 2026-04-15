import Icon from '@components/icon/icon';
import { toast } from 'react-compact-toast';

type ShowErrorToastOptions = {
  icon?: boolean;
  offset?: string;
  className?: string;
};

const DEFAULT_AUTOCLOSE = 2000;

const showErrorToastCore = (message: string, opts?: ShowErrorToastOptions) => {
  const { icon = true, className = '' } = opts ?? {};

  toast({
    text: message,
    icon: icon ? <Icon name="error" className="mr-[0.4rem]" /> : undefined,
    autoClose: DEFAULT_AUTOCLOSE,
    offset: opts?.offset,
    position: 'bottomCenter',
    className: `
      !min-h-[4.5rem]
      max-w-[calc(43rem-3.2rem)]
      w-[calc(100%-3.2rem)]
      rounded-[12px]
      ${className || 'cap_14_m text-gray-white bg-gray-700'}
    `,
  });
};

export const showErrorToast = (
  message: string,
  offsetOrOptions?: string | ShowErrorToastOptions,
  showIcon?: boolean,
) => {
  // 기존 API 호환성을 위해 offset 문자열을 무시하고 처리
  if (typeof offsetOrOptions === 'string') {
    return showErrorToastCore(message, {
      icon: typeof showIcon === 'boolean' ? showIcon : true,
      offset: offsetOrOptions,
    });
  }

  if (typeof offsetOrOptions === 'object' && offsetOrOptions) {
    return showErrorToastCore(message, offsetOrOptions);
  }

  return showErrorToastCore(message, {
    icon: typeof showIcon === 'boolean' ? showIcon : true,
  });
};
