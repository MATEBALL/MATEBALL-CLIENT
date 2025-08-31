import Button from '@components/button/button/button';
import Divider from '@components/divider/divider';
import Input from '@components/input/input';
import { cn } from '@libs/cn';
import SelectionGroup from '@pages/edit-profile/components/selection-group';
import { PROFILE_SYNC_MATE } from '@pages/edit-profile/constants/edit-profile';
import { mockEditData } from '@pages/edit-profile/mocks/mockEditData';
import {
  GENDER,
  NO_TEAM_OPTION,
  TEAMS,
  VIEWING_STYLE,
} from '@pages/onboarding/constants/onboarding';
import { INFORMATION_RULE_MESSAGE, NICKNAME_RULE_MESSAGE } from '@pages/sign-up/constants/NOTICE';
import { INFORMATION_PLACEHOLDER, NICKNAME_PLACEHOLDER } from '@pages/sign-up/constants/validation';
import { useMemo, useRef, useState } from 'react';

const EditProfile = () => {
  const [team, setTeam] = useState(mockEditData.team);
  const [gender, setGender] = useState(mockEditData.genderPreference);
  const [mateTeam, setMateTeam] = useState(mockEditData.teamAllowed || '상관없어요');
  const [viewStyle, setViewStyle] = useState(mockEditData.style);
  const [isSubmit, setIsSubmit] = useState(false);

  const initialValue = useRef({
    team: mockEditData.team,
    gender: mockEditData.genderPreference,
    mateTeam: mockEditData.teamAllowed,
    viewStyle: mockEditData.style,
  });

  const isDirty = useMemo(() => {
    const init = initialValue.current;

    return (
      team !== init.team ||
      gender !== init.gender ||
      mateTeam !== init.mateTeam ||
      viewStyle !== init.viewStyle
    );
  }, [team, gender, mateTeam, viewStyle]);

  const isSubmitDisabled = !isDirty || isSubmit;

  const handleSaveClick = () => {
    if (!isDirty) return;

    setIsSubmit(true);

    // TODO: 실제 API 호출
  };

  return (
    <div className="h-full bg-gray-white px-[1.6rem] pt-[1.6rem] pb-[4rem]">
      <h2 className="subhead_18_sb mb-[1.6rem]">프로필 수정</h2>
      <section>
        <Input
          placeholder={NICKNAME_PLACEHOLDER}
          label="닉네임"
          defaultMessage={NICKNAME_RULE_MESSAGE}
        />
        <div className="mb-[2.5rem] flex justify-end">
          <Button label="수정" className="cap_14_sb mt-[0.8rem] w-auto px-[1.6rem] py-[0.6rem]" />
        </div>

        <Input
          placeholder={INFORMATION_PLACEHOLDER}
          defaultMessage={INFORMATION_RULE_MESSAGE}
          length={0}
          hasLength
          className="h-[10.4rem]"
          label="한 줄 소개"
          multiline
        />
        <div className="flex justify-end">
          <Button label="수정" className="cap_14_sb mt-[0.8rem] w-auto px-[1.6rem] py-[0.6rem]" />
        </div>
      </section>

      <div className="-mx-[1.6rem] my-[3.2rem]">
        <Divider thickness={0.4} />
      </div>

      <section className="flex-col pb-[5.6rem]">
        <h2 className="subhead_18_sb mb-[0.4rem]">매칭 조건 수정</h2>
        <p className="cap_12_m mb-[1.6rem] text-gray-500">
          수정한 조건을 기반으로 새로운 메이트를 추천해드려요!
        </p>

        <div className="flex-col gap-[3.2rem]">
          <div className="flex-col gap-[1.6rem]">
            <p className="body_16_m">응원팀</p>
            <div className="flex flex-wrap gap-[0.8rem]">
              {TEAMS.map((option) => {
                const selected = team === option;
                return (
                  <Button
                    key={option}
                    label={option}
                    variant={selected ? 'skyblue' : 'gray2'}
                    className="cap_14_sb w-auto px-[1.6rem] py-[0.6rem] text-gray-900"
                    onClick={() => setTeam(option)}
                  />
                );
              })}
              <Button
                label={NO_TEAM_OPTION}
                variant={team === NO_TEAM_OPTION ? 'skyblue' : 'gray2'}
                className="cap_14_sb w-fit px-[1.6rem] py-[0.6rem] "
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
            selectedValue={mateTeam}
            onSelect={setMateTeam}
            disabled={team === NO_TEAM_OPTION}
          />

          <SelectionGroup
            title="관람 스타일"
            options={VIEWING_STYLE}
            selectedValue={viewStyle}
            onSelect={setViewStyle}
          />

          <SelectionGroup
            title="선호 성별"
            options={GENDER}
            selectedValue={gender}
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
