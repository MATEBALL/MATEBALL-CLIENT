import Button from '@components/button/button/button';
import Icon from '@components/icon/icon';

const Create = () => {
  return (
    <div className="flex-col-center gap-[2.4rem] px-[1.6rem[ pt-[9.6rem]">
      <section className="flex-col-center gap-[0.8rem] text-center">
        <h1 className="title_24_sb">
          닉네임 님을 위한
          <br />
          맞춤 매칭이 생성되었어요!
        </h1>
        <p className="body_16_m text-gray-600">
          딱! 맞는 메이트의 요청이 도착하면
          <br />
          ‘매칭 현황’에서 확인할 수 있어요.
        </p>
      </section>
      <section className="flex-row-center gap-[0.8rem]">
        <Icon name="ic-caution" size={1.8} className="text-gray-600" />
        <p className="cap_12_m text-gray-600">동시에 진행할 수 있는 1:1 매칭은 최대 3개예요.</p>
      </section>
      <section className="flex-row-between gap-[0.8rem]">
        <Button label="메이트 더 찾아보기" size="M" variant="skyblue" />
        <Button label="매칭 현황 보기" size="M" variant="blue" />
      </section>
    </div>
  );
};

export default Create;
