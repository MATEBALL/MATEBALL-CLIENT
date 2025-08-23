import Icon from '@components/icon/icon';

const AgreementStep = () => {
  return (
    <div className="h-full flex-col justify-between pt-[4.8rem] pb-[2.4rem]">
      <div className="flex-col gap-[0.8rem] px-[1.6rem]">
        <h1 className="title_24_sb">서비스 이용약관</h1>
        <p className="body_16_m text-gray-500">
          서비스 가입을 위해 <br /> 아래 항목에 동의해주세요.
        </p>
      </div>

      <div className="flex-col gap-[0.8rem]">
        <div className=" flex gap-[0.8rem] border-gray-200 border-b p-[0.8rem] px-[1.6rem]">
          <Icon name="check-filled" className="text-gray-300" />
          <p className="body_16_m">약관 전체 동의</p>
        </div>
        <div className="flex gap-[0.8rem] p-[0.8rem] px-[1.6rem]">
          <Icon name="check-filled" className="text-gray-300 " />
          <div className="flex-row-center gap-[0.8rem]">
            <p className="body_16_m">이용약관 동의 (필수)</p>
            <Icon name="arrow-right-18" size={1.8} />
          </div>
        </div>
        <div className="flex gap-[0.8rem] p-[0.8rem] px-[1.6rem]">
          <Icon name="check-filled" className="text-gray-300" />
          <div className="flex-row-center gap-[0.8rem]">
            <p className="body_16_m">개인정보 수집 및 이용동의 (필수)</p>
            <Icon name="arrow-right-18" size={1.8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreementStep;
