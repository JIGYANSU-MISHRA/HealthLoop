export const buttonStyles = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 dark:border-gray-600',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
};

export const inputStyles =
  'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400';

export const cardStyles = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6';

export const modalStyles = {
  overlay: 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50',
  content: 'bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md',
};

export const calendarStyles = {
  header: 'flex items-center justify-between mb-6',
  grid: 'grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm',
  dayHeader: 'bg-gray-100 dark:bg-gray-700 py-2 text-center text-sm font-medium text-gray-600 dark:text-gray-300',
  dayCell: 'min-h-24 p-2 border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors',
  today: 'border-blue-500 dark:border-blue-400 border-2',
};

export const appointmentStyles = {
  listItem: 'border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors',
};