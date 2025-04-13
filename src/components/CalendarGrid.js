import { useMemo } from 'react';
import { daysInMonth, getFirstDayOfMonth, isSameDay } from '../utils/dates';
import DayCell from './DayCell';

export default function CalendarGrid({ currentMonth }) {
  const today = useMemo(() => new Date(), []);

  const days = useMemo(() => {
    const month = currentMonth.getMonth();
    const year = currentMonth.getFullYear();
    const daysCount = daysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);

    const prevMonthDays = [];
    const prevMonthDaysCount = firstDay;
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevMonthYear = month === 0 ? year - 1 : year;
    const prevMonthTotalDays = daysInMonth(prevMonth, prevMonthYear);

    for (let i = prevMonthTotalDays - prevMonthDaysCount + 1; i <= prevMonthTotalDays; i++) {
      prevMonthDays.push({
        day: i,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    const currentMonthDays = [];
    for (let i = 1; i <= daysCount; i++) {
      const date = new Date(year, month, i);
      currentMonthDays.push({
        day: i,
        isCurrentMonth: true,
        isToday: isSameDay(date, today),
      });
    }

    const nextMonthDays = [];
    const totalDays = prevMonthDays.length + currentMonthDays.length;
    const weeks = Math.ceil(totalDays / 7);
    const nextMonthDaysCount = weeks * 7 - totalDays;

    for (let i = 1; i <= nextMonthDaysCount; i++) {
      nextMonthDays.push({
        day: i,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }, [currentMonth, today]);

  return (
    <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <div
          key={day}
          className="bg-gray-100 dark:bg-gray-700 py-2 text-center text-sm font-medium text-gray-600 dark:text-gray-300"
        >
          {day}
        </div>
      ))}
      {days.map((day, index) => (
        <DayCell
          key={index} // Consider using a more unique key if available
          day={day.day}
          currentMonth={currentMonth}
          isCurrentMonth={day.isCurrentMonth}
          isToday={day.isToday}
        />
      ))}
    </div>
  );
}