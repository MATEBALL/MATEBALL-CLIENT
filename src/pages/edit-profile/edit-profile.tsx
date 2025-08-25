import Button from '@components/button/button/button';
import Input from '@components/input/input';
import { NICKNAME_PLACEHOLDER } from '@pages/sign-up/constants/validation';

const EditProfile = () => {
  return (
    <div className="h-full bg-gray-white px-[1.6rem] pt-[1.6rem]">
      <h2 className="subhead_18_sb">프로필 수정</h2>
      <section>
        <Input placeholder={NICKNAME_PLACEHOLDER} label="닉네임" />
        <Button label="수정" className="cap_14_sb w-auto px-[1.6rem] py-[0.6rem]" />
        <Input placeholder={NICKNAME_PLACEHOLDER} label="한 줄 소개" />
        <Button label="수정" className="cap_14_sb w-auto px-[1.6rem] py-[0.6rem]" />
      </section>
      <section>
        <h2 className="subhead_18_sb">매칭 조건 수정</h2>
        <p className="cap_12_m text-gray-500">
          수정한 조건을 기반으로 새로운 메이트를 추천해드려요!
        </p>
      </section>
    </div>
  );
};

export default EditProfile;
