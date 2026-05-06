# KI-Einmaleins für Chrissi — Design (V3)

**Status:** Final nach Marcos Entscheidungen — bereit für Implementation Plan
**Datum:** 2026-05-06
**Repo (geplant):** `marcolemke78-debug/ki-einmaleins`
**URL (geplant):** `marcolemke78-debug.github.io/ki-einmaleins/`

> **Was sich gegenüber V2 geändert hat (Marcos Entscheidungen):**
> - **Akzentfarbe:** Petrol #0F766E final
> - **Hauptzielgerät:** iPad Pro 11" (Querformat) — Chrissis Hauptarbeitsgerät, Layout primär dafür
> - **Screenshots:** Chrissi macht ihre eigenen — Programm wird mit Platzhaltern ausgeliefert, Dateipfade dokumentiert, sodass Bilder ohne Code-Änderung ersetzt werden können
> - **Lektion 3 (Datenschutz):** Komplett neu in einem motivierenden, Profi-orientierten Ton — keine Risiko-Schock-Liste, sondern „du kannst Datenschutz längst, wir übersetzen ihn nur aufs neue Werkzeug"
> - **Erfolgskriterium „Memory aus" gestrichen** — bleibt als Profi-Tipp in Lektion 5, nicht als Lernziel
> - **Reihenfolge Datenschutz vs. Prompten:** bleibt aktuell (Datenschutz Lektion 3, vor Praxis-Lektion 4) — Lektion 2 nutzt fiktive Inhalte, da kommen keine echten Daten ins Spiel
>
> **Aus V2 übernommen:**
> - Lektionsreihenfolge mit integrierter Mini-Theorie + Historie als Anhang in Lektion 9
> - Datei- und Bilder-Limits realistisch eingeplant (3 Uploads/24 h gesamt, max. 2 Bilder)
> - Modell-Auswahl: Free hat GPT-5.3 Instant + Thinking-Toggle, kein Dropdown
> - Pain-First-Lektion 2 mit Vorab-Hinweis abgefedert
> - ChatGPT-Direktlink (`?q=…`) gestrichen — nur Copy-Button
> - „Eigene Anwendung" als Selbst-Checkliste
> - Sub-Missionen: Diktieren, Vorlesen, „Einfache Sprache", Antwort kopieren/speichern

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
- **Geräte:** **Hauptzielgerät iPad Pro 11" (Querformat)** — Chrissis Hauptarbeitsgerät. Layout primär für 11"-Tablet optimieren: Tap-First (keine Hover-Abhängigkeit), Touch-Targets ≥ 44 px, ausreichend Padding für Daumen-Bedienung, Schriftgrößen für 11"-Display. Browser am Laptop als Sekundär-Use-Case (responsiv). Vor Fertigmeldung Pflicht-Test in iPad-Safari (Quer- und Hochformat).

