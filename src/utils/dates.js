// Function to get the number of days in a given month and year
export const daysInMonth = (month, year) => {
  // Create a date object for the first day of the next month and subtract one day to get the last day of the current month
  return new Date(year, month + 1, 0).getDate();
};

// Function to get the day of the week for the first day of a given month and year
export const getFirstDayOfMonth = (month, year) => {
  // Create a date object for the first day of the month and return the day of the week (0 = Sunday, 1 = Monday, etc.)
  return new Date(year, month, 1).getDay();
};

// Function to get the name of a month given its index (0 = January, 1 = February, etc.)
export const getMonthName = (month) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  // Return the month name from the array
  return months[month];
};

// Function to format a date object into a time string (HH:MM format)
export const formatTime = (date) => {
  // Use toLocaleTimeString with options to format the time
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

// Function to check if two dates are the same day
export const isSameDay = (date1, date2) => {
  // Compare the day, month, and year of both dates
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};