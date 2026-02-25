import React, { useState, useEffect } from 'react';
import './App.css';

import heroImage from './assets/Golf_GTI.jpg';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <header className="TopBar">
        <div className="TopBar-inner">
          <div className="Brand">Car Gallery</div>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </header>

      <main className="Main">
        <section className="Hero" aria-label="Featured cover image">
          <img
            className="Hero-image"
            src={heroImage}
            alt="Red VW Golf GTI parked on a beach at dusk"
          />
          <div className="Hero-overlay" aria-hidden="true" />
          <div className="Hero-content">
            <h1 className="Hero-title">Discover iconic builds</h1>
            <p className="Hero-subtitle">
              Curated classics and modern legends—browse the gallery and find your next favorite.
            </p>
            <div className="Hero-actions">
              <button className="Hero-cta" type="button">
                Browse cars
              </button>
            </div>
          </div>
        </section>

        <section className="PageSection">
          <h2 className="SectionTitle">Gallery</h2>
          <p className="SectionHint">
            (Existing car grid/cards can render here; this hero is the new cover image.)
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
