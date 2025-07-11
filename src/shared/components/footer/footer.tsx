import { COPYRIGHT_NOTICE, MATCHING_PLATFORM_NOTICE } from '@components/footer/constants/legel';
import Icon from '@components/icon/icon';

const Footer = () => {
  return (
    <footer className="cap_12_m h-[30.6rem] flex-col gap-[4.8rem] px-[3.2rem] py-[1.6rem]">
      <div className="flex-col gap-[0.8rem]">
        <Icon name="logo-gray" width={9.2} height={2.5} className="text-gray-700" />
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
