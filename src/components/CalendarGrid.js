import { useMemo } from 'react';
import { daysInMonth, getFirstDayOfMonth, isSameDay } from '../utils/dates'; // Importing utility functions for date calculations
import DayCell from './DayCell'; // Component for rendering individual day cells

export default function CalendarGrid({ currentMonth }) {
  // Memoized value for today's date to avoid recalculating on every render
  const today = useMemo(() => new Date(), []);

  // Memoized calculation of days to display in the calendar grid
  const days = useMemo(() => {
    const month = currentMonth.getMonth();
    const year = currentMonth.getFullYear();
    const daysCount = daysInMonth(month, year); // Get number of days in the current month
    const firstDay = getFirstDayOfMonth(month, year); // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)

    // Calculate days from the previous month to display
    const prevMonthDays = [];
    const prevMonthDaysCount = firstDay; // Number of days to show from the previous month
    const prevMonth = month === 0 ? 11 : month - 1; // Handle December to January transition
    const prevMonthYear = month === 0 ? year - 1 : year;
    const prevMonthTotalDays = daysInMonth(prevMonth, prevMonthYear);

    for (let i = prevMonthTotalDays - prevMonthDaysCount + 1; i <= prevMonthTotalDays; i++) {
      prevMonthDays.push({
        day: i,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    // Calculate days for the current month
    const currentMonthDays = [];
    for (let i = 1; i <= daysCount; i++) {
      const date = new Date(year, month, i);
      currentMonthDays.push({
        day: i,
        isCurrentMonth: true,
        isToday: isSameDay(date, today), // Check if the day is today
      });
    }

    // Calculate days from the next month to display
    const nextMonthDays = [];
    const totalDays = prevMonthDays.length + currentMonthDays.length;
    const weeks = Math.ceil(totalDays / 7); // Calculate the number of weeks to display
    const nextMonthDaysCount = weeks * 7 - totalDays; // Calculate the number of days needed from the next month

    for (let i = 1; i <= nextMonthDaysCount; i++) {
      nextMonthDays.push({
        day: i,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    // Combine all days into a single array
    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }, [currentMonth, today]);

  return (
    <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
      {/* Render day names */}
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <div
          key={day}
          className="bg-gray-100 dark:bg-gray-700 py-2 text-center text-sm font-medium text-gray-600 dark:text-gray-300"
        >
          {day}
        </div>
      ))}
      {/* Render day cells */}
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