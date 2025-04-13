import { useState, useMemo } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import AppointmentModal from './AppointmentModal';
import AppointmentList from './AppointmentList';

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(() => new Date());

  const monthValue = useMemo(() => ({
    month: currentMonth.getMonth(),
    year: currentMonth.getFullYear(),
    date: currentMonth
  }), [currentMonth]);

  const handlePrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <CalendarHeader
        month={monthValue.month}
        year={monthValue.year}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <CalendarGrid currentMonth={monthValue.date} />
      <AppointmentList />
      <AppointmentModal />
    </div>
  );
}