
export default function Doctors() {
  const doctors = [
    { id: 1, name: 'Dr. Aisha Mehta', specialty: 'Cardiology', availability: 'Mon-Fri' },
    { id: 2, name: 'Dr. Rajiv Kapoor', specialty: 'Neurology', availability: 'Tue-Sat' },
    { id: 3, name: 'Dr. Priya Nair', specialty: 'Pediatrics', availability: 'Mon-Thu' },
    { id: 4, name: 'Dr. Vikram Singh', specialty: 'Orthopedics', availability: 'Wed-Sun' },
    { id: 5, name: 'Dr. Anjali Sharma', specialty: 'Dermatology', availability: 'Mon-Fri' },
    { id: 6, name: 'Dr. Arjun Patel', specialty: 'Gastroenterology', availability: 'Tue-Sat' },
    { id: 7, name: 'Dr. Kavita Rao', specialty: 'Endocrinology', availability: 'Mon-Thu' },
    { id: 8, name: 'Dr. Suresh Iyer', specialty: 'Ophthalmology', availability: 'Wed-Sun' },
    { id: 9, name: 'Dr. Neha Gupta', specialty: 'Psychiatry', availability: 'Mon-Fri' },
  ];

  return (
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Doctors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 text-xl font-bold mb-4">
                  {doctor.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{doctor.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{doctor.specialty}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Availability: {doctor.availability}</p>
                <button
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  aria-label={`View profile of ${doctor.name}`}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}