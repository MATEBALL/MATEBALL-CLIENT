import { userQueries } from '@apis/user/user-queries';
import Button from '@components/button/button/button';
import Card from '@components/card/match-card/card';
import type { ChipColor } from '@components/chip/chip-list';
import Footer from '@components/footer/footer';
import ErrorView from '@pages/error/error-view';
import { useQuery } from '@tanstack/react-query';

const Profile = () => {
  const { data } = useQuery(userQueries.USER_INFO());

  if (!data) return <ErrorView message="아직 최초 매칭 조건이 설정되지 않았어요" />;

  return (
    <div className="h-full flex-col-between">
      <div className="w-full flex-col-center gap-[1.6rem] px-[1.6rem] pt-[1.6rem] pb-[5.6rem]">
        <Card
          type="user"
          nickname={data.nickname ?? ''}
          imgUrl={[data.imgUrl ?? '']}
          team={data.team ?? ''}
          style={data.style?.replace(/\s+/g, '') ?? ''}
          age={data.age ?? ''}
          gender={data.gender ?? ''}
          introduction={data.introduction ?? ''}
          chips={[
            (data.team ?? '') as ChipColor,
            (data.style ?? '').replace(/\s+/g, '') as ChipColor,
          ]}
        />
        <Button size="L" label="매칭 조건 재설정 하기" />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
