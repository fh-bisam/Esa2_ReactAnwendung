
import { Link } from 'react-router-dom';

import type { AusflugsAuswahl } from '../typen/ausflug';
import type { WetterDaten } from '../typen/wetter';
import WetterKarte from '../komponenten/WetterKarte';

interface WetterseiteProps extends AusflugsAuswahl {
  wetter: WetterDaten | null;
}

function Wetterseite({
  ort,
  datum,
  wetter
}: WetterseiteProps) {
  return (
    <section>
      <h2>Wetterübersicht</h2>

      {ort.trim() && datum ? (
        <>
          <p>
            Ausgewählter Ort: <strong>{ort}</strong>
          </p>

          <p>
            Ausflugsdatum: <strong>{datum}</strong>
          </p>

          {wetter && <WetterKarte wetter={wetter} />}

          <p>
            <small>
              Hinweis: Aktuell werden Testdaten verwendet.
              Die Open-Meteo-API wird später eingebunden.
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
