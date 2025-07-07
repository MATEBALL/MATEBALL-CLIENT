import Icon from '@components/icon/icon';
import { cn } from '@libs/cn';
import { ROUTES } from '@routes/routes-config';
import { useLocation, useNavigate } from 'react-router-dom';

const BottomNavigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const NAV_ITEMS = [
    {
      label: '홈',
      path: ROUTES.HOME,
      icon: {
        filled: 'ic-home-filled',
        lined: 'ic-home-lined',
      },
    },
    {
      label: '매칭 현황',
      path: ROUTES.MATCH,
      icon: {
        filled: 'ic-matchinglist-filled',
        lined: 'ic-matchinglist-lined',
      },
    },
    {
      label: '채팅',
      path: ROUTES.CHAT,
      icon: {
        filled: 'ic-chat-filled',
        lined: 'ic-chat-lined',
      },
    },
    {
      label: '내 정보',
      path: ROUTES.PROFILE,
      icon: {
        filled: 'ic-my-filled',
        lined: 'ic-my-lined',
      },
    },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div className="sticky bottom-0 left-0 z-50 flex w-full w-full justify-between border-gray-200 border-t bg-gray-white px-[1.6rem] py-[0.8rem] shadow-2">
      {NAV_ITEMS.map(({ label, path, icon }) => {
        const active = isActive(path);

        return (
          <button
            key={label}
            type="button"
            className="h-[4.8rem] w-[4.8rem] flex-col-center cursor-pointer gap-[0.4rem]"
            onClick={() => navigate(path)}
          >
            <Icon name={active ? icon.filled : icon.lined} width={2.4} height={2.4} />
            <p className={cn('cap_12_m text-gray-600', active && 'text-gray-black')}>{label}</p>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
