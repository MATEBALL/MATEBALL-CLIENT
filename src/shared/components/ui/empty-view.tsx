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
    <div className={cn('mt-[2.4rem] flex-col-center', className)}>
      <Icon name={iconName} size={8.4} />
      <div className="text-center">
        <h3 className="head_20_sb mt-[2.4rem]">{text}</h3>
        <p className="cap_14_m mt-[0.8rem] text-gray-500">{subText}</p>
      </div>
    </div>
  );
};

export default EmptyView;
