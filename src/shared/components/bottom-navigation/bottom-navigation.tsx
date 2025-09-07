import { alarmMutations } from '@apis/alarm/alarm-mutations';
import { alarmQueries } from '@apis/alarm/alarm-queries';
import { NAV_ITEMS } from '@components/bottom-navigation/constants/bottom-navigation';
import Icon from '@components/icon/icon';
import useAuth from '@hooks/use-auth';
import { cn } from '@libs/cn';
import { ROUTES } from '@routes/routes-config';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';

const BottomNavigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { needsMatchingSetup } = useAuth();

  const { data: hasUnreadAlarms } = useQuery(alarmQueries.HAS_UNREAD());

  const readAllAlarmsMutation = useMutation(alarmMutations.READ_ALL_ALARMS());

  const isActive = (path: string) => pathname === path;

  const isDisabled = (path: string) => {
    return needsMatchingSetup && path !== ROUTES.HOME;
  };

  const handleTabClick = (path: string) => {
    if (isDisabled(path)) return;

    if (path === ROUTES.MATCH && hasUnreadAlarms) {
      readAllAlarmsMutation.mutate();
    }

    navigate(path);
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
              'h-[4.8rem] w-[5.6rem] flex-col-center gap-[0.4rem]',
              disabled ? 'cursor-not-allowed' : 'cursor-pointer',
            )}
            onClick={() => handleTabClick(path)}
            disabled={disabled}
          >
            <div className="relative flex">
              <Icon name={active ? icon.filled : icon.lined} width={2.4} height={2.4} />
              {hasUnreadAlarms && path === ROUTES.MATCH && (
                <div className="absolute top-[0.2rem] left-[2.4rem]">
                  <Icon name="badge" />
                </div>
              )}
            </div>
            <p className={cn('cap_12_m text-gray-600', active && 'text-gray-black')}>{label}</p>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
