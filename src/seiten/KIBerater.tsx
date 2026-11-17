import { Link } from 'react-router-dom';

import type { AusflugsAuswahl } from '../typen/ausflug';

function KIBerater({ ort, datum }: AusflugsAuswahl) {
  return (
    <section>
      <h2>KI-Ausflugsberater</h2>

      {ort && datum ? (
        <>
          <p>
            Dein Ausflugsziel: <strong>{ort}</strong>
          </p>

          <p>
            Geplantes Datum: <strong>{datum}</strong>
          </p>

          <p>
            Hier werden später individuelle
            KI-Ausflugsempfehlungen angezeigt.
          </p>
        </>
      ) : (
        <>
          <p>
            Bitte wähle zuerst auf der Startseite
            einen Ort und ein Datum aus.
          </p>

          <Link to="/">Zur Startseite</Link>
        </>
      )}
    </section>
  );
}

export default KIBerater;
