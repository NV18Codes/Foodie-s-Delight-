import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './features/themeslice';
import Home from './pages/Home';
import About from './pages/menu'; // Ensure this matches your folder structure
import Contact from './pages/Contact';
import Footer from './components/footer';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Header Section */}
      <header className="p-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
        <h1 className="text-2xl font-bold">Foodie's Delight</h1>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Home />
        <About />
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
