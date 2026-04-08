import { userMutations } from '@apis/user/user-mutations';
import { userQueries } from '@apis/user/user-queries';
import Divider from '@components/divider/divider';
import Footer from '@components/footer/footer';
import { FEEDBACK_LINK, REQUEST_LINK } from '@pages/profile/constants/link';
import { ROUTES } from '@routes/routes-config';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import ProfileCard from './components/profile-card';

const Profile = () => {
  const navigate = useNavigate();

  const { data } = useQuery(userQueries.USER_INFO());
  const { mutate: logout } = useMutation(userMutations.LOGOUT());

  if (!data) return null;

  return (
    <div className="h-full flex-col-between bg-gray-black">
      <div className="w-full flex-col-center gap-[3.2rem] px-[1.6rem] pt-[1.6rem] pb-[5.6rem]">
        <ProfileCard
          nickname={data.nickname ?? ''}
          team={data.team ?? ''}
          style={data.style ?? ''}
          imgUrl={data.imgUrl ?? ''}
          matchCnt={data.matchCnt ?? 0}
          avgSeason={data.avgSeason ?? 0}
          onEditProfile={() => navigate(ROUTES.PROFILE_EDIT)}
        />
        <section className="w-full flex-col items-start">
          <a
            href={REQUEST_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="문의하기"
            className="cap_14_m py-[0.8rem] text-gray-300"
          >
            문의하기
          </a>
          <a
            href={FEEDBACK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="의견 보내기"
            className="cap_14_m py-[0.8rem] text-gray-300"
          >
            의견 보내기
          </a>
          <Divider color="bg-gray-600" margin="my-[1.6rem]" />
          <button
            type="button"
            onClick={() => logout()}
            aria-label="로그아웃"
            className="cap_14_m cursor-pointer py-[0.8rem] text-gray-300"
          >
            <p>로그아웃</p>
          </button>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
