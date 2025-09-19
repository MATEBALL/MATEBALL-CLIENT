import { userMutations } from '@apis/user/user-mutations';
import Button from '@components/button/button/button';
import Input from '@components/input/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { trackSignUpCompleted } from '@libs/analytics';
import {
  BIRTHYEAR_RULE_MESSAGE,
  BIRTHYEAR_SUCCESS_MESSAGE,
  INTRODUCTION_RULE_MESSAGE,
  NICKNAME_DUPLICATED,
  NICKNAME_RULE_MESSAGE,
  NICKNAME_SUCCESS_MESSAGE,
  NICKNAME_TITLE,
} from '@pages/sign-up/constants/NOTICE';
import {
  BIRTH_PLACEHOLDER,
  INTRODUCTION_MAX_LENGTH,
  INTRODUCTION_PLACEHOLDER,
  NICKNAME_PLACEHOLDER,
} from '@pages/sign-up/constants/validation';
import { type UserInfoFormValues, UserInfoSchema } from '@pages/sign-up/schema/validation-schema';
import type { NicknameStatus } from '@pages/sign-up/types/nickname-types';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { postUserInfoRequest } from '@/shared/types/user-types';

const SignupStep = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<UserInfoFormValues>({
    mode: 'onChange',
    resolver: zodResolver(UserInfoSchema),
    defaultValues: { nickname: '', gender: undefined, birthYear: '', introduction: '' },
  });

  const nicknameValue = watch('nickname');
  const birthYearValue = watch('birthYear');
  const genderValue = watch('gender');
  const informationValue = watch('introduction');

  const [nicknameStatus, setNicknameStatus] = useState<NicknameStatus>('idle');

  const isNicknameValid = !errors.nickname && nicknameValue.length > 0;
  const isBirthYearValid = !errors.birthYear && birthYearValue.length > 0;
  const isInformationValid = !errors.introduction && informationValue.length > 0;

  const userInfoMutation = useMutation(userMutations.USER_INFO());
  const agreementInfoMutaion = useMutation(userMutations.AGREEMENT_INFO());
  const { mutateAsync: checkNickname } = useMutation(userMutations.NICKNAME_CHECK());

  const informationLength = informationValue.length ?? 0;

  const onSubmit = async (data: UserInfoFormValues) => {
    const userData: postUserInfoRequest = {
      nickname: data.nickname,
      introduction: data.introduction,
      birthYear: Number(data.birthYear),
      gender: data.gender,
    };

    try {
      await agreementInfoMutaion.mutateAsync({ hasAccepted: true });
      const userInfoResponse = await userInfoMutation.mutateAsync(userData);

      if (userInfoResponse) {
        const userId = userInfoResponse.data?.userId;
        trackSignUpCompleted({
          userId: Number(userId),
          birthYear: userData.birthYear,
          gender: userData.gender === '여성' ? 'female' : 'male',
        });
      }
    } catch (e) {
      console.error('signup failed:', e);
    }
  };

  const { onBlur: onNicknameBlur, ref: nicknameRef, ...nicknameInputProps } = register('nickname');

  const {
    onBlur: onBirthYearBlur,
    ref: birthYearRef,
    ...birthYearInputProps
  } = register('birthYear');

  const {
    onBlur: onInformationBlur,
    ref: informationRef,
    ...informationInputProps
  } = register('introduction');

  const handleGenderClick = (gender: '여성' | '남성') => {
    setValue('gender', gender, { shouldValidate: true, shouldDirty: true });
  };

  const handleCheckNickname = async () => {
    if (!isNicknameValid) return;
    setNicknameStatus('checking');
    try {
      const available = await checkNickname({ nickname: nicknameValue });
      setNicknameStatus(available ? 'available' : 'duplicate');
    } catch {
      setNicknameStatus('idle');
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: reset nickname status whenever value changes
  useEffect(() => {
    setNicknameStatus('idle');
  }, [nicknameValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="scrollbar-hide h-full w-full flex-col justify-between gap-[4rem] overflow-auto px-[1.6rem] pt-[4rem] pb-[1.6rem]"
    >
      <div className="w-full flex-col gap-[4rem] ">
        <h1 className="title_24_sb whitespace-pre-line">{NICKNAME_TITLE}</h1>
        <div className=" flex-col gap-[2.4rem]">
          <div className="flex-col gap-[0.8rem]">
            <Input
              placeholder={NICKNAME_PLACEHOLDER}
              label="닉네임"
              defaultMessage={NICKNAME_RULE_MESSAGE}
              validationMessage={
                nicknameStatus === 'duplicate'
                  ? NICKNAME_DUPLICATED
                  : nicknameStatus === 'available'
                    ? NICKNAME_SUCCESS_MESSAGE
                    : undefined
              }
              isError={nicknameStatus === 'duplicate'}
              isValid={nicknameStatus === 'available'}
              onBlur={onNicknameBlur}
              ref={nicknameRef}
              {...nicknameInputProps}
            />
            <Button
              label="중복 확인"
              type="button"
              className="cap_14_sb ml-auto w-fit px-[1.6rem] py-[0.6rem]"
              onClick={handleCheckNickname}
              disabled={!isNicknameValid}
            />
          </div>
          <Input
            placeholder={INTRODUCTION_PLACEHOLDER}
            className="h-[10.4rem]"
            label="한 줄 소개"
            defaultMessage={INTRODUCTION_RULE_MESSAGE}
            multiline
            maxLength={INTRODUCTION_MAX_LENGTH}
            isError={!!errors.introduction}
            isValid={isInformationValid}
            onBlur={onInformationBlur}
            ref={informationRef}
            length={informationLength}
            hasLength
            {...informationInputProps}
          />
          <Input
            placeholder={BIRTH_PLACEHOLDER}
            label="출생 연도"
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
                variant={genderValue === '여성' ? 'skyblueBorder' : 'gray2'}
                label="여성"
                icon="female"
                className="flex w-full gap-[0.4rem]"
                onClick={() => handleGenderClick('여성')}
              />
              <Button
                variant={genderValue === '남성' ? 'skyblueBorder' : 'gray2'}
                label="남성"
                icon="male"
                className="flex w-full gap-[0.4rem]"
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
        disabled={!isValid || nicknameStatus !== 'available'}
      />
    </form>
  );
};

export default SignupStep;
