import '@/styles/globals.css';
// pages/_app.js
import { useRouter } from 'next/router';
import Sidebar from '../components/Sidebar';
import StackHeader from '../components/StackHeader';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isDashboardPage = router.pathname.startsWith('/dashboard');

  if (isDashboardPage) {
    // Wrap dashboard components with Sidebar and StackHeader
    return (
      <>
        <StackHeader />
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      </>
    );
  }

  // For other pages, render the component directly without the wrappers
  return <Component {...pageProps} />;
}

