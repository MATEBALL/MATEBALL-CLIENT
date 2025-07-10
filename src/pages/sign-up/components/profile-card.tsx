import clsx from 'clsx';

interface ProfileCardProps {
  title: string;
  data: string | number;
<<<<<<< HEAD
<<<<<<< HEAD
  isUnderage?: boolean;
}

const ProfileCard = ({ title, data, isUnderage, ...props }: ProfileCardProps) => {
=======
  isValid?: boolean;
}

const ProfileCard = ({ title, data, isValid, ...props }: ProfileCardProps) => {
>>>>>>> 2932e7c (feat: 회원가입 페이지 뷰 구현 (#78))
=======
  isUnderage?: boolean;
}

const ProfileCard = ({ title, data, isUnderage, ...props }: ProfileCardProps) => {
>>>>>>> 6a3c3a6 (feat: 로그인 페이지 뷰 구현 및 카카오 로그인 api 연결 (#71))
  const userData = title === '생년' ? `${data}년도` : title;

  return (
    <div
      className={clsx(
        'h-[9.1rem] w-full flex-col gap-[0.8rem] rounded-[8px] bg-gray-white p-[1.6rem]',
        {
<<<<<<< HEAD
<<<<<<< HEAD
          'border border-state-error': isUnderage === true,
=======
          'border border-state-error': isValid === true,
>>>>>>> 2932e7c (feat: 회원가입 페이지 뷰 구현 (#78))
=======
          'border border-state-error': isUnderage === true,
>>>>>>> 6a3c3a6 (feat: 로그인 페이지 뷰 구현 및 카카오 로그인 api 연결 (#71))
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
