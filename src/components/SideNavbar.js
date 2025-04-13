import Link from 'next/link'; // Importing Link for client-side navigation in Next.js
import { useRouter } from 'next/router'; // Importing useRouter to access the current route
import { useState } from 'react'; // Importing useState for managing component state

// Array of navigation items with their names, paths, and SVG icons
const navItems = [
  { name: 'Overview', path: '/overview', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { name: 'Appointments', path: '/appointments', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { name: 'Doctors', path: '/doctors', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { name: 'Settings', path: '/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
];

export default function SideNavbar() {
  const router = useRouter(); // Using useRouter to get the current route
  const [collapsed, setCollapsed] = useState(false); // State to manage sidebar collapse

  return (
    <div className={`flex flex-col h-screen bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'} sticky top-0`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        {!collapsed && (
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">HealthLoop</h2> // Sidebar title
        )}
        <button
          onClick={() => setCollapsed(!collapsed)} // Toggle collapse state
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Toggle sidebar"
          aria-expanded={!collapsed}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={collapsed ? 'M13 5l7 7-7 7M5 5l7 7-7 7' : 'M11 19l-7-7 7-7m8 14l-7-7 7-7'} // Icon changes based on collapse state
            />
          </svg>
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 p-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path} className={`flex items-center p-3 rounded-lg transition-colors ${
                router.pathname === item.path
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' // Active link styling
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`} aria-current={router.pathname === item.path ? 'page' : undefined}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={item.icon} // Icon for each navigation item
                  />
                </svg>
                {!collapsed && (
                  <span className="ml-3 font-medium">{item.name}</span> // Display item name if not collapsed
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            U
          </div>
          {!collapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">User Name</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}