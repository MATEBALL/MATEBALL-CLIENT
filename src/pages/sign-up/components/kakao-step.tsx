import Button from '@components/button/button';
import { mockKaKaoData } from '@mocks/mockKakaoData';
import ProfileCard from '@pages/sign-up/components/profile-card';
import { AGE_LIMIT_MESSAGE, AGE_NOTICE, NOTICE } from '@pages/sign-up/constants/NOTICE';
import { isAdult } from '@pages/sign-up/utils/age-calculate';

const KakaoStep = () => {
  const data = mockKaKaoData;
  const isValid = !isAdult(data.birthYear);

  return (
    <div className="h-full flex-col-between">
      <div className="w-full flex-col gap-[4rem]">
        <div>
          <h1 className="title_24_sb text-gray-black">기본 정보를 확인해 주세요.</h1>
          <p className="cap_14_m whitespace-pre-line text-gray-600">{NOTICE}</p>
        </div>
        <div className="w-full flex-col gap-[1.6rem] ">
          <div className="w-full flex-row gap-[1.2rem]">
            <ProfileCard title="생년" data={data.birthYear} aria-label="생년" isValid={isValid} />
            <ProfileCard title="성별" data={data.gender} aria-label="성별" />
          </div>

          {isValid ? (
            <p className="cap_12_m text-state-error">{AGE_LIMIT_MESSAGE}</p>
          ) : (
            <p className="cap_12_m whitespace-pre-line text-gray-500">{AGE_NOTICE}</p>
          )}
        </div>
      </div>
      <Button label="다음으로" className="w-full" ariaLabel="다음으로" disabled={isValid} />
    </div>
  );
};

export default KakaoStep;
