export const defineInputState = (isError?: boolean, isFocused?: boolean, isValid?: boolean) => {
  if (isError) return 'error';
  if (isValid) return 'valid';
  if (isFocused) return 'focus';
  return 'default';
};
