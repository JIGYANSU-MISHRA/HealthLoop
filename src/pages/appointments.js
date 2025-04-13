import Calendar from '../components/Calendar'; // Importing the Calendar component

export default function Appointments() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Page header */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Appointments</h1>
      {/* Calendar component for displaying appointments */}
      <Calendar />
    </div>
  );
}