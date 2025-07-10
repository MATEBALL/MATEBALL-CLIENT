import { COPYRIGHT_NOTICE, MATCHING_PLATFORM_NOTICE } from '@components/footer/constants/legel';
import Icon from '@components/icon/icon';

const Footer = () => {
  return (
    <footer className="cap_12_m h-[30.6rem] flex-col gap-[4.8rem] px-[3.2rem] py-[1.6rem]">
      <div className="flex-col gap-[0.8rem]">
<<<<<<< HEAD
<<<<<<< HEAD
        <Icon name="logo-gray" width={9.2} height={2.5} className="text-gray-700" />
=======
        <Icon name="logo-gray" width={9.2} height={2.5} />
>>>>>>> 1742dde (feat: storybook 수정 (#79))
=======
        <Icon name="logo-gray" width={9.2} height={2.5} className="text-gray-700" />
>>>>>>> 6a3c3a6 (feat: 로그인 페이지 뷰 구현 및 카카오 로그인 api 연결 (#71))
        <div className="flex-col gap-[0.4rem] text-gray-700">
          <p>대표 정윤지</p>
          <p>이메일 mateball0615@gmail.com</p>
        </div>
      </div>
      <div className="flex-col gap-[2.4rem] text-gray-600">
        <p>{MATCHING_PLATFORM_NOTICE}</p>
        <p>{COPYRIGHT_NOTICE}</p>
      </div>
    </footer>
  );
};

export default Footer;
