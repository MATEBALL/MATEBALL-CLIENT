import Button from '@components/button/button/button';
import Input from '@components/input/input';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  BIRTHYEAR_RULE_MESSAGE,
  BIRTHYEAR_SUCCESS_MESSAGE,
  NICKNAME_RULE_MESSAGE,
  NICKNAME_SUCCESS_MESSAGE,
  NICKNAME_TITLE,
} from '@pages/sign-up/constants/NOTICE';
import { BIRTH_PLACEHOLDER, NICKNAME_PLACEHOLDER } from '@pages/sign-up/constants/validation';
import { type NicknameFormValues, NicknameSchema } from '@pages/sign-up/schema/validation-schema';
import { useForm } from 'react-hook-form';

const SignupStep = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<NicknameFormValues>({
    mode: 'onChange',
    resolver: zodResolver(NicknameSchema),
    defaultValues: { nickname: '', gender: undefined, birthYear: '' },
  });

  const nicknameValue = watch('nickname');
  const birthYearValue = watch('birthYear');
  const genderValue = watch('gender');

  const isNicknameValid = !errors.nickname && nicknameValue.length > 0;
  const isBirthYearValid = !errors.birthYear && birthYearValue.length > 0;

  const onSubmit = (data: NicknameFormValues) => {
    console.log(data);
  };

  const { onBlur: onNicknameBlur, ref: nicknameRef, ...nicknameInputProps } = register('nickname');

  const {
    onBlur: onBirthYearBlur,
    ref: birthYearRef,
    ...birthYearInputProps
  } = register('birthYear');

  const handleGenderClick = (gender: '여성' | '남성') => {
    setValue('gender', gender, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full w-full flex-col justify-between gap-[4rem]"
    >
      <div className="w-full flex-col gap-[4rem]">
        <h1 className="title_24_sb whitespace-pre-line">{NICKNAME_TITLE}</h1>
        <div className=" flex-col gap-[2.4rem]">
          <Input
            placeholder={NICKNAME_PLACEHOLDER}
            label="닉네임"
            defaultMessage={isNicknameValid ? NICKNAME_SUCCESS_MESSAGE : NICKNAME_RULE_MESSAGE}
            validationMessage={errors.nickname?.message}
            isError={!!errors.nickname}
            isValid={isNicknameValid}
            onBlur={onNicknameBlur}
            ref={nicknameRef}
            {...nicknameInputProps}
          />
          <Input
            placeholder={BIRTH_PLACEHOLDER}
            label="생년"
            defaultMessage={isBirthYearValid ? BIRTHYEAR_SUCCESS_MESSAGE : BIRTHYEAR_RULE_MESSAGE}
            validationMessage={errors.birthYear?.message}
            isError={!!errors.birthYear}
            isValid={isBirthYearValid}
            onBlur={onBirthYearBlur}
            ref={birthYearRef}
            {...birthYearInputProps}
          />
          <div className="flex-col gap-[0.8rem]">
            <p className="body_16_m">성별</p>
            <div className="flex w-full gap-[0.8rem]">
              <Button
                variant={genderValue === '여성' ? 'skyblueBorder' : 'white'}
                label="여성"
                icon="ic-female"
                iconSize="24"
                iconPosition="right"
                className="w-full bg-background"
                onClick={() => handleGenderClick('여성')}
              />
              <Button
                variant={genderValue === '남성' ? 'skyblueBorder' : 'white'}
                label="남성"
                icon="ic-male"
                iconSize="24"
                iconPosition="right"
                className="w-full bg-background"
                onClick={() => handleGenderClick('남성')}
              />
            </div>
            {!!errors.gender && (
              <p className="mt-1 text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>
        </div>
      </div>
      <Button
        label="가입하기"
        className="w-full"
        ariaLabel="가입하기"
        type="submit"
        disabled={!isValid}
      />
    </form>
  );
};

export default SignupStep;
