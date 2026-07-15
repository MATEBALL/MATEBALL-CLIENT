import { imageMutations } from '@apis/image/image-mutations';
import { userMutations } from '@apis/user/user-mutations';
import { userQueries } from '@apis/user/user-queries';
import Button from '@components/button/button/button';
import Divider from '@components/divider/divider';
import Icon from '@components/icon/icon';
import Input from '@components/input/input';
import { USER_KEY } from '@constants/query-key';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@libs/cn';
import SelectionGroup from '@pages/edit-profile/components/selection-group';
import {
  DEFAULT_PROFILE_IMAGE_URL,
  PROFILE_SYNC_MATE,
  PROFILE_VIEWING_STYLE,
  SAME_TEAM_SERVER_VALUE,
} from '@pages/edit-profile/constants/edit-profile';
import {
  EditProfileSchema,
  type EditProfileValues,
} from '@pages/edit-profile/schema/EditProfileSchema';
import { NO_TEAM_OPTION, TEAMS } from '@pages/onboarding/constants/onboarding';
import {
  INTRODUCTION_RULE_MESSAGE,
  NICKNAME_DUPLICATED,
  NICKNAME_RULE_MESSAGE,
  NICKNAME_SUCCESS_MESSAGE,
} from '@pages/sign-up/constants/NOTICE';
import {
  INTRODUCTION_PLACEHOLDER,
  NICKNAME_PLACEHOLDER,
} from '@pages/sign-up/constants/validation';
import type { NicknameStatus } from '@pages/sign-up/types/nickname-types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const EditProfile = () => {
  const queryClient = useQueryClient();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data } = useQuery(userQueries.MATCH_CONDITION());
  const { data: userInfo } = useQuery(userQueries.USER_INFO());

  const { mutate: editProfile } = useMutation(userMutations.EDIT_PROFILE());
  const { mutate: editMatchCondition } = useMutation(userMutations.EDIT_MATCH_CONDITION());
  const { mutateAsync: checkNickname } = useMutation(userMutations.NICKNAME_CHECK());

  const postProfileImageMutation = useMutation({
    ...imageMutations.POST_PROFILE_IMAGE(),
    onSuccess: ({ profileImageUrl }) => {
      setProfileImageUrl(profileImageUrl);

      queryClient.invalidateQueries({
        queryKey: USER_KEY.INFO(),
      });
    },
  });

  const patchProfileImageMutation = useMutation({
    ...imageMutations.PATCH_PROFILE_IMAGE(),
    onSuccess: ({ profileImageUrl }) => {
      setProfileImageUrl(profileImageUrl);

      queryClient.invalidateQueries({
        queryKey: USER_KEY.INFO(),
      });
    },
  });

  // TODO: 추후 이미지 삭제 시 연결
  // const deleteProfileImageMutation = useMutation({
  //   ...imageMutations.DELETE_PROFILE_IMAGE(),
  //   onSuccess: ({ profileImageUrl }) => {
  //     setProfileImageUrl(profileImageUrl);
  //   },
  // });

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

  const [team, setTeam] = useState<string | undefined>(undefined);
  const [mateTeam, setMateTeam] = useState<string | undefined>(undefined);
  const [viewStyle, setViewStyle] = useState<string | undefined>(undefined);
  const [avgSeason, setAvgSeason] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [nicknameStatus, setNicknameStatus] = useState<NicknameStatus>('idle');
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);

  const nicknameVal = watch('nickname', '');
  const introductionVal = watch('introduction', '');

  const normalizeMateTeam = (value?: string | null) =>
    value === SAME_TEAM_SERVER_VALUE ? PROFILE_SYNC_MATE[0] : (value ?? '');

  const initial = {
    team: data?.team ?? '',
    mateTeam: normalizeMateTeam(data?.teamAllowed),
    viewStyle: data?.style ?? '',
    avgSeason: data?.avgSeason ?? 0,
  };

  const teamValue = team ?? initial.team;
  const viewStyleValue = viewStyle ?? initial.viewStyle;
  const mateTeamValue = (teamValue === NO_TEAM_OPTION ? '' : (mateTeam ?? initial.mateTeam)) ?? '';
  const avgSeasonValue = avgSeason === '' ? initial.avgSeason : Number(avgSeason);

  const isMatchDirty =
    teamValue !== initial.team ||
    mateTeamValue !== initial.mateTeam ||
    viewStyleValue !== initial.viewStyle ||
    avgSeasonValue !== initial.avgSeason;

  const isSubmitDisabled = !isMatchDirty || isSubmit;

  const hasCustomProfileImage =
    Boolean(userInfo?.imgUrl) && userInfo?.imgUrl !== DEFAULT_PROFILE_IMAGE_URL;

  // biome-ignore lint/correctness/useExhaustiveDependencies: reset nickname status whenever value changes
  useEffect(() => {
    setNicknameStatus('idle');
  }, [nicknameVal]);

  useEffect(() => {
    if (userInfo?.imgUrl) {
      setProfileImageUrl(userInfo.imgUrl);
    }
  }, [userInfo?.imgUrl]);

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

  const handleSaveClick = () => {
    if (!isMatchDirty) return;
    setIsSubmit(true);

    editMatchCondition({
      team: teamValue,
      style: viewStyleValue,
      teamAllowed: teamValue === NO_TEAM_OPTION ? null : mateTeamValue || null,
      avgSeason: avgSeasonValue,
    });
  };

  const handleCheckNickname = async () => {
    if (errors.nickname || nicknameVal.trim().length < 2) return;
    setNicknameStatus('checking');
    try {
      const available = await checkNickname({ nickname: nicknameVal });
      setNicknameStatus(available ? 'available' : 'duplicate');
    } catch {
      setNicknameStatus('idle');
    }
  };

  const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];

    if (!image) return;

    if (hasCustomProfileImage) {
      patchProfileImageMutation.mutate({ image });
    } else {
      postProfileImageMutation.mutate({ image });
    }

    event.target.value = '';
  };

  const handleProfileImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="h-full bg-gray-white px-[1.6rem] pt-[1.6rem] pb-[4rem]">
      <h2 className="subhead_18_sb mb-[1.6rem]">프로필 수정</h2>

      {/* 닉네임 */}
      <section>
        <div className="mb-[2.4rem] flex-col gap-[0.8rem]">
          <p className="body_16_m text-gray-black">프로필 이미지</p>
          <div className="relative w-fit">
            <button
              type="button"
              onClick={handleProfileImageClick}
              disabled={patchProfileImageMutation.isPending || postProfileImageMutation.isPending}
              aria-label="프로필 이미지 수정"
              className="relative w-fit"
            >
              {profileImageUrl ? (
                <img
                  src={profileImageUrl}
                  alt="프로필 이미지"
                  className="h-[6.4rem] w-[6.4rem] rounded-full object-cover"
                />
              ) : (
                <Icon name="profile" size={6.4} />
              )}

              <Icon name="camera" size={1.6} className="absolute right-0 bottom-0" />
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/webp"
              onChange={handleProfileImageChange}
              className="hidden"
            />
          </div>
        </div>

        <Controller
          name="nickname"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
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
            />
          )}
        />
        <div className="mb-[2.4rem] flex justify-end gap-[0.8rem]">
          <Button
            type="button"
            variant={
              !!errors.nickname || nicknameVal.trim().length === 0 || isSubmitting
                ? 'disabled'
                : 'skyblue'
            }
            label="중복 확인"
            onClick={handleCheckNickname}
            className={cn(
              'cap_14_sb mt-[0.8rem] w-auto px-[1.6rem] py-[0.6rem]',
              (!!errors.nickname || nicknameVal.trim().length === 0 || isSubmitting) &&
                'cursor-not-allowed',
            )}
          />
          <Button
            type="button"
            variant={
              nicknameStatus !== 'available' || nicknameVal.trim().length === 0 || isSubmitting
                ? 'disabled'
                : 'blue'
            }
            label="수정"
            onClick={submitNickname}
            className={cn(
              'cap_14_sb mt-[0.8rem] w-auto px-[1.6rem] py-[0.6rem]',
              (nicknameStatus !== 'available' || nicknameVal.trim().length === 0 || isSubmitting) &&
                'cursor-not-allowed',
            )}
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
              isHelperNeutral
            />
          )}
        />
        <div className="flex justify-end">
          <Button
            type="button"
            variant={
              !!errors.introduction || introductionVal.trim().length === 0 || isSubmitting
                ? 'disabled'
                : 'blue'
            }
            label="수정"
            onClick={submitInformation}
            className={cn(
              'cap_14_sb mt-[0.8rem] w-auto px-[1.6rem] py-[0.6rem]',
              (!!errors.introduction || introductionVal.trim().length === 0 || isSubmitting) &&
                'cursor-not-allowed',
            )}
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

          <div className="flex-col gap-[1.6rem]">
            <p className="body_16_m text-gray-black">평균 직관 수 </p>
            <Input
              value={avgSeason}
              placeholder={initial.avgSeason.toString()}
              inputMode="numeric"
              onChange={(e) => {
                const numericValue = e.target.value.replace(/\D/g, '').slice(0, 3);
                setAvgSeason(numericValue);
              }}
            />
          </div>
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