### Tonalität & Look
- **Anrede:** per du, persönlich („Hi Chrissi, …", „Probier mal …")
- **Akzentfarbe:** Petrol/Türkis **#0F766E** (final). Im CSS als `--accent` zentral definiert.
- **ChatGPT-Bezug:** Screenshots werden von Chrissi selbst aus ihrem ChatGPT-Account gemacht. Programm liefert **Platzhalter-Bilder** (neutrale Boxen mit Beschriftung „Hier kommt dein Screenshot der Seitenleiste hin" etc.); Dateipfade in `assets/screenshots/` sind dokumentiert, sodass die Bilder später ohne Code-Änderung einfach ersetzt werden können.
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

### Lektion 3 — Du als Profi: Datenschutz souverän handhaben
**Ziel:** Chrissi merkt: Datenschutz ist nichts Neues, was sie *bremst*, sondern eine Profi-Haltung, die sie als pädagogische Fachkraft schon hat. Wir übertragen sie nur aufs neue Werkzeug.

**Tonalität:** Ermutigend, nicht warnend. Keine Schock-Liste, keine juristische Drohgebärde. Stattdessen: „Du kannst das längst — hier ist die Übersetzung."

**Eröffnung (Intro-HTML):**
> „Hi Chrissi, du gehst täglich mit sensiblen Infos um — Beobachtungsbögen, Familiengeschichten, Entwicklungsstände. Da hast du längst ein Bauchgefühl: ‚das geht / das geht nicht'. Genau dieses Gefühl ist auch hier dein bester Kompass. Wir machen das in fünf Minuten."

**Drei Profi-Regeln (statt Verbots-Katalog):**

1. **Echte Namen bleiben draußen.** Statt „Lara M., 4 Jahre, Eltern getrennt" einfach „ein 4-jähriges Kind, dessen Eltern sich kürzlich getrennt haben". Reicht für jeden Prompt — und ist sogar oft *besser*, weil die KI sich dann nicht an einem Namen verzettelt.
2. **Einmal beim Träger nachfragen.** Manche Kitas/Schulen haben klare Hausregeln zu KI. Frag einmal kurz nach — dann weißt du Bescheid und musst nicht jedes Mal überlegen.
3. **Profi-Modus für Berufliches:** Memory aus + „Temporary Chat" (kommt in Lektion 5). Damit ist klar: was du eingibst, wird nicht gespeichert. Wie ein Gespräch, das nach dem Schließen vergessen ist.

**Hintergrund-Info im Aufklappkasten** („Wenn du es genau wissen willst"): Kurze Erklärung, dass ChatGPT Free keinen Auftragsverarbeitungsvertrag (AVV) hat und deshalb für personenbezogene Berufsdaten rechtlich nicht vorgesehen ist. Sachlich, nicht angsteinflößend, aufklappbar — wer mehr wissen will, findet's; wer nicht, scrollt vorbei.

**Übung — `data-decision`:** 5-6 Beispiel-Texte, Chrissi entscheidet pro Text: „Darf so rein / besser anonymisieren / lieber gar nicht". Feedback ermutigend formuliert: „Genau — das hast du längst im Gefühl. Das ist purer Profi-Reflex." Kein „Falsch!", sondern bei Fehl-Antworten: „Schau nochmal hin — was würdest du auch deiner Kollegin nicht über Familie X erzählen?"

**Schlusssatz:**
> „Mit dieser Haltung gehen wir jetzt in deine Erzieher-Praxis. Du hast nichts zu verlieren — nur Werkzeug-Sicherheit zu gewinnen."

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
- **Memory-Feature kennen — Profi-Tipp:** ChatGPT „merkt" sich neuerdings Sachen aus alten Chats („Memory"). Cool für privat („mein Hund heißt Bello"), aber für Berufliches lieber **Temporary Chat** nehmen — das ist wie ein Browser-Inkognito-Tab: nichts wird gemerkt. Wir zeigen kurz, wo der Memory-Schalter liegt und wie du den Temporary Chat startest. Du entscheidest selbst, ob du Memory generell aus haben willst — viele Profis machen das so, ist aber kein Muss.

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
- `assets/screenshots/` — Platzhalter-Bilder mit klaren Beschriftungen ausliefern. Chrissi macht ihre eigenen Screenshots aus ihrem ChatGPT-Account (in Lektion 1) und ersetzt die Platzhalter durch Drag-and-Drop in den Ordner. Konvention: feste Dateinamen wie `01-seitenleiste.png`, `02-eingabefeld.png` etc. — dokumentiert in `assets/screenshots/README.md`.

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
5. Behandelt Berufsdaten als Profi: anonymisiert oder fiktiv, kein „echter Lara M."
6. Hat ihren ersten Elternbrief mit ChatGPT-Hilfe verfasst und ist stolz darauf
7. **Fühlt sich nicht mehr „blöd", wenn was nicht klappt — sondern weiß, an welcher Stellschraube sie drehen kann.**

## Marcos Entscheidungen (V3)

| Punkt | Entscheidung |
|---|---|
| Akzentfarbe | **Petrol #0F766E** final |
| Hauptzielgerät | **iPad Pro 11" Querformat** (Chrissis Hauptarbeitsgerät) |
| Screenshots | **Chrissi macht selbst** — Platzhalter im Programm, einfaches Ersetzen ohne Code-Änderung |
| Lektion 3 Tonalität | **Motivierend, Profi-orientiert** statt Risiko-Schock-Liste |
| Memory-Aus als Erfolgskriterium | **Gestrichen** — bleibt nur als entspannter Tipp in Lektion 5 |
| Reihenfolge Datenschutz | **Bleibt Lektion 3** (vor Praxis, nach Prompting-Grundlagen) — Lektion 2 nutzt fiktive Inhalte, da kommen keine echten Daten ins Spiel |
