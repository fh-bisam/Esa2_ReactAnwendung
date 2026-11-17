import { Routes, Route, Navigate } from 'react-router-dom';

import Navigation from './komponenten/Navigation';
import Startseite from './seiten/Startseite';
import Wetterseite from './seiten/Wetterseite';
import KIBerater from './seiten/KIBerater';

function App() {
  return (
    <>
      <header>
        <h1>TripWise</h1>
        <p>Dein intelligenter Ausflugsplaner</p>
      </header>

      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Startseite />} />
          <Route path="/wetter" element={<Wetterseite />} />
          <Route path="/ki-berater" element={<KIBerater />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer>
        <p>TripWise – Front-End Development ESA 2</p>
      </footer>
    </>
  );
}

export default App;
