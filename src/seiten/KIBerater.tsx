
import { Link } from 'react-router-dom';

import type { AusflugsAuswahl } from '../typen/ausflug';
import type { WetterDaten } from '../typen/wetter';

interface KIBeraterProps extends AusflugsAuswahl {
  wetter: WetterDaten | null;
}

function KIBerater({
  ort,
  datum,
  wetter
}: KIBeraterProps) {
  return (
    <section>
      <h2>KI-Ausflugsberater</h2>

      {ort.trim() && datum ? (
        <>
          <p>
            Dein Ausflugsziel: <strong>{ort}</strong>
          </p>

          <p>
            Geplantes Datum: <strong>{datum}</strong>
          </p>

          {wetter ? (
            <div>
              <h3>Wetterinformationen</h3>

              <p>
                Temperatur:
                {' '}{wetter.temperaturMin} bis
                {' '}{wetter.temperaturMax} °C
              </p>

              <p>
                Regenwahrscheinlichkeit:
                {' '}{wetter.niederschlagsWahrscheinlichkeit} %
              </p>

              <p>
                Wetterlage: {wetter.beschreibung}
              </p>

              <p>
                <small>
                  Aktuell werden Testdaten angezeigt.
                </small>
              </p>
            </div>
          ) : (
            <p>Keine Wetterdaten vorhanden.</p>
          )}

          <h3>Deine Ausflugsempfehlung</h3>

          <p>
            Hier werden später individuelle
            KI-Empfehlungen auf Grundlage
            der Wetterdaten erstellt.
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
