import TabList from '@components/tab/fill-tab/tab-list';

const MatchingTabContainer = () => {
  const matchingTabs = ['전체', '대기 중', '완료', '실패'];

  return (
    <>
      <TabList tabs={matchingTabs} />
    </>
  );
};

export default MatchingTabContainer;
