import { Outlet } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <main className="mt-2 mb-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
