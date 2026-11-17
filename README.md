# TripWise – Intelligenter Ausflugsplaner

## 1. Projektbeschreibung

TripWise ist eine Webanwendung zur Planung von Ausflügen und Kurzreisen. Die Anwendung verbindet Wettervorhersagen mit künstlicher Intelligenz, um passende Aktivitäten für einen ausgewählten Ort und ein bestimmtes Datum vorzuschlagen.

Nutzer können einen Ort auswählen, die Wetterbedingungen abrufen und individuelle Empfehlungen erhalten. Dabei werden sowohl die Wetterdaten als auch persönliche Interessen berücksichtigt.

Das Projekt wird im Rahmen der Lehrveranstaltung Front-End Development als Gruppenarbeit entwickelt.

## 2. Funktionen

Die Anwendung besteht aus drei Ansichten:

### Startseite

Die Startseite stellt TripWise vor. Nutzer können einen Ort und ein gewünschtes Datum auswählen. Die Eingaben werden innerhalb der Anwendung verwaltet und für die weiteren Ansichten verwendet.

### Wetterübersicht

Die Wetterübersicht zeigt Wetterinformationen für den gewählten Ort. Die Daten werden über die öffentliche Open-Meteo-REST-API abgerufen und übersichtlich dargestellt. Ladezustände und mögliche Fehler werden berücksichtigt.

### KI-Ausflugsberater

Der KI-Berater erstellt individuelle Empfehlungen anhand der ausgewählten Wetterdaten und Interessen. Dafür wird eine LLM-API eingebunden. Längere Antworten werden mittels Streaming schrittweise angezeigt.

## 3. Verwendete Technologien

| Technologie | Verwendung |
|---|---|
| React | Benutzeroberfläche und Komponenten |
| TypeScript | Typisierung und Programmlogik |
| Vite | Entwicklungsumgebung und Build |
| React Router | Navigation zwischen den Ansichten |
| CSS | Gestaltung der Benutzeroberfläche |
| Open-Meteo | Öffentliche REST-API für Wetterdaten |
| LLM-API | Individuelle Ausflugsempfehlungen |
| Git und GitHub | Versionsverwaltung und Gruppenarbeit |

Der konkrete Anbieter der LLM-API wird im Zuge der Implementierung festgelegt.

## 4. Installation und Ausführung

Voraussetzung ist eine aktuelle, mit Vite kompatible Node.js-Version mit npm.

Repository klonen und in das Projektverzeichnis wechseln. Anschließend die Abhängigkeiten installieren:

```bash
npm install
```

Entwicklungsserver starten:

```bash
npm run dev
```

Produktions-Build erstellen:

```bash
npm run build
```

Code mit ESLint überprüfen:

```bash
npm run lint
```

Die Anwendung kann über die im Terminal angezeigte lokale Adresse geöffnet werden.

## 5. Aufgabenverteilung

### Gruppenmitglied Martin Biela-Sattler – React-Anwendung und Benutzerinteraktion

- Erstellung des GitHub-Repositories und Einrichtung der Entwicklungsumgebung.
- Aufbau der React-Anwendung mit TypeScript und Vite.
- Einrichtung der Navigation mit React Router.
- Entwicklung der drei Ansichten.
- Erstellung wiederverwendbarer React-Komponenten.
- Implementierung der Ortssuche und Datumsauswahl.
- Zustandsverwaltung und Weitergabe der Benutzereingaben.
- Vorbereitung der Wetteranzeige und der Schnittstellen für die API-Integration.
- Erstellung und Pflege der Projektdokumentation.

### Gruppenmitglied Rainer Frauenschiel – Datenanbindung, KI und Design

- Integration der Open-Meteo-REST-API.
- Entwicklung der API-Logik mit Custom Hooks.
- Verarbeitung und Darstellung der Wetterdaten.
- Implementierung der Ladezustände und Fehlerbehandlung.
- Integration einer LLM-API.
- Entwicklung der individuellen KI-Ausflugsempfehlungen.
- Implementierung des KI-Streamings.
- Abschließende Gestaltung der Benutzeroberfläche.

### Gemeinsame Aufgaben

Die Gruppenmitglieder stimmen die Schnittstellen ab, testen die Anwendung und überprüfen die Anforderungen der Einsendeaufgabe.

Die Entwicklung wird durch regelmäßige Git-Commits beider Gruppenmitglieder dokumentiert.

## 6. Einsatz von KI

TripWise verwendet eine LLM-API, um Wetterinformationen und Benutzereingaben zu verarbeiten und daraus individuelle Empfehlungen zu erstellen.

Während der Entwicklung werden KI-Werkzeuge unterstützend eingesetzt. Der konkrete Einsatz, die verwendeten Werkzeuge und die Ergebnisse werden im Projektverlauf dokumentiert. Generierter Code wird durch die Gruppenmitglieder überprüft und getestet.

API-Schlüssel werden nicht im GitHub-Repository gespeichert. Für eine Veröffentlichung ist eine sichere Verwaltung vertraulicher Zugangsdaten vorgesehen.

## 7. Projektstatus

Die React-Anwendung wurde mit TypeScript und Vite eingerichtet. Der Entwicklungsserver sowie der Produktions-Build wurden erfolgreich getestet.

Die weiteren Funktionen werden schrittweise umgesetzt und durch Git-Commits dokumentiert.