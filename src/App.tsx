import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navigation from './komponenten/Navigation';
import Startseite from './seiten/Startseite';
import Wetterseite from './seiten/Wetterseite';
import KIBerater from './seiten/KIBerater';
import type { WetterDaten } from './typen/wetter';

function App() {
  const [ort, setOrt] = useState<string>('');
  const [datum, setDatum] = useState<string>('');
  const testWetter: WetterDaten | null =
    ort.trim() && datum
      ? {
          datum: datum,
          temperaturMin: 8,
          temperaturMax: 15,
          niederschlagsWahrscheinlichkeit: 30,
          beschreibung: 'Teilweise bewölkt'
        }
      : null;

  return (
    <>
      <header>
        <h1>TripWise</h1>
        <p>Dein intelligenter Ausflugsplaner</p>
      </header>

      <Navigation />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Startseite
                ort={ort}
                datum={datum}
                onOrtChange={setOrt}
                onDatumChange={setDatum}
              />
            }
          />

          <Route
            path="/wetter"
            element={
              <Wetterseite
                ort={ort}
                datum={datum}
                wetter={testWetter}
              />
            }
          />

          <Route
            path="/ki-berater"
            element={
              <KIBerater
                ort={ort}
                datum={datum}
                wetter={testWetter}
              />
            }
          />
          
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
