import Button from '@components/button/button/button';
import Input from '@components/input/input';
import { PROFILE_SYNK_MATE } from '@pages/edit-profile/constants/edit-profile';
import {
  GENDER,
  NO_TEAM_OPTION,
  TEAMS,
  VIEWING_STYLE,
} from '@pages/onboarding/constants/onboarding';
import { NICKNAME_RULE_MESSAGE } from '@pages/sign-up/constants/NOTICE';
import { NICKNAME_PLACEHOLDER } from '@pages/sign-up/constants/validation';
import { useState } from 'react';
import { mockEditData } from './mocks/mockEditData';

const EditProfile = () => {
  const [team, setTeam] = useState(mockEditData.team);
  const [gender, setGender] = useState(mockEditData.genderPreference);

  const [mateTeam, setMateTeam] = useState<string>(mockEditData.teamAllowed || '상관없어요');
  const [viewStyle, setViewStyle] = useState<string>(mockEditData.style);

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

      <hr className="my-[2.4rem] border-gray-200 border-t" />

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

          <div className="flex-col gap-[1.6rem]">
            <p className="body_16_m">직관 메이트의 응원팀</p>
            <div className="flex flex-wrap gap-[0.8rem]">
              {PROFILE_SYNK_MATE.map((option) => {
                const selected = mateTeam === option;
                return (
                  <Button
                    key={option}
                    label={option}
                    variant={selected ? 'skyblue' : 'gray2'}
                    className="cap_14_sb w-auto px-[1.6rem] py-[0.6rem] text-gray-900"
                    onClick={() => setMateTeam(option)}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex-col gap-[1.6rem]">
            <p className="body_16_m">관람 스타일</p>
            <div className="flex flex-wrap gap-[0.8rem]">
              {VIEWING_STYLE.map((option) => {
                const selected = viewStyle === option.label;
                return (
                  <Button
                    key={option.id}
                    label={option.label}
                    variant={selected ? 'skyblue' : 'gray2'}
                    className="cap_14_sb w-auto px-[1.6rem] py-[0.6rem] text-gray-900"
                    onClick={() => setViewStyle(option.label)}
                  />
                );
              })}
            </div>
          </div>

          {/* 선호 성별 섹션 */}
          <div className="flex-col gap-[1.6rem]">
            <p className="body_16_m">선호 성별</p>
            <div className="flex flex-wrap gap-[0.8rem]">
              {GENDER.map((option) => {
                const selected = gender === option.label;
                return (
                  <Button
                    key={option.id}
                    label={option.label}
                    variant={selected ? 'skyblue' : 'gray2'}
                    className="cap_14_sb w-auto px-[1.6rem] py-[0.6rem] text-gray-900"
                    onClick={() => setGender(option.label)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Button label="매칭 조건 수정" />
    </div>
  );
};

export default EditProfile;
