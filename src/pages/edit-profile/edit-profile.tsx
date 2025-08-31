import { userMutations } from '@apis/user/user-mutations';
import { userQueries } from '@apis/user/user-queries';
import Button from '@components/button/button/button';
import Divider from '@components/divider/divider';
import Input from '@components/input/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@libs/cn';
import SelectionGroup from '@pages/edit-profile/components/selection-group';
import {
  PROFILE_SYNC_MATE,
  PROFILE_VIEWING_STYLE,
} from '@pages/edit-profile/constants/edit-profile';
import {
  EditProfileSchema,
  type EditProfileValues,
} from '@pages/edit-profile/schema/EditProfileSchema';
import { GENDER, NO_TEAM_OPTION, TEAMS } from '@pages/onboarding/constants/onboarding';
import { INTRODUCTION_RULE_MESSAGE, NICKNAME_RULE_MESSAGE } from '@pages/sign-up/constants/NOTICE';
import {
  INTRODUCTION_PLACEHOLDER,
  NICKNAME_PLACEHOLDER,
} from '@pages/sign-up/constants/validation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';


const EditProfile = () => {
  const { data } = useQuery(userQueries.MATCH_CONDITION());

  const [team, setTeam] = useState<string | undefined>(undefined);
  const [gender, setGender] = useState<string | undefined>(undefined);
  const [mateTeam, setMateTeam] = useState<string | undefined>(undefined);
  const [viewStyle, setViewStyle] = useState<string | undefined>(undefined);
  const [isSubmit, setIsSubmit] = useState(false);

  const { mutate: editProfile } = useMutation(userMutations.EDIT_PROFILE());
  const { mutate: editMatchCondition } = useMutation(userMutations.EDIT_MATCH_CONDITION());

  const {
    control,
    formState: { errors, isSubmitting },
    trigger,
    getValues,
    watch,
  } = useForm<EditProfileValues>({
    resolver: zodResolver(EditProfileSchema),
    mode: 'onChange',
    defaultValues: { nickname: '', introduction: '' },
  });

  const nicknameVal = watch('nickname', '');
  const introductionVal = watch('introduction', '');

  const submitNickname = async () => {
    const ok = await trigger('nickname');
    if (!ok) return;
    editProfile({ field: '닉네임', value: getValues('nickname').trim() });
  };

  const submitInformation = async () => {
    const ok = await trigger('introduction');
    if (!ok) return;
    editProfile({ field: '소개', value: getValues('introduction').trim() });
  };

  const initial = {
    team: data?.team ?? '',
    gender: data?.genderPreference ?? '',
    mateTeam: data?.teamAllowed ?? '',
    viewStyle: data?.style ?? '',
  };

  const teamValue = team ?? initial.team;
  const genderValue = gender ?? initial.gender;
  const viewStyleValue = viewStyle ?? initial.viewStyle;
  const mateTeamValue = (teamValue === NO_TEAM_OPTION ? '' : (mateTeam ?? initial.mateTeam)) ?? '';

  const isMatchDirty =
    teamValue !== initial.team ||
    genderValue !== initial.gender ||
    mateTeamValue !== initial.mateTeam ||
    viewStyleValue !== initial.viewStyle;

  const isSubmitDisabled = !isMatchDirty || isSubmit;

  const handleSaveClick = () => {
    if (!isMatchDirty) return;
    setIsSubmit(true);

    editMatchCondition({
      team: teamValue,
      genderPreference: genderValue,
      style: viewStyleValue,
      teamAllowed: teamValue === NO_TEAM_OPTION ? null : mateTeamValue || null,
    });
  };

  return (
    <div className="h-full bg-gray-white px-[1.6rem] pt-[1.6rem] pb-[4rem]">
      <h2 className="subhead_18_sb mb-[1.6rem]">프로필 수정</h2>

      {/* 닉네임 */}
      <section>
        <Controller
          name="nickname"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              placeholder={NICKNAME_PLACEHOLDER}
              label="닉네임"
              defaultMessage={NICKNAME_RULE_MESSAGE}
              validationMessage={fieldState.error?.message}
              isError={!!fieldState.error}
              isValid={!fieldState.error && field.value.trim().length > 0}
            />
          )}
        />
        <div className="mb-[2.5rem] flex justify-end">
          <Button
            type="button"
            label="수정"
            onClick={submitNickname}
            disabled={!!errors.nickname || nicknameVal.trim().length === 0 || isSubmitting}
            className="cap_14_sb mt-[0.8rem] w-auto px-[1.6rem] py-[0.6rem]"
          />
        </div>

        <Controller
          name="introduction"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              placeholder={INTRODUCTION_PLACEHOLDER}
              defaultMessage={INTRODUCTION_RULE_MESSAGE}
              isError={!!fieldState.error}
              isValid={!fieldState.error && field.value.trim().length > 0}
              length={introductionVal.length}
              hasLength
              className="h-[10.4rem]"
              label="한 줄 소개"
              multiline
            />
          )}
        />
        <div className="flex justify-end">
          <Button
            type="button"
            label="수정"
            onClick={submitInformation}
            disabled={!!errors.introduction || introductionVal.trim().length === 0 || isSubmitting}
            className="cap_14_sb mt-[0.8rem] w-auto px-[1.6rem] py-[0.6rem]"
          />
        </div>
      </section>

      <div className="-mx-[1.6rem] my-[3.2rem]">
        <Divider thickness={0.4} />
      </div>

      {/* 매칭 조건 */}
      <section className="flex-col pb-[5.6rem]">
        <h2 className="subhead_18_sb mb-[0.4rem]">매칭 조건 수정</h2>
        <p className="cap_12_m mb-[1.6rem] text-gray-500">
          수정한 조건을 기반으로 새로운 메이트를 추천해드려요!
        </p>

        <div className="flex-col gap-[3.2rem]">
          <div className="flex-col gap-[1.6rem]">
            <p className="body_16_m">응원팀</p>
            <div className="flex flex-wrap gap-[0.8rem]">
              {TEAMS.map((option) => (
                <Button
                  key={option}
                  label={option}
                  variant={teamValue === option ? 'skyblue' : 'gray2'}
                  className="cap_14_sb w-auto px-[1.6rem] py-[0.6rem]"
                  onClick={() => setTeam(option)}
                />
              ))}
              <Button
                label={NO_TEAM_OPTION}
                variant={teamValue === NO_TEAM_OPTION ? 'skyblue' : 'gray2'}
                className="cap_14_sb w-fit px-[1.6rem] py-[0.6rem]"
                onClick={() => {
                  setTeam(NO_TEAM_OPTION);
                  setMateTeam('상관없어요');
                }}
              />
            </div>
          </div>

          <SelectionGroup
            title="직관 메이트의 응원팀"
            options={PROFILE_SYNC_MATE}
            selectedValue={mateTeamValue}
            onSelect={setMateTeam}
            disabled={teamValue === NO_TEAM_OPTION}
          />

          <SelectionGroup
            title="관람 스타일"
            options={PROFILE_VIEWING_STYLE}
            selectedValue={viewStyleValue}
            onSelect={setViewStyle}
          />

          <SelectionGroup
            title="선호 성별"
            options={GENDER}
            selectedValue={genderValue}
            onSelect={setGender}
          />
        </div>
      </section>

      <Button
        variant={isSubmitDisabled ? 'disabled' : 'blue'}
        className={cn(isSubmitDisabled && 'cursor-not-allowed')}
        onClick={handleSaveClick}
        label="매칭 조건 수정"
        ariaLabel="매칭 조건 수정"
      />
    </div>
  );
};

export default EditProfile;
