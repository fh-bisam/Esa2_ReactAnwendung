import { Link } from 'react-router-dom';

import type { AusflugsAuswahl } from '../typen/ausflug';

function Wetterseite({ ort, datum }: AusflugsAuswahl) {
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

          <p>
            Die Wettervorhersage wird später
            über die Open-Meteo-API geladen.
          </p>
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
