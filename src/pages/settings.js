import { useState } from 'react';

export default function Settings() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const handleSaveChanges = () => {

    console.log('Saving changes:', { firstName, lastName, emailNotifications, smsNotifications });
  };

  return (
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Settings</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Profile Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Notification Preferences</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    id="email-notifications"
                    name="email-notifications"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded"
                    checked={emailNotifications}
                    onChange={(e) => setEmailNotifications(e.target.checked)}
                  />
                  <label htmlFor="email-notifications" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Email notifications
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sms-notifications"
                    name="sms-notifications"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded"
                    checked={smsNotifications}
                    onChange={(e) => setSmsNotifications(e.target.checked)}
                  />
                  <label htmlFor="sms-notifications" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    SMS notifications
                  </label>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                onClick={handleSaveChanges}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}