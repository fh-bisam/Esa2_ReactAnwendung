
import { Link } from 'react-router-dom';

import type { AusflugsAuswahl } from '../typen/ausflug';
import type { WetterDaten } from '../typen/wetter';
import WetterKarte from '../komponenten/WetterKarte';

function Wetterseite({ ort, datum }: AusflugsAuswahl) {

  // Beispielwerte bis zur Anbindung der Wetter-API
  const testWetter: WetterDaten = {
    datum: datum,
    temperaturMin: 8,
    temperaturMax: 15,
    niederschlagsWahrscheinlichkeit: 30,
    beschreibung: 'Teilweise bewölkt'
  };

  return (
    <section>
      <h2>Wetterübersicht</h2>

      {ort && datum ? (
        <>
          <p>
            Ausgewählter Ort: <strong>{ort}</strong>
          </p>

          <p>
            Ausflugsdatum: <strong>{datum}</strong>
          </p>

          <WetterKarte wetter={testWetter} />

          <p>
            <small>
              Hinweis: Die angezeigten Wetterwerte sind
              derzeit Testdaten. Die Anbindung der
              Open-Meteo-API erfolgt später.
            </small>
          </p>

          <Link to="/ki-berater">
            Weiter zum KI-Ausflugsberater
          </Link>
        </>
      ) : (
        <>
          <p>
            Bitte wähle zuerst einen Ort
            und ein Datum aus.
          </p>

          <Link to="/">Zur Startseite</Link>
        </>
      )}
    </section>
  );
}

export default Wetterseite;
