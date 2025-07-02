import { format } from 'date-fns';
import { getMonthGrid } from '../../utils/calendar';
import { useState } from 'react';

const MonthCalendar = () => {
  const [value, setValue] = useState(new Date());
  const days = getMonthGrid(value);

  return (
    <div  className='flex flex-col gap-[1.2rem]'>
      <div>
        <div></div>
        <p className="head_20_sb text-gray-black text-center">{format(value, 'yyyy.MM')}</p>
        <div></div>
      </div>

      <div>
        <div className='grid grid-cols-7 text-center cap_14_sb'>
            {['일', '월', '화', '수', '목', '금', '토'].map((d) => <div className='px-[1.75rem] py-[1.35rem]' key={d}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 cap_14_m text-gray-900 gap-y-[0.4rem]">
          {days.map((day) => (
            <button 
              onClick={() => setValue(day)}
              className='px-[1.65rem] py-[1.35rem]'
            >
              {format(day, 'd')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthCalendar;
