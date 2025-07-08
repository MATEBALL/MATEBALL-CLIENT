import queryClient from '@libs/query-client';
import { router } from '@routes/router';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
<<<<<<< HEAD
import { RouterProvider } from 'react-router-dom';
=======
import queryClient from '@libs/query-client';

<<<<<<< HEAD


>>>>>>> 0c1f69d (chore: 확인용 코드 삭제(#10))

=======
>>>>>>> 063ed42 (chore: 브랜치 변경 전 커밋(#45))
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <div>
			메잇볼
      <Icon name="ic-home-filled" width={40} height={40} className="text-main-700" />
      <Icon name="ic-home-filled" size={20} className="text-main-700" />
      <Icon name="ic-home-filled" rotate={90} className="text-gray-500" />

		</div>
>>>>>>> 37aa21a (chore: 빌드 에러 해결(#20))
=======
>>>>>>> 0c1f69d (chore: 확인용 코드 삭제(#10))
=======
      
        <Icon name="ic-home-filled"/>
      
>>>>>>> 7458381 (chore: icon 크기 props 단위 rem 수정 및 icon-list 띄어쓰기 수정(#10))
=======
>>>>>>> 5301d48 (fix: pnpm corepack으로 설치(#20))
=======
>>>>>>> 8e41c7b (chore: 빌드 에러 해결(#20))
=======
      <Card
        type="single"
        name="김철수"
        age="25"
        gender="남성"
        teams="어웨이 vs 홈"
        location="잠실경기장"
        date="NN월 NN일"
        introduction="한줄소개"
        color="blue"
        images={['/testprofile.jpeg']}
      />
      <Card
        type="detailed"
        name="김철수"
        age="25"
        gender="남성"
        teams="어웨이 vs 홈"
        location="경기장"
        date="NN월 NN일"
        introduction="한줄소개"
        images={['  /testprofile.jpeg']}
        percent={10}
      />
      <Card
        type="group"
        name="김철수"
        teams="어웨이 vs 홈"
        location="경기장"
        date="NN월 NN일"
        images={['/testprofile.jpeg', '/testprofile.jpeg', '/testprofile.jpeg']}
        color="blue"
      />
>>>>>>> a1542aa (feat: biome 에러 수정(#49))
=======
>>>>>>> d331e17 (feat: chip 추가(#49))
    </QueryClientProvider>
  );
};

export default App;
