import { useAppointments } from '../context/AppointmentContext'; // Importing the custom hook to access appointment context

export default function DayCell({ day, currentMonth, isCurrentMonth, isToday }) {
  // Destructuring functions from the appointment context
  const { setSelectedDate, setIsModalOpen, getAppointmentsForDay } = useAppointments();
  
  // Create a date object for the current day
  const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
  
  // Get appointments for the current day
  const appointments = getAppointmentsForDay(date);

  // Handle click event on the day cell
  const handleDayClick = () => {
    setSelectedDate(date); // Set the selected date in the context
    setIsModalOpen(true); // Open the modal to view or add appointments
  };

  return (
    <div
      onClick={handleDayClick} // Attach click handler to the day cell
      className={`min-h-24 p-2 border ${
        isCurrentMonth
          ? 'bg-white dark:bg-gray-800 dark:text-gray-100' // Styling for current month days
          : 'bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500' // Styling for non-current month days
      } ${
        isToday ? 'border-blue-500 dark:border-blue-400 border-2' : 'border-gray-200 dark:border-gray-700' // Highlight today
      } cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors`} // Hover effect
    >
      <div className="flex justify-between">
        <span
          className={`text-sm font-medium ${
            isToday ? 'bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center' : '' // Highlight today
          }`}
        >
          {day} {/* Display the day number */}
        </span>
        {appointments.length > 0 && (
          <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-1">
            {appointments.length} {/* Display the number of appointments */}
          </span>
        )}
      </div>
      <div className="mt-1 space-y-1 overflow-hidden">
        {appointments.slice(0, 2).map((appt) => (
          <div
            key={appt.id} // Unique key for each appointment
            className="text-xs p-1 bg-blue-100 text-blue-800 rounded truncate"
          >
            {appt.title} {/* Display the appointment title */}
          </div>
        ))}
        {appointments.length > 2 && (
          <div className="text-xs text-gray-500">+{appointments.length - 2} more</div> // Indicate more appointments
        )}
      </div>
    </div>
  );
}