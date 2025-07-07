interface ProfileCardProps {
  title: string;
  data: string;
}

const ProfileCard = ({ title, data }: ProfileCardProps) => {
  return (
    <div className="h-[9.1rem] w-full flex-col gap-[0.8rem] rounded-[8px] bg-gray-white p-[1.6rem]">
      <p className="cap_14_m text-gray-600">{title}</p>
      <p className="head_20_m">{data}</p>
    </div>
  );
};

export default ProfileCard;
