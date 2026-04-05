export const formatGender = (gender: string) => {
  if (gender === 'male') return '남성';
  if (gender === 'female') return '여성';
  return gender;
};
