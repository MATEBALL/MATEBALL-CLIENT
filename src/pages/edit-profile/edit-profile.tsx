import Button from '@components/button/button/button';
import Input from '@components/input/input';
import SelectionGroup from '@pages/edit-profile/components/selection-group';
import { PROFILE_SYNK_MATE } from '@pages/edit-profile/constants/edit-profile';
import { mockEditData } from '@pages/edit-profile/mocks/mockEditData';
import {
  GENDER,
  NO_TEAM_OPTION,
  TEAMS,
  VIEWING_STYLE,
} from '@pages/onboarding/constants/onboarding';
import { NICKNAME_RULE_MESSAGE } from '@pages/sign-up/constants/NOTICE';
import { NICKNAME_PLACEHOLDER } from '@pages/sign-up/constants/validation';
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
    mateTeam: mockEditData.teamAllowed || '상관없어요',
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
          placeholder={NICKNAME_PLACEHOLDER}
          label="한 줄 소개"
          defaultMessage={NICKNAME_RULE_MESSAGE}
        />
        <div className="flex justify-end">
          <Button label="수정" className="cap_14_sb mt-[0.8rem] w-auto px-[1.6rem] py-[0.6rem]" />
        </div>
      </section>

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
                className="cap_14_sb w-fit px-[1.6rem] py-[0.6rem] text-gray-900"
                onClick={() => setTeam(NO_TEAM_OPTION)}
              />
            </div>
          </div>

          <SelectionGroup
            title="직관 메이트의 응원팀"
            options={PROFILE_SYNK_MATE}
            selectedValue={team === NO_TEAM_OPTION ? '' : mateTeam}
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
        onClick={handleSaveClick}
        label="매칭 조건 수정"
        disabled={!isDirty || isSubmit}
        ariaLabel="매칭 조건 수정"
      />
    </div>
  );
};

export default EditProfile;
