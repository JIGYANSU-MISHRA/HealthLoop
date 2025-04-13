import { useAppointments } from '../context/AppointmentContext';
import { formatTime } from '../utils/dates';

export default function AppointmentList() {
  const {
    selectedDate,
    getAppointmentsForDay,
    setCurrentAppointment,
    setIsModalOpen,
  } = useAppointments();

  if (!(selectedDate instanceof Date)) {
    return <p>Error: Invalid date selected.</p>;
  }

  const appointments = getAppointmentsForDay(selectedDate) || [];

  const handleEdit = (appointment) => {
    setCurrentAppointment(appointment);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Appointments for {selectedDate.toDateString()}
      </h3>
      
      {appointments.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No appointments scheduled for this day.</p>
      ) : (
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">{appointment.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {formatTime(new Date(appointment.date))}
                  </p>
                  {appointment.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {appointment.description}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => handleEdit(appointment)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500 text-sm font-medium"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-6">
        <button
          onClick={() => {
            setCurrentAppointment(null);
            setIsModalOpen(true);
          }}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          + Add New Appointment
        </button>
      </div>
    </div>
  );
}