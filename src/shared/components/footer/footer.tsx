import Icon from '@components/icon/icon';

const Footer = () => {
  return (
    <footer className="cap_12_m h-[30.6rem] flex-col gap-[4.8rem] px-[3.2rem] py-[1.6rem]">
      <div className="flex-col gap-[0.8rem]">
        <Icon name="logo-gray" width={9.2} height={2.5} />
        <div className="flex-col gap-[0.4rem] text-gray-700">
          <p>대표 정윤지</p>
          <p>이메일 mateball0615@gmail.com</p>
        </div>
      </div>
      <div className="flex-col gap-[2.4rem] text-gray-600">
        <p>
          ※ 메잇볼은 고객 간의 야구 직관 메이트 매칭을 중개하는 플랫폼으로, 직접적인 만남이나 거래에
          개입하지 않으며, 이에 대한 책임을 지지 않습니다. 이용자 간 약속 및 행동에 대한 주의가
          필요합니다.
        </p>
        <p>© 2025 MateBall. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
