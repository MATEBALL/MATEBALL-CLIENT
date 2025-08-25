import { userQueries } from '@apis/user/user-queries';
import Button from '@components/button/button/button';
import Card from '@components/card/match-card/card';
import type { ChipColor } from '@components/chip/chip-list';
import Divider from '@components/divider/divider';
import Footer from '@components/footer/footer';
import { useQuery } from '@tanstack/react-query';

const Profile = () => {
  const { data } = useQuery(userQueries.USER_INFO());

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
      <Footer />
    </div>
  );
};

export default Profile;
