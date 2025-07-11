import Button from '@components/button/button/button';
import { mockKaKaoData } from '@mocks/mockKakaoData';
import ProfileCard from '@pages/sign-up/components/profile-card';
import { AGE_LIMIT_MESSAGE, AGE_NOTICE, NOTICE } from '@pages/sign-up/constants/NOTICE';
import { isAdult } from '@pages/sign-up/utils/age-calculate';

const KakaoStep = () => {
  const data = mockKaKaoData;
  <<<<<<< HEAD
<<<<<<< HEAD
  const isUnderage = !isAdult(data.birthYear);
  =======
  const isValid = !isAdult(data.birthYear);
  >>>>>>> 1bba458 (feat: 닉네임 react-hook-form 연결 (#95))
=======
  const isUnderage = !isAdult(data.birthYear);
  >>>>>>> 6a3c3a6 (feat: 로그인 페이지 뷰 구현 및 카카오 로그인 api 연결 (#71))

  return (
    <div className="h-full flex-col-between">
      <div className="w-full flex-col gap-[4rem]">
        <div>
          <h1 className="title_24_sb text-gray-black">기본 정보를 확인해 주세요.</h1>
          <p className="cap_14_m whitespace-pre-line text-gray-600">{NOTICE}</p>
        </div>
        <div className="w-full flex-col gap-[1.6rem] ">
          <div className="w-full flex-row gap-[1.2rem]">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6a3c3a6 (feat: 로그인 페이지 뷰 구현 및 카카오 로그인 api 연결 (#71))
            <ProfileCard
              title="생년"
              data={data.birthYear}
              aria-label="생년"
              isUnderage={isUnderage}
            />
<<<<<<< HEAD
            <ProfileCard title="성별" data={data.gender} aria-label="성별" />
          </div>

          {isUnderage ? (
=======
            <ProfileCard title="생년" data={data.birthYear} aria-label="생년" isValid={isValid} />
            <ProfileCard title="성별" data={data.gender} aria-label="성별" />
          </div>

          {isValid ? (
>>>>>>> 1bba458 (feat: 닉네임 react-hook-form 연결 (#95))
=======
            <ProfileCard title="성별" data={data.gender} aria-label="성별" />
          </div>

          {isUnderage ? (
>>>>>>> 6a3c3a6 (feat: 로그인 페이지 뷰 구현 및 카카오 로그인 api 연결 (#71))
            <p className="cap_12_m text-state-error">{AGE_LIMIT_MESSAGE}</p>
          ) : (
            <p className="cap_12_m whitespace-pre-line text-gray-500">{AGE_NOTICE}</p>
          )}
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <Button label="다음으로" className="w-full" ariaLabel="다음으로" disabled={isUnderage} />
=======
      <Button label="다음으로" className="w-full" ariaLabel="다음으로" disabled={isValid} />
>>>>>>> 1bba458 (feat: 닉네임 react-hook-form 연결 (#95))
=======
      <Button label="다음으로" className="w-full" ariaLabel="다음으로" disabled={isUnderage} />
>>>>>>> 6a3c3a6 (feat: 로그인 페이지 뷰 구현 및 카카오 로그인 api 연결 (#71))
    </div>
  );
};

export default KakaoStep;
