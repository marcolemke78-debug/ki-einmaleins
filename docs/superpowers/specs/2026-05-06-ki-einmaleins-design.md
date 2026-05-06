# KI-Einmaleins für Chrissi — Design (V2)

**Status:** Überarbeitet nach Reviewer-Agent-Feedback, zum Marco-Review
**Datum:** 2026-05-06
**Repo (geplant):** `marcolemke78-debug/ki-einmaleins`
**URL (geplant):** `marcolemke78-debug.github.io/ki-einmaleins/`

> **Was sich gegenüber V1 geändert hat:**
> - Lektionsreihenfolge umgebaut: Theorie & Historie nicht mehr als Block 1, sondern Theorie-Häppchen integriert + Historie als Anhang in Lektion 9
> - **Datenschutz vorgezogen** auf Lektion 3 (vor jede Praxis-Lektion mit echten Inhalten)
> - **AVV-Problem von ChatGPT Free** explizit benannt
> - Datei- und Bilder-Limits realistisch eingeplant (3 Uploads/24 h gesamt, max. 2 Bilder)
> - Modell-Auswahl: Free hat aktuell GPT-5.3 Instant + Thinking-Toggle, kein Dropdown
> - Pain-First-Lektion 2 (Prompten) mit Vorab-Hinweis abgefedert
> - ChatGPT-Direktlink (`?q=…`) gestrichen — nur Copy-Button
> - „Eigene Anwendung" als Selbst-Checkliste, nicht App-Validierung
> - Memory-Feature: explizite Empfehlung „aus" für Berufliches
> - Neue Sub-Missionen: Diktieren, Vorlesen, „Einfache Sprache", Antwort kopieren/speichern

## Kontext und Motivation

### Zielgruppe
- **Chrissi**, 48 Jahre, Erzieherin mit Zusatzqualifikation Sprachförderkraft
- Nutzt aktuell **ChatGPT Free** im Browser
- Verwendet KI „wie Google" — kurze Suchanfragen, ohne Prompting-Bewusstsein

### Kern-Pain-Points
1. **Prompting unklar** — Bedeutung der Promptqualität für die Antwortqualität nicht präsent
2. **Endlos-Chats** — eine Konversation für alles, Ergebnisse werden mit jedem Folge-Prompt schlechter
3. **Datei-Handling unbekannt** — PDFs/Word-Dokumente werden nicht hochgeladen
4. **Möglichkeitsraum unklar** — weiß nicht, was die KI sonst noch kann (Bilder, Sprachen, Übersetzung in einfache Sprache)

### Leitidee
**Selbstvertrauen statt Theorie. Pain-First. Live-Praxis statt Trockenübung.**

Wenn Chrissi sich aktuell „blöd" fühlt, weil ChatGPT enttäuschende Antworten liefert, soll sie nach dem Programm verstanden haben: Es liegt am Werkzeug-Verständnis, nicht an ihr.

## Architektur

### Tech-Stack
- **Vanilla HTML / CSS / JS**, kein Framework, kein Build-Tool
- Basiert auf der Lernprogramm-Blaupause (`~/.claude/memory/lernprogramm_blueprint.md`)
- Referenz-Implementierung: `~/Desktop/LE_C_Claude_Code/app/`
- Fortschritt persistent in `localStorage`
- **Deployment:** GitHub Pages (öffentliches Repo)
- **Geräte:** Hauptzielgerät Laptop/Browser. Vor Fertigmeldung iPad/iOS-Safari-Kompatibilität prüfen. Touch-Targets ≥ 44 px.

