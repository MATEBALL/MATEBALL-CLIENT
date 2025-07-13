import Button from '@components/button/button/button';
import Card from '@components/card/match-card/card';
import Footer from '@components/footer/footer';

const Profile = () => {
  return (
    <div>
      <div className="w-full flex-col-center gap-[1.6rem] px-[1.6rem] pt-[1.6rem] pb-[5.6rem]">
        <Card
          type="user"
          nickname="김철수"
          imgUrl={['/testprofile.jpeg']}
          chips={['두산', '열정응원러']}
          age="25"
          gender="남성"
          introduction="한 줄 소개 더미데이터"
        />
        <Button size={'L'} label="매칭 조건 재설정 하기" />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
