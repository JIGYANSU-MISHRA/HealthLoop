import { useState, useEffect } from 'react';
import SideNavbar from './SideNavbar'; // Component for the side navigation bar
import Notification from './Notification'; // Component for displaying notifications

export default function Layout({ children }) {
  // State to track dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Effect to load dark mode preference from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode) {
        const parsedMode = JSON.parse(savedMode);
        setDarkMode(parsedMode);
        if (parsedMode) {
          document.documentElement.classList.add('dark'); // Add 'dark' class to enable dark mode
        } else {
          document.documentElement.classList.remove('dark'); // Remove 'dark' class to disable dark mode
        }
      }
    }
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode)); // Save preference to localStorage
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 flex">
      <SideNavbar /> {/* Render the side navigation bar */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-blue-600 dark:bg-blue-800 text-white shadow-md">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex-1 text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Doctor Appointment Booking
              </h1>
            </div>
            <button
              onClick={toggleDarkMode} // Attach toggle function to button
              className="p-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-900 transition-colors"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`} // Accessibility label
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" // Sun icon for light mode
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" // Moon icon for dark mode
                  />
                </svg>
              )}
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto container mx-auto px-4 py-8 bg-gray-50 dark:bg-gray-900">
          {children} {/* Render child components */}
          <Notification /> {/* Render notifications */}
        </main>
      </div>
    </div>
  );
}