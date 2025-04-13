import { useState, useMemo } from 'react';
import CalendarHeader from './CalendarHeader'; // Component for displaying the calendar header
import CalendarGrid from './CalendarGrid'; // Component for displaying the calendar grid
import AppointmentModal from './AppointmentModal'; // Component for managing appointment creation/editing
import AppointmentList from './AppointmentList'; // Component for displaying a list of appointments

export default function Calendar() {
  // State to track the current month being viewed
  const [currentMonth, setCurrentMonth] = useState(() => new Date());

  // Memoized value to avoid recalculating month and year on every render
  const monthValue = useMemo(() => ({
    month: currentMonth.getMonth(),
    year: currentMonth.getFullYear(),
    date: currentMonth
  }), [currentMonth]);

  // Function to navigate to the previous month
  const handlePrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  // Function to navigate to the next month
  const handleNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <CalendarHeader
        month={monthValue.month}
        year={monthValue.year}
        onPrevMonth={handlePrevMonth} // Pass function to navigate to previous month
        onNextMonth={handleNextMonth} // Pass function to navigate to next month
      />
      <CalendarGrid currentMonth={monthValue.date} /> {/* Display the calendar grid for the current month */}
      <AppointmentList /> {/* Display the list of appointments for the selected date */}
      <AppointmentModal /> {/* Modal for creating or editing appointments */}
    </div>
  );
}