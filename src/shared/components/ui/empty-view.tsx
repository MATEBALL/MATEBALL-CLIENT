import Icon from '@components/icon/icon';
import { cn } from '@libs/cn';

interface EmptyViewProps {
  iconName: string;
  text: string;
  subText?: string;
  className?: string;
}

const EmptyView = ({ iconName, text, subText, className }: EmptyViewProps) => {
  return (
    <div className={cn('flex-col-center gap-[1.6rem]', className)}>
      <Icon name={iconName} size={8.4} />
      <div className="flex-col-center gap-[0.8rem] text-center">
<<<<<<< HEAD
        <h3 className="head_20_sb text-gray-100">{text}</h3>
=======
        <h3 className="head_20_sb text-gray-white">{text}</h3>
>>>>>>> 46e3a90 (fix: SP2 홈 색상 변경 및 엠티뷰 수정 (#404))
        <p className="cap_14_m text-gray-500">{subText}</p>
      </div>
    </div>
  );
};

export default EmptyView;
