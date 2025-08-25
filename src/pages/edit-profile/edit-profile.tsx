import Button from '@components/button/button/button';
import Input from '@components/input/input';
import { NO_TEAM_OPTION, TEAMS } from '@pages/onboarding/constants/onboarding';
import { NICKNAME_PLACEHOLDER } from '@pages/sign-up/constants/validation';

const EditProfile = () => {
  return (
    <div className="h-full bg-gray-white px-[1.6rem] pt-[1.6rem]">
      <h2 className="subhead_18_sb mb-[1.6rem]">프로필 수정</h2>
      <section>
        <Input placeholder={NICKNAME_PLACEHOLDER} label="닉네임" />
        <div className="mb-[2.5rem] flex justify-end">
          <Button label="수정" className="cap_14_sb mt-[0.8rem] w-auto px-[1.6rem] py-[0.6rem]" />
        </div>

        <Input placeholder={NICKNAME_PLACEHOLDER} label="한 줄 소개" />
        <div className="flex justify-end">
          <Button label="수정" className="cap_14_sb mt-[0.8rem] w-auto px-[1.6rem] py-[0.6rem]" />
        </div>
      </section>

      {/** Divider 추가 필요 */}

      <section className="flex-col gap-[0.8rem]">
        <h2 className="subhead_18_sb">매칭 조건 수정</h2>
        <p className="cap_12_m text-gray-500">
          수정한 조건을 기반으로 새로운 메이트를 추천해드려요!
        </p>

        <p className="body_16_m">응원팀</p>
        <div className="flex-col gap-[0.8rem]">
          <div className="flex flex-wrap gap-[0.8rem]">
            {TEAMS.map((option) => (
              <Button
                variant="gray2"
                key={option}
                label={option}
                className="cap_14_sb w-auto px-[1.6rem] py-[0.6rem] text-gray-900"
              />
            ))}
          </div>
          <Button
            variant="gray2"
            label={NO_TEAM_OPTION}
            className="cap_14_sb w-fit px-[1.6rem] py-[0.6rem] text-gray-900"
          />
        </div>
      </section>
    </div>
  );
};

export default EditProfile;
