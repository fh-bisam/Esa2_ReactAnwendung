
# TripWise – Entwicklungsübergabe

## 1. Aktueller Projektstand

TripWise ist eine React-Anwendung mit TypeScript und Vite zur Planung von Ausflügen und Kurzreisen.

Die grundlegende Benutzeroberfläche wurde erstellt und für die weitere Entwicklung vorbereitet.

### Bereits umgesetzte Funktionen

- React-Projekt mit TypeScript und Vite eingerichtet.
- Navigation zwischen drei Ansichten mit React Router.
- Startseite mit Eingabe eines Ausflugsortes und Datums.
- Zentrale Zustandsverwaltung mit `useState`.
- Übergabe der Benutzereingaben über typisierte React-Props.
- Wiederverwendbare Wetterkomponente erstellt.
- Wetteranzeige mit gekennzeichneten Testdaten.
- Gemeinsame Wetterdaten für Wetterseite und KI-Berater vorbereitet.
- Grundlegendes CSS-Layout erstellt.
- README mit Projektbeschreibung und Aufgabenverteilung angelegt.

Die Anwendung wurde lokal getestet.

## 2. Noch offene Aufgaben

### 2.1 Integration der Open-Meteo-REST-API

Die bisher verwendeten Testdaten müssen durch echte Wetterdaten ersetzt werden.

Folgende Funktionen sind umzusetzen:

- Umwandlung des eingegebenen Ortsnamens in geografische Koordinaten.
- Abruf der Wettervorhersage für den gewählten Ort und das Datum.
- Verarbeitung der API-Antworten mit TypeScript.
- Übergabe der Wetterdaten an die bestehende Wetterkomponente.
- Implementierung eines Custom Hooks für die API-Anbindung.
- Behandlung der Zustände Loading, Success und Error.
- Fehlerbehandlung bei ungültigen Orten und nicht verfügbaren Wetterdaten.

Die vorhandene Komponente `WetterKarte.tsx` soll möglichst weiterverwendet werden.

### 2.2 Integration des KI-Ausflugsberaters

Der KI-Berater soll individuelle Ausflugsempfehlungen erstellen.

Dabei sollen folgende Informationen berücksichtigt werden:

- Ausgewählter Ort.
- Gewähltes Datum.
- Wetterdaten aus der REST-API.
- Interessen und gewünschte Aktivitäten des Nutzers.

Folgende Funktionen sind umzusetzen:

- Integration einer LLM-API.
- Erstellung eines geeigneten System-Prompts.
- Implementierung eines wiederverwendbaren `useAI`-Hooks.
- Streaming bei längeren KI-Antworten.
- Anzeige der generierten Empfehlungen.
- Behandlung von Ladezuständen und Fehlern.
- Sichere Verwaltung des API-Schlüssels.

API-Schlüssel dürfen nicht im GitHub-Repository oder im ausgelieferten Browser-Code gespeichert werden.

### 2.3 Finales Styling

Das bestehende Grundlayout soll optisch fertiggestellt werden.

Dazu gehören:

- Einheitliche Farbgestaltung und Typografie.
- Gestaltung von Header, Navigation und Footer.
- Verbesserung der Startseite und Eingabefelder.
- Übersichtliche Darstellung der Wetterinformationen.
- Gestaltung des KI-Ausflugsberaters und seiner Antworten.
- Einheitliches Erscheinungsbild aller drei Ansichten.

Die bestehenden React-Komponenten sollen möglichst weiterverwendet werden.

## 3. Wichtige Dateien und Komponenten

