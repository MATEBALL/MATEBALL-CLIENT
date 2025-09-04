import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';
import CheckboxRow from '@pages/sign-up/components/checkbox-row';
import { PRIVACY_LINK, TERMS_LINK } from '@pages/sign-up/constants/LINK';
import { useState } from 'react';

interface AgreementStepProps {
  next: () => void;
}

const AgreementStep = ({ next }: AgreementStepProps) => {
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
          <CheckboxRow
            label="약관 전체 동의"
            onClick={handleCheckAll}
            checked={isAllChecked}
            divider
          />
          <CheckboxRow
            label="이용약관 동의 (필수)"
            onClick={handleCheckTerms}
            checked={terms}
            svg={<Icon name="arrow-right-18" size={1.8} />}
            link={TERMS_LINK}
          />

          <CheckboxRow
            label="개인정보 수집 및 이용동의 (필수)"
            onClick={handleCheckPrivacy}
            checked={privacy}
            svg={<Icon name="arrow-right-18" size={1.8} />}
            link={PRIVACY_LINK}
          />
        </div>
        <div className="px-[1.6rem]">
          <Button label="다음으로" disabled={!isAllChecked} onClick={next} />
        </div>
      </div>
    </div>
  );
};

export default AgreementStep;
