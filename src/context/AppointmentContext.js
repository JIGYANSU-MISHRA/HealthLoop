import { createContext, useContext, useState } from 'react';

// Create a context for appointments
const AppointmentContext = createContext();

// Provider component to wrap parts of the app that need access to appointment data
export function AppointmentProvider({ children }) {
  // State to store the list of appointments
  const [appointments, setAppointments] = useState([]);
  // State to store the currently selected date
  const [selectedDate, setSelectedDate] = useState(new Date());
  // State to manage the visibility of the appointment modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to store the current appointment being edited or viewed
  const [currentAppointment, setCurrentAppointment] = useState(null);

  // Function to add a new appointment
  const addAppointment = (appointment) => {
    setAppointments([...appointments, { ...appointment, id: Date.now() }]); // Assign a unique ID using Date.now()
  };

  // Function to update an existing appointment
  const updateAppointment = (updatedAppointment) => {
    setAppointments(
      appointments.map((appt) =>
        appt.id === updatedAppointment.id ? updatedAppointment : appt
      )
    );
  };

  // Function to delete an appointment by ID
  const deleteAppointment = (id) => {
    setAppointments(appointments.filter((appt) => appt.id !== id));
  };

  // Function to get appointments for a specific day
  const getAppointmentsForDay = (date) => {
    return appointments.filter(
      (appt) =>
        new Date(appt.date).toDateString() === new Date(date).toDateString()
    );
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        selectedDate,
        setSelectedDate,
        addAppointment,
        updateAppointment,
        deleteAppointment,
        getAppointmentsForDay,
        isModalOpen,
        setIsModalOpen,
        currentAppointment,
        setCurrentAppointment,
      }}
    >
      {children} {/* Render children components that need access to the context */}
    </AppointmentContext.Provider>
  );
}

// Custom hook to use the AppointmentContext
export function useAppointments() {
  return useContext(AppointmentContext);
}