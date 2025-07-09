import clsx from 'clsx';

interface ProfileCardProps {
  title: string;
  data: string | number;
<<<<<<< HEAD
  isUnderage?: boolean;
}

const ProfileCard = ({ title, data, isUnderage, ...props }: ProfileCardProps) => {
=======
  isValid?: boolean;
}

const ProfileCard = ({ title, data, isValid, ...props }: ProfileCardProps) => {
>>>>>>> 2932e7c (feat: 회원가입 페이지 뷰 구현 (#78))
  const userData = title === '생년' ? `${data}년도` : title;

  return (
    <div
      className={clsx(
        'h-[9.1rem] w-full flex-col gap-[0.8rem] rounded-[8px] bg-gray-white p-[1.6rem]',
        {
<<<<<<< HEAD
          'border border-state-error': isUnderage === true,
=======
          'border border-state-error': isValid === true,
>>>>>>> 2932e7c (feat: 회원가입 페이지 뷰 구현 (#78))
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
