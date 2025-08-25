import { userQueries } from '@apis/user/user-queries';
import Button from '@components/button/button/button';
import Card from '@components/card/match-card/card';
import type { ChipColor } from '@components/chip/chip-list';
import Divider from '@components/divider/divider';
import Footer from '@components/footer/footer';
import { useQuery } from '@tanstack/react-query';

const Profile = () => {
  const { data } = useQuery(userQueries.USER_INFO());

  const handleClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  if (!data) return null;

  return (
    <div className="h-full flex-col-between">
      <div className="w-full flex-col-center gap-[1.6rem] px-[1.6rem] pt-[1.6rem] pb-[5.6rem]">
        <Card
          className="!shadow-none"
          type="user"
          nickname={data.nickname ?? ''}
          imgUrl={[data.imgUrl ?? '']}
          team={data.team ?? ''}
          style={data.style ?? ''}
          age={data.age ?? ''}
          gender={data.gender ?? ''}
          introduction={data.introduction ?? ''}
          chips={[(data.team ?? '') as ChipColor, (data.style ?? '') as ChipColor]}
        />
        <Button size="L" label="프로필 · 매칭 조건 수정" />
      </div>
      <Divider thickness={0.4} color="bg-gray-200" />
      <section className="w-full flex-col items-start px-[1.6rem]">
        <button
          type="button"
          aria-label="문의하기"
          className="cap_14_m py-[0.8rem] text-gray-800"
          onClick={() => handleClick('https://notion')}
        >
          <p>문의하기</p>
        </button>
        <button
          type="button"
          aria-label="의견 보내기"
          className="cap_14_m py-[0.8rem] text-gray-800"
          onClick={() => handleClick('https://notion')}
        >
          <p>의견 보내기</p>
        </button>
        <Divider color="bg-gray-300" margin="my-[1.6rem]" />
        <button type="button" aria-label="로그아웃" className="cap_14_m py-[0.8rem] text-gray-800">
          <p>로그아웃</p>
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
