import { createContext, useContext, useState } from 'react';

const AppointmentContext = createContext();

export function AppointmentProvider({ children }) {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState(null);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, { ...appointment, id: Date.now() }]);
  };

  const updateAppointment = (updatedAppointment) => {
    setAppointments(
      appointments.map((appt) =>
        appt.id === updatedAppointment.id ? updatedAppointment : appt
      )
    );
  };

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter((appt) => appt.id !== id));
  };

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
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointments() {
  return useContext(AppointmentContext);
}