### Tonalität & Look
- **Anrede:** per du, persönlich („Hi Chrissi, …", „Probier mal …")
- **Akzentfarbe:** Vorschlag warmes Petrol/Türkis (#0F766E oder dunkler #115E59 für iPad-Außennutzung) — im Review final entscheiden
- **ChatGPT-Bezug:** echte ChatGPT-Screenshots (Free), nicht stilisiert
- **Sprachstil:** wie ein verständnisvoller Kollege — keine Fachsprache ohne Übersetzung („Modell" → „die KI")

### Datenschutz in den Beispielen
- **Keine echten Namen** von Kindern, Eltern, Kolleginnen oder Einrichtungen
- Beispiele nutzen Fantasie-Familien (z. B. „Familie Müller", „Bello der Hund", „Kindergruppe Sonnenblume")
- Datenschutz wird **früh und prominent** thematisiert (Lektion 3, vor jeder beruflichen Praxis-Übung)

## Lektionsstruktur

Statt der klassischen 3-Phasen-Struktur (Erklärung → Beispiel → Übung) nutzt jede Lektion ein **„Cockpit"-Format**, das Chrissi neben dem ChatGPT-Tab geöffnet hält:

| Phase | Inhalt | Dauer |
|---|---|---|
| 1. **Worum geht's** | Kurze Erklärung, max. 1 Bildschirm Text + 1 Bild | 2-3 Min |
| 2. **Mission 1 — Vormachen** | Vorgegebener Prompt mit Copy-Button. „Klick, geh zu ChatGPT, schau was passiert." | 3-5 Min |
| 3. **Was ist passiert?** | 1-2 Reflexions-Multiple-Choice zur Antwort | 1-2 Min |
| 4. **Mission 2 — Twist** | Zweite Mission mit Variation, sie sieht den Unterschied | 3-5 Min |
| 5. **Eigene Anwendung** | Aufgabe ohne Vorlage, sie schreibt selbst und hakt eine **Selbst-Checkliste** ab (Rolle? Aufgabe? Kontext? Format?). Die App validiert nicht den ChatGPT-Output, sondern führt durch die Reflexion. | 5 Min |

**Pro Lektion 2-4 Live-Missionen.**

> **Wichtig:** Phasen sind flexibel. Lektion 0 hat z. B. nur Phase 1 + 2. Lektion 3 (Datenschutz) hat keine Live-Missionen, sondern Entscheidungs-Übungen. Das Lektions-Datenschema unterstützt optionale Phasen (siehe technischer Abschnitt).

## Lektionen (10 total) — neue Reihenfolge

### Lektion 0 — Erste 5 Minuten
**Ziel:** Sofort-Erfolgserlebnis vor jeder Theorie. Berührungsangst auf null.
- Eine einzige Mission: Spaß-Prompt kopieren, in ChatGPT einfügen, Ergebnis anschauen
- Beispiel-Prompt: „Schreib ein 4-zeiliges Gedicht über meinen Hund Bello, der Socken klaut."
- Reflexion: „Wie schnell ging das?" + „Hat dich was überrascht?"

### Lektion 1 — Das Chat-Fenster verstehen
**Ziel:** Interface-Sicherheit, alle Knöpfe einmal gefunden.
- Tour durch die ChatGPT-Web-Oberfläche: Eingabefeld, Seitenleiste, Neuer Chat, **Standardmodell + „Thinking"-Toggle** (kein Modell-Dropdown — den hat nur Plus), Büroklammer für Dateien, Profil-Menü
- **Diktieren statt Tippen** — Mikrofon-Symbol erklären (auch im Browser nutzbar). Mini-Mission: einen Prompt einsprechen statt tippen.
- **Vorlesen lassen** — Lautsprecher-Symbol unter Antworten zeigen.
- Mobile App vs. Browser kurz erwähnt.
- Mission: „Finde diese 6 Knöpfe in deinem ChatGPT" (interaktive Hotspot-Übung)

### Lektion 2 — Prompten Grundlagen: Die 4 Hebel
**Ziel:** Aha-Moment „Prompting ist erlernbar". Eingebaute Mini-Theorie zur KI als „Text-Vorhersage-Apparat".
- **Vorab-Hinweis im Intro:** „Wir machen gleich absichtlich erst was Suboptimales — das ist der Trick, damit du den Unterschied siehst. Das hat nichts damit zu tun, ob du ‚es kannst'." (verhindert Selbstbild-Bestätigung)
- Mini-Theorie-Häppchen: „Die KI ist kein denkendes Wesen, sondern eine extrem trainierte Text-Vorhersage. Deshalb funktioniert sie umso besser, je klarer du ihr sagst, was du willst."
- Vier Hebel: **Rolle** („Du bist Erzieherin…") · **Aufgabe** (was genau) · **Kontext** (für wen, welches Alter, welche Situation) · **Format** (Liste, Tabelle, kurzer Text)
- Mission 1: Schlechter Prompt („Schreib was über Geburtstage") → enttäuschende Antwort
- Mission 2: Gleicher Inhalt mit allen 4 Hebeln → wow-Effekt
- Mission 3: Sie baut selbst einen Prompt nach dem Schema (`prompt-builder`-Übung)

### Lektion 3 — Datenschutz: Was du nie reinschreibst
**Ziel:** Vor jeder beruflichen Anwendung wissen, wo die Grenzen liegen. **Pflicht-Lektion vor Lektion 4.**

- **Kernregel 1 — Keine echten Daten:** Keine Kindernamen, Klarnamen, Beobachtungsbögen mit echten Daten, Adressen, Geburtsdaten, Diagnosen, Familien-Hintergründe.
- **Kernregel 2 — AVV-Problem:** ChatGPT Free hat **keinen Auftragsverarbeitungsvertrag (AVV)**. Für berufliche personenbezogene Daten ist das **rechtlich nicht zulässig**, auch wenn pseudonymisiert. → Konsequenz: Beruflich nur **vollständig anonymisierte oder fiktive Inhalte** nutzen.
- **Kernregel 3 — Trägervorgaben:** Vor erster beruflicher Nutzung beim Träger / der Leitung klären, ob KI-Nutzung überhaupt erlaubt ist. Manche Träger verbieten es komplett.
- **Pseudonymisierung als Workaround:** „Kind A", „Familie X", „Kollegin K" statt Namen. Aber: Bei Beobachtungsbögen reicht das oft nicht.
- **Übungstyp:** Entscheidungs-Übung. Mehrere Beispiel-Texte, Chrissi entscheidet pro Text: „Darf so rein? / Anonymisieren? / Niemals rein."
- **Empfehlung:** Memory-Feature ausschalten (Lektion 5) und „Temporary Chat" für alles Berufliche.

### Lektion 4 — Prompten in der Praxis: Erzieher-Alltag
**Ziel:** Transfer in den Beruf. Alle Beispiele mit fiktiven Familien.

Konkrete Missionen:
- Elternbrief verfassen (Krankheits-Info, Sommerfest-Einladung)
- Sprachförderung-Idee zu einem Bilderbuch
- Beobachtungsbogen-Notizen umformulieren („von Stichpunkten in fließenden Text") — **mit anonymisierten Beispielen**
- **Eigene Sub-Mission „Übersetzung in einfache Sprache"** — Erzieher-Killer-Use-Case. Vorher-Nachher mit echtem Elternbrief-Beispiel. Auch: Übersetzung in Türkisch / Englisch / Arabisch / Russisch.
- **Sub-Mission „Antwort kopieren & nutzen":** Antwort markieren, kopieren, in Word/Mail einfügen. Drei Wege zeigen.

### Lektion 5 — Chat-Hygiene & Chat-Verwaltung
**Ziel:** Endlos-Chats verhindern, Übersicht behalten, Memory unter Kontrolle.

**Teil A — Wann neuer Chat?**
- Kontextfenster-Konzept als „Kurzzeitgedächtnis": je voller, desto schlechter die Antworten
- Mission: In einem alten, vollen Chat (oder bewusst überladen mit 6-8 Themen-Wechseln) eine neue Frage stellen → Antwort beobachten. Dann neuer Chat, gleiche Frage → Unterschied spüren.
- Regel: Ein Thema = ein Chat

**Teil B — Chats verwalten**
- Chat umbenennen (Klick auf den Titel)
- Chat löschen (3-Punkte-Menü)
- Archivieren
- Chats in der Seitenleiste finden
- **Memory-Feature gezielt steuern:** Was ist Memory? Wo aus-/anschalten? **Empfehlung für Chrissi: Memory standardmäßig AUS** + „Temporary Chat" für alles Berufliche, weil sonst versehentliche Eingaben gespeichert werden.

### Lektion 6 — Mit Dateien arbeiten
**Ziel:** Pain-Point-Auflösung. **Mit Limit-Bewusstsein.**

> **Hinweis-Banner in der Lektion:** „ChatGPT Free erlaubt nur **3 Datei-Uploads pro 24 Stunden insgesamt** (Dateien + Bilder kombiniert, max. 2 Bilder). Diese Lektion und Lektion 7 zusammen brauchen mehr — verteile sie auf zwei Tage."

- **Maximal 2 Datei-Missionen pro Lektions-Sitzung.**
- Mission 1: PDF eines (anonymisierten/fiktiven) Elternbriefs hochladen → „fass zusammen" + „übersetze in einfache Sprache"
- Mission 2: Word-Dokument hochladen, verbessern lassen, Antwort rauskopieren
- Bonus-Idee (am nächsten Tag): „Schreib mir basierend auf diesem PDF eine Antwort"
- **Sub-Mission „Antwort speichern":** Antwort in eigene Datei kopieren — Word, Mail, Notizen.

### Lektion 7 — Bilder ins Spiel bringen
**Ziel:** Multimodalität als Erzieher-Werkzeug. **Mit Limit-Bewusstsein (max. 2 Bilder/Tag in Free).**

- **Maximal 2 Bild-Missionen pro Lektions-Sitzung.**
- Mission 1: Foto eines Bilderbuchs hochladen → „Was ist hier zu sehen?" + „Erkläre die Szene für ein 4-jähriges Kind."
- Mission 2: Foto eines handgeschriebenen Zettels → „Tippe das ab" + „Übersetze auf Türkisch."
- Bonus-Idee (am nächsten Tag): „Beschreibe das Bild auf Arabisch / Russisch."

### Lektion 8 — Was die KI nicht kann (Halluzinationen)
**Ziel:** Realismus. (Datenschutz wurde bereits in Lektion 3 abgehandelt.)
- Mission: „Frag ChatGPT nach dem Buch ‚Der blaue Wal von Klaus Müller'." Sie sieht live, wie selbstbewusst etwas erfunden wird.
- Halluzination-Markier-Übung: Eine Beispiel-Antwort lesen, problematische Stellen anklicken (**Satz-Ebene**, mit kurzer Begründungs-Auswahl: „erfunden / unbelegt / widerspricht Wissen")
- Regel: Bei Fakten immer prüfen — KI ist gut für Formulierungen, gefährlich für Wahrheiten
- Ergänzung: „Was, wenn ChatGPT was nicht weiß?" → Hinweis, dass Modelle ein Wissens-Cutoff haben

### Lektion 9 — Was es noch gibt + Mini-Historie
**Ziel:** Ausblick + zeitliche Einordnung. Bewusst kurz.
- **Mini-Historie (kompakt):** November 2022 ChatGPT-Launch (der „Aha-Moment für die Welt"), 2024 KI lernt Bilder & Sprache, 2025/26 Agenten („die KI klickt selbst").
- Andere Tools: **Claude** (Anthropic), **Gemini** (Google), **Copilot** (Microsoft) — kurz erwähnt, ohne Wertung („alle drei können Ähnliches, schau es dir bei Interesse an")
- Was kostet was, wann lohnt ChatGPT Plus
- Empfehlung: Erstmal bei ChatGPT bleiben, bei Bedarf Marco fragen
- **Abschluss-Bildschirm:** „Du hast's drauf, Chrissi!" + Visualisierung der gelernten Hebel.

## Übungstypen

| Typ | Zweck | Status | Spec-Detail |
|---|---|---|---|
| `live-mission` | Prompt mit Copy-Button + Reflexions-Anker | **Neu** | `promptToCopy` (string), `instruction` (HTML), `reflection` (multiple-choice oder Checkliste) |
| `multiple-choice` | Reflexion nach Mission, Theorie-Check | Existiert | wie Blaupause |
| `prompt-comparison` | Zwei Prompts nebeneinander, „welcher ist besser und warum" | **Neu** | zwei `prompt`-Strings + `correctIndex` + Begründungs-Optionen |
| `hallucination-mark` | Antworttext lesen, problematische Stellen anklicken | **Neu** | Antworttext in Sätze segmentiert (Array of strings), `correctIndices` (welche Sätze problematisch), pro Satz Begründungs-Auswahl: „erfunden / unbelegt / widerspricht Wissen" |
| `prompt-builder` | Bausteine (Rolle/Aufgabe/Kontext/Format) per Klick zu Prompt zusammensetzen | **Neu** | Bausteine als Liste, korrekte Zuordnung pro Slot |
| `interface-find` | Screenshot mit Hotspots — den richtigen Knopf finden | **Neu** | `screenshot` (Bildpfad), `targets` (Liste mit Bounding-Boxes + Bezeichnung) |
| `data-decision` | Beispieltext bewerten: „Darf so rein? / Anonymisieren? / Niemals rein." (für Lektion 3) | **Neu** | Liste von Beispieltexten + 3 Antwortoptionen + korrekte Antwort |
| `self-checklist` | Selbst-Reflexion zu eigenem Prompt (Phase 5) | **Neu** | Liste von Ja/Nein-Fragen, kein Right/Wrong, nur Reflexion |

Die Blaupause-Übungstypen aus Logik-Programmen (Wahrheitstabelle, Binärrechnung, Ausdruck-Eingabe) entfallen.

## Technische Komponenten

### Wiederverwendbar aus Referenz-Implementierung
- `app/index.html` Grundgerüst
- `js/app.js` Navigation, LESSONS-Konstante
- `js/progress.js` localStorage-Fortschritt
- `js/renderer.js` (DOM-Rendering, Phasen-Tabs) — wird angepasst
- `css/style.css` — Akzentfarbe und Tonalität anpassen

### Neu zu bauen
- `js/exercises.js` — komplett neu, da neue Übungstypen
- `js/lessons-00-erste-5-min.js` … `js/lessons-09-was-noch-gibt.js` — Lektionsdaten
- **Copy-Button-Komponente** (Clipboard-API + visuelles Feedback „Kopiert!" + sekundärer Hinweis „Wechsle jetzt zu deinem ChatGPT-Tab")
- `assets/screenshots/` — echte ChatGPT-Screenshots für Interface-Touren (von Marco oder Chrissi zu liefern)

### Lektionsdaten-Struktur (mit optionalen Phasen)
```javascript
{
  id: NUMBER,
  title: 'STRING',
  intro: { html: 'HTML-STRING' },           // Phase 1, immer Pflicht
  missions?: [                                // Phasen 2 + 4, optional
    {
      type: 'live-mission' | 'data-decision' | …,
      title: 'STRING',
      promptToCopy?: 'STRING',                // nur bei live-mission
      instruction: 'HTML-STRING',
      reflection?: { type: 'multiple-choice', ... }
    }
  ],
  practice?: [                                // Phase 5, optional
    { type: 'prompt-builder' | 'self-checklist' | …, ... }
  ]
}
```

`missions` und `practice` sind beide optional — Lektion 0 hat z. B. nur eine Mission, Lektion 3 hat keine Live-Missionen.

### Bewusst gestrichen (gegenüber V1)
- **ChatGPT-Direktlink mit `?q=…`** — funktioniert technisch, ist aber undokumentiert, instabil und forciert ein veraltetes Modell. Reiner Copy-Button reicht.

## Was bewusst NICHT drin ist (YAGNI)
- **API-Nutzung / Programmierung** — Chrissi nutzt nur die Web-Oberfläche
- **Custom GPTs / GPT Store** — Plus-only, Overload für Free-Nutzerin
- **DALL-E / Bildgenerierung** — kein Erzieher-Kernuse-case (kann später als 11. Lektion ergänzt werden)
- **Voice Mode (vollwertig)** — App-only und teils Plus, das einfache Vorlesen/Diktieren reicht
- **Andere Tools im Detail** — nur in Lektion 9 als Ausblick

## Erfolgskriterien
Chrissi nach dem Programm:
1. Schreibt Prompts mit Rolle/Aufgabe/Kontext/Format, ohne nachzudenken
2. Fängt einen neuen Chat an, wenn ein Thema wechselt — automatisch
3. Lädt PDFs hoch und arbeitet damit selbstverständlich (im Limit)
4. Erkennt Halluzinationen und prüft Faktenangaben
5. **Gibt nichts mit echten Kinder- oder Familiendaten in ChatGPT ein**
6. **Hat Memory aus, nutzt Temporary Chat für Berufliches**
7. Hat ihren ersten Elternbrief mit ChatGPT-Hilfe verfasst und ist stolz darauf

## Offene Punkte für Marco-Review
1. **Akzentfarbe:** Petrol #0F766E, dunkler #115E59 für iPad-Sonnenlicht-Kontrast, Standard-Blau, oder was anderes?
2. **Screenshots:** Wer macht die ChatGPT-Screenshots? Du, oder soll Chrissi das spielerisch im Programm tun (eigene Oberfläche fotografieren)?
3. **Lektion 3 (Datenschutz) Tonalität:** Aktuell sehr explizit auf Risiken — passt das, oder soll der Ton weicher / motivierender werden, damit Chrissi keine Angst kriegt und das Programm lieber abbricht?
4. **Erfolgskriterium 6:** Sollen wir wirklich Memory-Aus zur expliziten Lernziel-Hürde machen, oder reicht der Hinweis in Lektion 5?
5. **Reihenfolge Lektion 3 vs. Lektion 2:** Aktuell Theorie-Häppchen in 2, Datenschutz in 3, Praxis ab 4. Alternative: Datenschutz schon vor Lektion 2 (also Lektion 1.5), damit gar keine personenbezogenen Daten je versehentlich getippt werden. Bevorzugt?
