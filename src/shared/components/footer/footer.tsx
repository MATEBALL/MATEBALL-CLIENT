import { COPYRIGHT_NOTICE } from '@components/footer/constants/legal';
import Icon from '@components/icon/icon';
import { EXTERNAL_LINKS } from '@constants/links';
import { ROUTES } from '@routes/routes-config';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();

  const isHome = pathname === ROUTES.HOME;

  return (
    <footer
      className={clsx('cap_12_m w-full flex-col gap-[2.4rem] px-[1.6rem] py-[3.2rem]', {
        'bg-gray-200': isHome,
      })}
    >
      <div className="flex-col gap-[0.8rem]">
        <Icon name="logo-gray" width={9.2} height={2.5} className="text-gray-700" />
        <div className="flex-col gap-[0.4rem] text-gray-700">
          <p>대표 정윤지</p>
          <p>이메일 mateball0615@gmail.com</p>
        </div>
      </div>
      <div className="flex-col gap-[0.8rem] text-gray-600">
        <div className="flex-row gap-[0.8rem] py-[0.4rem]">
          <a
            href={EXTERNAL_LINKS.PRIVACY_POLICY}
            target="_blank"
            rel="noopener noreferrer"
            className="cap_12_m text-gray-800"
          >
            개인정보처리방침
          </a>
          <a
            href={EXTERNAL_LINKS.TERMS_OF_SERVICE}
            target="_blank"
            rel="noopener noreferrer"
            className="cap_12_m text-gray-800"
          >
            이용약관
          </a>
        </div>
        <p>{COPYRIGHT_NOTICE}</p>
      </div>
    </footer>
  );
};

export default Footer;
