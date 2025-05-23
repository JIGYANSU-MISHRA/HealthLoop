import { getMonthName } from '../utils/dates'; // Importing a utility function to get the month name

export default function CalendarHeader({ month, year, onPrevMonth, onNextMonth }) {
  return (
    <div className="flex items-center justify-between mb-6">
      {/* Display the current month and year */}
      <h2 className="text-2xl font-bold text-gray-800">
        {getMonthName(month)} {year}
      </h2>
      <div className="flex space-x-4">
        {/* Button to navigate to the previous month */}
        <button
          onClick={onPrevMonth}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Previous month"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7" // SVG path for a left arrow
            />
          </svg>
        </button>
        {/* Button to navigate to the next month */}
        <button
          onClick={onNextMonth}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Next month"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7" // SVG path for a right arrow
            />
          </svg>
        </button>
      </div>
    </div>
  );
}