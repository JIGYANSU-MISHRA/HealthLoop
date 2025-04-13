import { AppointmentProvider } from '../context/AppointmentContext';
import { NotificationProvider } from '../context/NotificationContext';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <AppointmentProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppointmentProvider>
    </NotificationProvider>
  );
}

export default MyApp;