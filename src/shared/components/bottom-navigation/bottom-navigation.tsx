import { NAV_ITEMS } from '@components/bottom-navigation/constants/bottom-navigation';
import Icon from '@components/icon/icon';
import useAuth from '@hooks/use-auth';
import { cn } from '@libs/cn';
import { ROUTES } from '@routes/routes-config';
import { useLocation, useNavigate } from 'react-router-dom';

const BottomNavigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { needsMatchingSetup } = useAuth();

  const isActive = (path: string | string[]) => {
    if (Array.isArray(path)) {
      // 배열인 경우 (홈 탭) - 홈 또는 가이드 페이지에서 활성화
      return path.includes(pathname);
    }
    // 단일 경로인 경우
    return pathname === path;
  };

  const isDisabled = (path: string | string[]) => {
    if (Array.isArray(path)) {
      // 홈 탭은 항상 활성화
      return false;
    }
    return needsMatchingSetup && path !== ROUTES.HOME;
  };

  const handleTabClick = (path: string | string[]) => {
    if (isDisabled(path)) return;

    if (Array.isArray(path)) {
      // 홈 탭 클릭 시 홈으로 이동
      navigate(ROUTES.HOME);
    } else {
      navigate(path);
    }
  };

  return (
    <div className="sticky bottom-0 z-[var(--z-bottom-nav)] flex w-full justify-between border-gray-200 border-t bg-gray-white px-[1.6rem] py-[0.8rem] shadow-2">
      {NAV_ITEMS.map(({ label, path, icon }) => {
        const active = isActive(path);
        const disabled = isDisabled(path);

        return (
          <button
            key={label}
            type="button"
            className={cn(
              'h-[4.8rem] w-[4.8rem] flex-col-center gap-[0.4rem]',
              disabled ? 'cursor-not-allowed' : 'cursor-pointer',
            )}
            onClick={() => handleTabClick(path)}
            disabled={disabled}
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
