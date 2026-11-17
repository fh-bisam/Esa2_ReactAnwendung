import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import type { AusflugsAuswahl } from '../typen/ausflug';

interface StartseiteProps extends AusflugsAuswahl {
  onOrtChange: (wert: string) => void;
  onDatumChange: (wert: string) => void;
}

function Startseite({
  ort,
  datum,
  onOrtChange,
  onDatumChange
}: StartseiteProps) {
  const navigate = useNavigate();

  function formularAbsenden(
    ereignis: FormEvent<HTMLFormElement>
  ): void {
    ereignis.preventDefault();

    if (!ort.trim() || !datum) {
      return;
    }

    navigate('/wetter');
  }

  return (
    <section>
      <h2>Plane deinen nächsten Ausflug</h2>

      <p>
        Wähle einen Ort und ein Datum.
        TripWise unterstützt dich bei der Planung.
      </p>

      <form
        className="ausflug-formular"
        onSubmit={formularAbsenden}
      >
        <div className="formular-feld">
          <label htmlFor="ort">Ausflugsort</label>

          <input
            id="ort"
            type="text"
            placeholder="z. B. Graz"
            value={ort}
            onChange={(e) => onOrtChange(e.target.value)}
            required
          />
        </div>

        <div className="formular-feld">
          <label htmlFor="datum">Ausflugsdatum</label>

          <input
            id="datum"
            type="date"
            value={datum}
            onChange={(e) => onDatumChange(e.target.value)}
            required
          />
        </div>

        <button type="submit">
          Wetter anzeigen
        </button>
      </form>
    </section>
  );
}

export default Startseite;
