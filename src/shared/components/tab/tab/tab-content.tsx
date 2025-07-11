export type TabType = '1:1' | '그룹';

export type TabContentProps = {
  activeType: TabType;
};

const TabContent = ({ activeType }: TabContentProps) => {
  if (activeType === '1:1') {
    return <div>1:1 매칭 탭 콘텐츠입니다</div>;
  }

  if (activeType === '그룹') {
    return <div>그룹 매칭 탭 콘텐츠입니다</div>;
  }

  return null;
};

export default TabContent;
