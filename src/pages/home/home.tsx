import Card from '@components/card/card';

const Home = () => {
<<<<<<< HEAD
  return (
    <div>
      홈
      <Card
        type="solo"
        username="사용자"
        age="NN"
        gender="성별"
        team="두산"
        enthusiasm="열정응원러"
        status="매칭 완료"
        avatars={['/images/avatar1.png', '/images/avatar2.png']}
      />
      <Card
        type="group"
        username="사용자"
        age=""
        gender=""
        team="LG"
        enthusiasm="조용응원러"
        status="새 요청"
        subText="매칭된 인원 3/4"
        avatars={['/images/user1.png', '/images/user2.png', '/images/user3.png']}
      />
      <Card
        type="solo"
        username="사용자"
        age="NN"
        gender="성별"
        team="두산"
        enthusiasm="열정응원러"
        status="매칭 완료"
        subText="한 줄 소개 더미데이터"
        percent={80}
        avatars={['/images/avatar1.png', '/images/avatar2.png']}
      />
    </div>
  );
=======
  return <div>홈</div>;
>>>>>>> a1542aa (feat: biome 에러 수정(#49))
};

export default Home;
