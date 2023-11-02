import '../styles/global.css';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  // Use useEffect to apply the dark mode class to the body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]); // This effect runs when darkMode state changes

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Pass down the darkMode and toggleDarkMode through the component tree
  return (
    <main>
      <Component {...pageProps} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </main>
  );
}