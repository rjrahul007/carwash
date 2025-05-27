import React from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  // Simple client-side routing for this example
  const [currentPage, setCurrentPage] = React.useState('home');

  // Listen for hash changes
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'booking') {
        setCurrentPage('booking');
      } else {
        setCurrentPage('home');
      }
    };

    // Initial check
    handleHashChange();

    // Listen for changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <Layout>
      {currentPage === 'home' && <Home />}
      {currentPage === 'booking' && <Booking />}
    </Layout>
  );
}

export default App;