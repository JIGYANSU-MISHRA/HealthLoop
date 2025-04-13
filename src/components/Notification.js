import { useState, useEffect } from 'react';

export default function Notification() {
  const [notifications, setNotifications] = useState([]);

  // Example: Adding a notification for demonstration purposes
  useEffect(() => {
    const exampleNotification = {
      id: 1,
      message: 'This is a sample notification!',
      type: 'info', // Could be 'info', 'success', 'warning', 'error'
    };
    setNotifications([exampleNotification]);
  }, []);

  // Function to remove a notification
  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 rounded shadow-md ${
            notification.type === 'info'
              ? 'bg-blue-100 text-blue-800'
              : notification.type === 'success'
              ? 'bg-green-100 text-green-800'
              : notification.type === 'warning'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          <div className="flex justify-between items-center">
            <span>{notification.message}</span>
            <button
              onClick={() => removeNotification(notification.id)}
              className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-800"
            >
              Dismiss
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}