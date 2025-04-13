import { AppointmentProvider } from '../context/AppointmentContext'; // Importing the AppointmentProvider for managing appointment state
import { NotificationProvider } from '../context/NotificationContext'; // Importing the NotificationProvider for managing notification state
import Layout from '../components/Layout'; // Importing the Layout component for consistent page layout
import '../styles/globals.css'; // Importing global CSS styles

function MyApp({ Component, pageProps }) {
  return (
    // Wrapping the application with the NotificationProvider to provide notification context
    <NotificationProvider>
      {/* Wrapping the application with the AppointmentProvider to provide appointment context */}
      <AppointmentProvider>
        {/* Wrapping the application with the Layout component for consistent layout */}
        <Layout>
          {/* Rendering the current page component with its props */}
          <Component {...pageProps} />
        </Layout>
      </AppointmentProvider>
    </NotificationProvider>
  );
}

export default MyApp;