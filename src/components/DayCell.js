import { useAppointments } from '../context/AppointmentContext';

export default function DayCell({ day, currentMonth, isCurrentMonth, isToday }) {
  const { setSelectedDate, setIsModalOpen, getAppointmentsForDay } = useAppointments();
  const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
  const appointments = getAppointmentsForDay(date);

  const handleDayClick = () => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  return (
    <div
      onClick={handleDayClick}
      className={`min-h-24 p-2 border ${
        isCurrentMonth
          ? 'bg-white dark:bg-gray-800 dark:text-gray-100'
          : 'bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500'
      } ${
        isToday ? 'border-blue-500 dark:border-blue-400 border-2' : 'border-gray-200 dark:border-gray-700'
      } cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors`}
    >
      <div className="flex justify-between">
        <span
          className={`text-sm font-medium ${
            isToday ? 'bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center' : ''
          }`}
        >
          {day}
        </span>
        {appointments.length > 0 && (
          <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-1">
            {appointments.length}
          </span>
        )}
      </div>
      <div className="mt-1 space-y-1 overflow-hidden">
        {appointments.slice(0, 2).map((appt) => (
          <div
            key={appt.id}
            className="text-xs p-1 bg-blue-100 text-blue-800 rounded truncate"
          >
            {appt.title}
          </div>
        ))}
        {appointments.length > 2 && (
          <div className="text-xs text-gray-500">+{appointments.length - 2} more</div>
        )}
      </div>
    </div>
  );
}