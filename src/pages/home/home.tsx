import BottomSheet from "@components/bottom-sheet/bottom-sheet";
import Button from "@components/button/button/button";
import { WEEK_CALENDAR_START_OFFSET } from "@components/calendar/constants/CALENADAR";
import MonthCalendar from "@components/calendar/month-calendar";
import { getInitialSelectedDate } from "@components/calendar/utils/date-grid";
import { useTabState } from "@hooks/use-tab-state";
import CalendarSection from "@pages/home/components/calendar-section";
import MatchListSection from "@pages/home/components/match-list-section";
import TopSection from "@pages/home/components/top-section";
import { addDays } from "date-fns";
import { useState } from "react";

const Home = () => {
	const { activeType, changeTab, isOneOnOne, isGroup } = useTabState();
	const entryDate = new Date();
	const initialSelectedDate = getInitialSelectedDate(entryDate);
	const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
	const [baseWeekDate, setBaseWeekDate] = useState(
		addDays(selectedDate, WEEK_CALENDAR_START_OFFSET)
	);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="pb-[5.6rem]">
			<TopSection />
			<CalendarSection
				activeType={activeType}
				onTabChange={changeTab}
				selectedDate={selectedDate}
				onDateChange={setSelectedDate}
				baseWeekDate={baseWeekDate}
				onOpenBottomSheet={() => setIsOpen(true)}
			/>
			<MatchListSection
				activeType={activeType}
				isOneOnOne={isOneOnOne}
				isGroup={isGroup}
				selectedDate={selectedDate}
			/>
			<BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<div className="p-[1.6rem]">
					<MonthCalendar
						value={selectedDate}
						onWeekChange={(date) => {
							setSelectedDate(date);
							setBaseWeekDate(date);
						}}
						onMonthChange={setSelectedDate}
					/>
				</div>
				<div className="p-[1.6rem]">
					<Button
						label="날짜 선택하기"
						size="L"
						className="w-full"
						onClick={() => setIsOpen(false)}
					/>
				</div>
			</BottomSheet>
		</div>
	);
};

export default Home;
