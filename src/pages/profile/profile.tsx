import Button from '@components/button/button/button';
import Card from '@components/card/match-card/card';
import Footer from '@components/footer/footer';
import { mockProfileData } from '@mocks/mockProfileData';

const Profile = () => {
  const { nickname, imgUrl, team, style, age, gender, introduction } = mockProfileData;

  return (
    <div className="h-full flex-col-between">
      <div className="w-full flex-col-center gap-[1.6rem] px-[1.6rem] pt-[1.6rem] pb-[5.6rem]">
        <Card
          type="user"
          nickname={nickname}
          imgUrl={[imgUrl]}
          team={team}
          style={style}
          age={age.replace('세', '')}
          gender={gender}
          introduction={introduction}
          chips={[team, style]}
        />
        <Button size="L" label="매칭 조건 재설정 하기" />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
