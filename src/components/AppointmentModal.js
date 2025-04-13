import { useState, useEffect } from 'react';
import { useAppointments } from '../context/AppointmentContext'; // Importing the custom hook to access appointment context
import { formatTime } from '../utils/dates'; // Importing a utility function to format time

export default function AppointmentModal() {
  // Destructuring functions and variables from the appointment context
  const {
    isModalOpen,
    setIsModalOpen,
    selectedDate,
    addAppointment,
    updateAppointment,
    deleteAppointment,
    currentAppointment,
    setCurrentAppointment,
  } = useAppointments();

  // Local state for form inputs
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('09:00');
  const [description, setDescription] = useState('');

  // Effect to populate form fields when editing an existing appointment
  useEffect(() => {
    if (currentAppointment) {
      setTitle(currentAppointment.title);
      setTime(formatTime(new Date(currentAppointment.date)).slice(0, 5)); // Ensure format is HH:MM
      setDescription(currentAppointment.description || '');
    } else {
      setTitle('');
      setTime('09:00');
      setDescription('');
    }
  }, [currentAppointment]);

  // Handle form submission for adding or updating an appointment
  const handleSubmit = (e) => {
    e.preventDefault();

    const [hours, minutes] = time.split(':');
    const appointmentDate = new Date(selectedDate);
    appointmentDate.setHours(parseInt(hours, 10));
    appointmentDate.setMinutes(parseInt(minutes, 10));

    const appointmentData = {
      title,
      date: appointmentDate,
      description,
    };

    if (currentAppointment) {
      updateAppointment({ ...appointmentData, id: currentAppointment.id }); // Update existing appointment
    } else {
      addAppointment(appointmentData); // Add new appointment
    }

    handleClose(); // Close the modal after submission
  };

  // Handle appointment deletion
  const handleDelete = () => {
    if (currentAppointment) {
      deleteAppointment(currentAppointment.id);
      handleClose();
    }
  };

  // Close the modal and reset the current appointment
  const handleClose = () => {
    setIsModalOpen(false);
    setCurrentAppointment(null);
  };

  // Return null if the modal is not open
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
            {currentAppointment ? 'Edit Appointment' : 'Book Appointment'} {/* Title changes based on context */}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Date
              </label>
              <input
                type="text"
                id="date"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-100 dark:bg-gray-700 dark:text-gray-100 cursor-not-allowed"
                value={selectedDate instanceof Date ? selectedDate.toDateString() : 'Invalid Date'}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Time
              </label>
              <input
                type="time"
                id="time"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description (Optional)
              </label>
              <textarea
                id="description"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex justify-end space-x-3">
              {currentAppointment && (
                <button
                  type="button"
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Delete
                </button>
              )}
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {currentAppointment ? 'Update' : 'Book'} Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}