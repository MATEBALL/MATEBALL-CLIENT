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
    <div className={cn('flex-col-center gap-[2.4rem]', className)}>
      <Icon name={iconName} size={8.4} />
      <div className="flex-col-center gap-[0.8rem] text-center">
        <h3 className="head_20_sb">{text}</h3>
        <p className="cap_14_m text-gray-500">{subText}</p>
      </div>
    </div>
  );
};

export default EmptyView;
