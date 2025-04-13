import { createContext, useContext, useState, useEffect } from 'react';

// Create a context for notifications
const NotificationContext = createContext();

// Provider component to wrap parts of the app that need access to notification data
export function NotificationProvider({ children }) {
  // State to store the list of notifications
  const [notifications, setNotifications] = useState([]);

  // Function to add a new notification
  const addNotification = (notification) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  // Function to remove a notification by ID
  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  // Effect to automatically remove notifications after 5 seconds
  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => {
        setNotifications((prevNotifications) => prevNotifications.slice(1)); // Remove the oldest notification
      }, 5000);

      return () => clearTimeout(timer); // Cleanup the timer on component unmount or when notifications change
    }
  }, [notifications]);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
      }}
    >
      {children} {/* Render children components that need access to the context */}
    </NotificationContext.Provider>
  );
}

// Custom hook to use the NotificationContext
export function useNotifications() {
  return useContext(NotificationContext);
}