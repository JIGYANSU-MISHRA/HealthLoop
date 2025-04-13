import Calendar from '../components/Calendar';

export default function Appointments() {
  return (
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Appointments</h1>
        <Calendar />
      </div>
  );
}