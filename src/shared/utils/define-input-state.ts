export const defineInputState = (isError?: boolean, isFocused?: boolean) => {
  if (isError) return 'error';
  if (isFocused) return 'focus';

  return undefined;
};
