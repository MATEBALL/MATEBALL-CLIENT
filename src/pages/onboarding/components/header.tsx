import Icon from '@components/icon/icon';

interface HeaderProps {
  onClick: () => void;
}

const Header = ({ onClick }: HeaderProps) => {
  return (
    <div className="flex w-full justify-start py-[0.4rem]">
      <Icon
        name="ic-arrow-left-24"
        width={4.8}
        height={4.8}
        onClick={onClick}
        className="cursor-pointer p-[1.2rem]"
      />
    </div>
  );
};

export default Header;
