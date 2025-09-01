import Icon from '@components/icon/icon';
import { toast } from 'react-compact-toast';

type ShowErrorToastOptions = {
  icon?: boolean;
  offset?: string;
};

const DEFAULT_OFFSET = '8.3rem';
const DEFAULT_AUTOCLOSE = 3000;
const isValidRem = (v?: string) => !!v && /^-?\d+(\.\d+)?rem$/i.test(v);

const showErrorToastCore = (message: string, opts?: ShowErrorToastOptions) => {
  const { icon = true, offset } = opts ?? {};
  const resolvedOffset = isValidRem(offset) ? offset : DEFAULT_OFFSET;

  toast({
    text: message,
    icon: icon ? <Icon name="error" className="mr-[0.4rem]" /> : undefined,
    autoClose: DEFAULT_AUTOCLOSE,
    position: 'bottomCenter',
    offset: resolvedOffset,
    className:
      '!min-h-[4.5rem] max-w-[calc(43rem-3.2rem)] w-[calc(100%-3.2rem)] cap_14_m text-gray-white rounded-[12px] bg-gray-900',
  });
};

export const showErrorToast = (
  message: string,
  offsetOrOptions?: string | ShowErrorToastOptions,
  showIcon?: boolean,
) => {
  if (typeof offsetOrOptions === 'object' && offsetOrOptions) {
    return showErrorToastCore(message, offsetOrOptions);
  }
  return showErrorToastCore(message, {
    offset: typeof offsetOrOptions === 'string' ? offsetOrOptions : undefined,
    icon: typeof showIcon === 'boolean' ? showIcon : undefined,
  });
};
