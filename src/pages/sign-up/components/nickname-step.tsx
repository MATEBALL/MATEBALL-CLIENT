import Button from '@components/button/button/button';
import Input from '@components/input/input';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  NICKNAME_RULE_MESSAGE,
  NICKNAME_SUCCESS_MESSAGE,
  NICKNAME_TITLE,
} from '@pages/sign-up/constants/NOTICE';
import { NICKNAME_PLACEHOLDER } from '@pages/sign-up/constants/validation';
import { type NicknameFormValues, NicknameSchema } from '@pages/sign-up/schema/validation-schema';
import { useForm } from 'react-hook-form';

const NicknameStep = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<NicknameFormValues>({
    mode: 'onChange',
    resolver: zodResolver(NicknameSchema),
    defaultValues: { nickname: '' },
  });

  const nicknameValue = watch('nickname');
  const isNicknameValid = !errors.nickname && nicknameValue.length > 0;

  const onSubmit = (data: NicknameFormValues) => {
<<<<<<< HEAD
    console.log(data.nickname);
=======
    console.log('닉네임 제출됨:', data.nickname);
>>>>>>> 1bba458 (feat: 닉네임 react-hook-form 연결 (#95))
  };

  const { onBlur, ref, ...inputProps } = register('nickname');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full flex-col justify-between gap-[4rem]">
      <div className="flex-col gap-[4rem]">
        <h1 className="title_24_sb whitespace-pre-line">{NICKNAME_TITLE}</h1>
        <Input
          placeholder={NICKNAME_PLACEHOLDER}
          label="닉네임"
          icon="ic-x"
          defaultMessage={isNicknameValid ? NICKNAME_SUCCESS_MESSAGE : NICKNAME_RULE_MESSAGE}
          validationMessage={errors.nickname?.message}
          isError={!!errors.nickname}
          isValid={isNicknameValid}
          onBlur={onBlur}
          ref={ref}
          {...inputProps}
        />
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

export default NicknameStep;
