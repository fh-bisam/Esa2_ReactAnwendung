import type { WetterDaten } from '../typen/wetter';

interface WetterKarteProps {
  wetter: WetterDaten;
}

function WetterKarte({ wetter }: WetterKarteProps) {
  return (
    <article className="wetter-karte">
      <h3>Wettervorhersage</h3>

      <p>
        Datum: <strong>{wetter.datum}</strong>
      </p>

      <p>
        Tiefsttemperatur:
        <strong> {wetter.temperaturMin} °C</strong>
      </p>

      <p>
        Höchsttemperatur:
        <strong> {wetter.temperaturMax} °C</strong>
      </p>

      <p>
        Regenwahrscheinlichkeit:
        <strong> {wetter.niederschlagsWahrscheinlichkeit} %</strong>
      </p>

      <p>
        Wetterlage: <strong>{wetter.beschreibung}</strong>
      </p>
    </article>
  );
}

export default WetterKarte;
