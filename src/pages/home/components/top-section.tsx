import { userQueries } from '@apis/user/user-queries';
import { useQuery } from '@tanstack/react-query';

const TopSection = () => {
  const { data } = useQuery(userQueries.USER_COUNT());

  return (
    <section className="mx-[1.6rem] rounded-[12px] bg-gray-900 px-[1.6rem] py-[1rem]">
      <p className="cap_14_m text-gray-white">
        현재 <span className="text-sub-800">{data?.userCnt}명</span>이 메이트를 찾고 있어요!🔥
      </p>
    </section>
  );
};

export default TopSection;
