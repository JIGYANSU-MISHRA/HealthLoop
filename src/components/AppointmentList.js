import { useAppointments } from '../context/AppointmentContext'; // Importing the custom hook to access appointment context
import { formatTime } from '../utils/dates'; // Importing a utility function to format time

export default function AppointmentList() {
  // Destructuring functions and variables from the appointment context
  const {
    selectedDate,
    getAppointmentsForDay,
    setCurrentAppointment,
    setIsModalOpen,
  } = useAppointments();

  // Check if the selectedDate is a valid Date object
  if (!(selectedDate instanceof Date)) {
    return <p>Error: Invalid date selected.</p>; // Return an error message if the date is invalid
  }

  // Get appointments for the selected date
  const appointments = getAppointmentsForDay(selectedDate) || [];

  // Function to handle editing an appointment
  const handleEdit = (appointment) => {
    setCurrentAppointment(appointment); // Set the current appointment to be edited
    setIsModalOpen(true); // Open the modal for editing
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Appointments for {selectedDate.toDateString()} {/* Display the selected date */}
      </h3>
      
      {appointments.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No appointments scheduled for this day.</p> // Message if no appointments
      ) : (
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id} // Unique key for each appointment
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
                  onClick={() => handleEdit(appointment)} // Edit button for each appointment
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
            setCurrentAppointment(null); // Reset current appointment
            setIsModalOpen(true); // Open modal to add a new appointment
          }}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          + Add New Appointment
        </button>
      </div>
    </div>
  );
}