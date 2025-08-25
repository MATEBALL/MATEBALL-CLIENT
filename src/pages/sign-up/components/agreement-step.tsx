import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';
import { useState } from 'react';

const AgreementStep = () => {
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const isAllChecked = terms && privacy;

  const handleCheckAll = () => {
    const next = !isAllChecked;
    setTerms(next);
    setPrivacy(next);
  };

  const handleCheckTerms = () => {
    const next = !terms;
    setTerms(next);
  };

  const handleCheckPrivacy = () => {
    const next = !privacy;
    setPrivacy(next);
  };

  const iconColor = (checked: boolean) => (checked ? 'text-main-800' : 'text-gray-300');

  return (
    <div className="h-full flex-col justify-between pt-[4.8rem] pb-[2.4rem]">
      <div className="flex-col gap-[0.8rem] px-[1.6rem]">
        <h1 className="title_24_sb">서비스 이용약관</h1>
        <p className="body_16_m text-gray-500">
          서비스 가입을 위해 <br /> 아래 항목에 동의해주세요.
        </p>
      </div>

      <div className="flex-col gap-[2.4rem]">
        <div className="flex-col gap-[0.8rem]">
          <div className=" flex gap-[0.8rem] border-gray-200 border-b p-[0.8rem] px-[1.6rem]">
            <button type="button" onClick={handleCheckAll}>
              <Icon name="check-filled" className={iconColor(isAllChecked)} />
            </button>
            <p className="body_16_m">약관 전체 동의</p>
          </div>
          <div className="flex gap-[0.8rem] p-[0.8rem] px-[1.6rem]">
            <button type="button" onClick={handleCheckTerms}>
              <Icon name="check-filled" className={iconColor(terms)} />
            </button>
            <div className="flex-row-center gap-[0.8rem]">
              <p className="body_16_m">이용약관 동의 (필수)</p>
              <Icon name="arrow-right-18" size={1.8} />
            </div>
          </div>
          <div className="flex gap-[0.8rem] p-[0.8rem] px-[1.6rem]">
            <button type="button" onClick={handleCheckPrivacy}>
              <Icon name="check-filled" className={iconColor(privacy)} />
            </button>

            <div className="flex-row-center gap-[0.8rem]">
              <p className="body_16_m">개인정보 수집 및 이용동의 (필수)</p>
              <Icon name="arrow-right-18" size={1.8} />
            </div>
          </div>
        </div>
        <div className="px-[1.6rem]">
          <Button label="다음으로" disabled={!isAllChecked} />
        </div>
      </div>
    </div>
  );
};

export default AgreementStep;
