import clsx from 'clsx';

interface ProfileCardProps {
  title: string;
  data: string | number;
  isUnderage?: boolean;
}

const ProfileCard = ({ title, data, isUnderage, ...props }: ProfileCardProps) => {
  const userData = title === '생년' ? `${data}년도` : title;

  return (
    <div
      className={clsx(
        'h-[9.1rem] w-full flex-col gap-[0.8rem] rounded-[8px] bg-gray-white p-[1.6rem]',
        {
          'border border-state-error': isUnderage === true,
        },
      )}
      {...props}
    >
      <p className="cap_14_m text-gray-600">{title}</p>
      <p className="head_20_m">{userData}</p>
    </div>
  );
};

export default ProfileCard;