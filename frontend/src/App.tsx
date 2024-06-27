import { Outlet } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate';

function App() {
  return (
    <Auth0ProviderWithNavigate>
      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <main className="mt-2 mb-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Auth0ProviderWithNavigate>
  );
}

export default App;