| Datei | Beschreibung |
|---|---|
| `src/App.tsx` | Zentrale Zustandsverwaltung und React Router |
| `src/seiten/Startseite.tsx` | Ortseingabe und Datumsauswahl |
| `src/seiten/Wetterseite.tsx` | Wetteranzeige und Einbindung der Wetterkarte |
| `src/seiten/KIBerater.tsx` | Vorbereitung der KI-Empfehlungen |
| `src/komponenten/Navigation.tsx` | Navigation zwischen den Ansichten |
| `src/komponenten/WetterKarte.tsx` | Wiederverwendbare Wetterkomponente |
| `src/typen/ausflug.ts` | Interface für Ort und Datum |
| `src/typen/wetter.ts` | Interface für Wetterinformationen |
| `src/index.css` | Bisheriges CSS-Grundlayout |
| `README.md` | Projektbeschreibung und Aufgabenverteilung |

## 4. Datenmodell für die Wetterinformationen

Die Datei `src/typen/wetter.ts` enthält das Interface `WetterDaten`.

Folgende Eigenschaften sind vorgesehen:

| Eigenschaft | Typ | Beschreibung |
|---|---|---|
| `datum` | string | Datum der Wettervorhersage |
| `temperaturMin` | number | Minimale Temperatur in °C |
| `temperaturMax` | number | Maximale Temperatur in °C |
| `niederschlagsWahrscheinlichkeit` | number | Regenwahrscheinlichkeit in Prozent |
| `beschreibung` | string | Beschreibung der Wetterlage |

Die Open-Meteo-Daten sollen in dieses Format umgewandelt werden.

Das Wetterobjekt wird derzeit in `App.tsx` mit Testwerten erstellt und an die Wetterseite sowie den KI-Berater übergeben.

## 5. Hinweise zur API- und KI-Integration

Die Eingaben für Ort und Datum werden zentral in `App.tsx` gespeichert.

Die Wetterseite erhält die Auswahl und das Wetterobjekt über Props. Die Komponente `WetterKarte.tsx` übernimmt ausschließlich die Darstellung.

Der KI-Berater erhält ebenfalls Ort, Datum und Wetterinformationen über Props.

Bei der Integration der REST-API sollen die Testdaten durch echte API-Daten ersetzt werden.

Dabei ist auf eine korrekte Behandlung von Ladezuständen, Fehlern und fehlenden Daten zu achten.

Die bestehende Datenübergabe soll möglichst erhalten bleiben.

## 6. Lokale Ausführung

Nach dem Klonen des Repositories die Abhängigkeiten installieren:

```bash
npm install
```

Anschließend den Entwicklungsserver starten:

```bash
npm run dev
```

Produktions-Build überprüfen:

```bash
npm run build
```

ESLint ausführen:

```bash
npm run lint
```

## 7. Git und Zusammenarbeit

Alle Entwicklungsschritte sollen durch aussagekräftige Git-Commits dokumentiert werden.

Die bisherige Entwicklung umfasst:

1. Einrichtung von React, TypeScript und Vite.
2. Erstellung der README und Aufgabenverteilung.
3. Einrichtung von React Router und drei Ansichten.
4. Implementierung von Ortssuche und Datumsauswahl.
5. Erstellung der Wetterkomponente mit Testdaten.
6. Vorbereitung der gemeinsamen Wetterdatenübergabe.

Für die weitere Entwicklung sind regelmäßige eigene Commits des zweiten Gruppenmitglieds vorgesehen.

Die bestehende Projektstruktur soll möglichst beibehalten werden.

## 8. Abschließende Kontrolle

Vor der Abgabe müssen folgende Anforderungen überprüft werden:

- Mindestens drei Ansichten mit React Router.
- Funktionierende externe REST-API.
- Vollständige Behandlung von Loading, Success und Error.
- Sinnvolle Integration einer LLM-API.
- Funktionierendes Streaming bei längeren KI-Antworten.
- Wiederverwendbare Custom Hooks.
- Korrekte TypeScript-Typisierung ohne Fehler.
- Erfolgreicher Produktions-Build.
- Erfolgreiche ESLint-Prüfung.
- Gleichwertige und nachvollziehbare Git-Commits beider Gruppenmitglieder.
- Aktualisierte README mit verwendeten APIs und dokumentiertem KI-Einsatz.
- Keine vertraulichen API-Schlüssel im Repository.
