# KI-Einmaleins für Chrissi — Design

**Status:** Entwurf zum Review
**Datum:** 2026-05-06
**Repo (geplant):** `marcolemke78-debug/ki-einmaleins`
**URL (geplant):** `marcolemke78-debug.github.io/ki-einmaleins/`

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

Wenn Chrissi sich aktuell „blöd" fühlt, weil ChatGPT enttäuschende Antworten liefert, soll sie nach dem Programm verstanden haben: Es liegt am Werkzeug-Verständnis, nicht an ihr. Das Programm zeigt ihr die wenigen Hebel, die 80 % der Verbesserung bringen.

## Architektur

### Tech-Stack
- **Vanilla HTML / CSS / JS**, kein Framework, kein Build-Tool
- Basiert auf der etablierten Lernprogramm-Blaupause (`~/.claude/memory/lernprogramm_blueprint.md`)
- Referenz-Implementierung: `~/Desktop/LE_C_Claude_Code/app/`
- Fortschritt persistent in `localStorage`
- **Deployment:** GitHub Pages (öffentliches Repo)
- **Geräte:** Hauptzielgerät Laptop/Browser. Vor Fertigmeldung iPad/iOS-Safari-Kompatibilität prüfen. Touch-Targets ≥ 44 px.

### Tonalität & Look
- **Anrede:** per du, persönlich („Hi Chrissi, …", „Probier mal …")
- **Akzentfarbe:** Vorschlag warmes Petrol/Türkis (#0F766E) als Alternative zum Standard-Blau — wirkt moderner und weniger nüchtern. Im Review entscheiden.
- **ChatGPT-Bezug:** Screenshots aus echtem ChatGPT-Interface (Free), nicht stilisiert
- **Sprachstil:** wie ein verständnisvoller Kollege erklären würde — keine Fachsprache ohne Übersetzung („Modell" → „die KI"), aber auch nicht kindisch

### Datenschutz in den Beispielen
- **Keine echten Namen** von Kindern, Eltern, Kolleginnen oder Einrichtungen
- Beispiele nutzen Fantasie-Familien (z. B. „Familie Müller", „Bello der Hund", „Kindergruppe Sonnenblume")
- Datenschutz wird in Lektion 8 explizit thematisiert

## Lektionsstruktur (Abweichung von der Blaupause)

Statt der klassischen 3-Phasen-Struktur (Erklärung → Beispiel → Übung) nutzt jede Lektion ein **„Cockpit"-Format**, das Chrissi neben dem ChatGPT-Tab geöffnet hält:

| Phase | Inhalt | Dauer |
|---|---|---|
| 1. **Worum geht's** | Kurze Erklärung, max. 1 Bildschirm Text + 1 Bild | 2-3 Min |
| 2. **Mission 1 — Vormachen** | Vorgegebener Prompt mit Copy-Button. „Klick, geh zu ChatGPT, schau was passiert." | 3-5 Min |
| 3. **Was ist passiert?** | 1-2 Reflexions-Multiple-Choice zur Antwort | 1-2 Min |
| 4. **Mission 2 — Twist** | Zweite Mission mit Variation, sie sieht den Unterschied | 3-5 Min |
| 5. **Eigene Anwendung** | Aufgabe ohne Vorlage, sie schreibt selbst, App gibt Hinweise | 5 Min |

**Pro Lektion 2-4 Live-Missionen statt 1 Übungsblock.**

## Lektionen (10 total)

### Lektion 0 — Erste 5 Minuten
**Ziel:** Sofort-Erfolgserlebnis vor jeder Theorie. Berührungsangst auf null.
- Eine einzige Mission: Spaß-Prompt kopieren, in ChatGPT einfügen, Ergebnis anschauen
- Beispiel-Prompt: „Schreib ein 4-zeiliges Gedicht über meinen Hund Bello, der Socken klaut."
- Reflexion: „Wie schnell ging das?" + „Hat dich was überrascht?"

### Lektion 1 — Was ist diese KI eigentlich?
**Ziel:** Werkzeug-Verständnis aufbauen.
- KI als „extrem trainierter Text-Vorhersage-Apparat" — kein denkendes Wesen
- 5 einfache Bilder/Analogien (z. B. Autovervollständigung am Handy, nur viel mächtiger)
- Mini-Historie: Nov 2022 ChatGPT-Launch → 2024 GPT-4o (sieht & spricht) → 2025/26 Agenten (klicken selbst)
- Reflexions-Quiz: „Was kann eine KI nicht?" (Multiple Choice)

### Lektion 2 — Das Chat-Fenster verstehen
**Ziel:** Interface-Sicherheit.
- Tour durch die ChatGPT-Web-Oberfläche: Eingabefeld, Seitenleiste, Neuer Chat, Modell-Auswahl, Büroklammer für Dateien, Profil-Menü
- Mobile App vs. Browser kurz erwähnt
- Mission: „Finde diese 5 Knöpfe in deinem ChatGPT" (Checkliste)

### Lektion 3 — Prompten Grundlagen: Die 4 Hebel
**Ziel:** Aha-Moment „Prompting ist erlernbar".
- Vier Hebel: **Rolle** („Du bist Erzieherin…") · **Aufgabe** (was genau) · **Kontext** (für wen, welches Alter, welche Situation) · **Format** (Liste, Tabelle, kurzer Text)
- Mission 1: Schlechter Prompt („Schreib was über Geburtstage") → enttäuschende Antwort
- Mission 2: Gleicher Inhalt mit allen 4 Hebeln → wow-Effekt
- Mission 3: Sie baut selbst einen Prompt nach dem Schema (mit Bausteine-Sortier-Übung)

### Lektion 4 — Prompten in der Praxis: Erzieher-Alltag
**Ziel:** Transfer in den eigenen Beruf.
Konkrete Missionen aus Chrissis Welt:
- Elternbrief verfassen (Krankheits-Info, Sommerfest-Einladung)
- Sprachförderung-Idee zu einem Bilderbuch
- Beobachtungsbogen-Notizen umformulieren („von Stichpunkten in fließenden Text")
- Reflexion zu einer Beobachtung schreiben lassen
- Übersetzung in einfache Sprache für Eltern mit wenig Deutschkenntnissen

### Lektion 5 — Chat-Hygiene & Chat-Verwaltung
**Ziel:** Endlos-Chats verhindern, Übersicht behalten.

**Teil A — Wann neuer Chat?**
- Kontextfenster-Konzept als „Kurzzeitgedächtnis": je voller, desto schlechter die Antworten
- Mission: In einem alten, vollen Chat (oder bewusst überladen mit 6-8 Themen-Wechseln) eine neue Frage stellen → Antwort beobachten. Dann neuer Chat, gleiche Frage → Unterschied spüren.
- Regel: Ein Thema = ein Chat

**Teil B — Chats verwalten**
- Chat umbenennen (Klick auf den Titel)
- Chat löschen (3-Punkte-Menü)
- Archivieren
- Chats in der Seitenleiste finden
- Memory von ChatGPT verstehen und ggf. Erinnerungen löschen

### Lektion 6 — Mit Dateien arbeiten
**Ziel:** Pain-Point-Auflösung.
- Mission 1: PDF eines Elternbriefs hochladen → „fass zusammen"
- Mission 2: „Übersetze in einfache Sprache"
- Mission 3: „Schreib mir basierend auf diesem PDF eine Antwort"
- Mission 4: Word-Dokument hochladen, verbessern lassen, wieder rauskopieren
- Hinweis zu Free-Limits (begrenzte Datei-Uploads pro Tag)

### Lektion 7 — Bilder ins Spiel bringen
**Ziel:** Multimodalität als Erzieher-Werkzeug.
- Mission 1: Foto eines Bilderbuchs hochladen → „Was ist hier zu sehen?"
- Mission 2: „Erkläre die Szene für ein 4-jähriges Kind."
- Mission 3: „Beschreibe das Bild auf Türkisch / Englisch / Arabisch."
- Mission 4: Foto eines handgeschriebenen Zettels → „Tippe das ab."
- Anwendungsfälle für Sprachförderung sind hier zentral

### Lektion 8 — Was die KI nicht kann + Datenschutz
**Ziel:** Realismus + Schutz vor Berufsrisiken.

**Teil A — Halluzinationen**
- Mission: „Frag ChatGPT nach dem Buch ‚Der blaue Wal von Klaus Müller'." Sie sieht live, wie selbstbewusst etwas erfunden wird.
- Halluzination-Markier-Übung: Eine Beispiel-Antwort lesen, problematische Stellen anklicken
- Regel: Bei Fakten immer prüfen — KI ist gut für Formulierungen, gefährlich für Wahrheiten

**Teil B — Datenschutz**
- Was nie eingeben: echte Kindernamen, Klarnamen, Beobachtungsbögen mit echten Daten, Adressen, Geburtsdaten
- Pseudonymisierung als Workaround („Kind A", „Familie X")
- Hinweis: ChatGPT trainiert auf Eingaben (außer Opt-Out)

### Lektion 9 — Was es noch gibt
**Ziel:** Ausblick ohne Überforderung.
- Kurz: **Claude** (gut für lange Texte, höflicher), **Gemini** (Google-Anbindung), **Copilot** (Microsoft)
- Was kostet was, wann lohnt ChatGPT Plus
- Was sind Agenten („die KI klickt selber")
- Empfehlung: Erstmal bei ChatGPT bleiben, in 6 Monaten neu schauen

## Übungstypen

| Typ | Zweck | Status |
|---|---|---|
| `live-mission` | Prompt mit Copy-Button + ChatGPT-Direktlink + Reflexions-Anker | **Neu** |
| `multiple-choice` | Reflexion nach Mission, Theorie-Check | Existiert |
| `prompt-comparison` | Zwei Prompts nebeneinander, „welcher ist besser und warum" | **Neu** |
| `hallucination-mark` | Antworttext lesen, problematische Stellen anklicken | **Neu** |
| `prompt-builder` | Bausteine (Rolle/Aufgabe/Kontext/Format) per Klick zu Prompt zusammensetzen | **Neu** |
| `interface-find` | Screenshot mit Hotspots — den richtigen Knopf finden | **Neu** |

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
- `js/lessons-00-erste-5-min.js` bis `js/lessons-09-was-noch-gibt.js` — Lektionsdaten
- Copy-Button-Komponente (Clipboard-API + visuelles Feedback „Kopiert!")
- Optional: Direkt-Link zu `chatgpt.com/?q=<urlencoded prompt>` (zu prüfen, ob ChatGPT diesen Parameter unterstützt — falls nicht, reiner Copy-Button)
- `assets/screenshots/` — echte ChatGPT-Screenshots für Interface-Touren (von Marco zu liefern oder mit Chrissis Account zu erstellen)

### Neue Lektionsdaten-Struktur
```javascript
{
  id: NUMBER,
  title: 'STRING',
  intro: { html: 'HTML-STRING' },           // Phase 1: Worum geht's
  missions: [                                // Phasen 2 + 4: Live-Missionen
    {
      type: 'live-mission',
      title: 'STRING',
      promptToCopy: 'STRING',
      instruction: 'HTML-STRING',
      reflection: { type: 'multiple-choice', ... }
    }
  ],
  practice: [                                // Phase 5: Eigene Anwendung
    { type: 'prompt-builder', ... }
  ]
}
```

## Was bewusst NICHT drin ist (YAGNI)
- **API-Nutzung / Programmierung** — Chrissi nutzt nur die Web-Oberfläche
- **Custom GPTs / GPT Store** — Plus-only, Overload für Free-Nutzerin
- **DALL-E / Bildgenerierung** — in Free begrenzt, kein Erzieher-Kernuse-case (kann später als 11. Lektion ergänzt werden)
- **Voice Mode** — App-only, nicht im Free-Web
- **Plugin-Konzepte** — überholt
- **Andere Tools im Detail** — nur in Lektion 9 als Ausblick

## Erfolgskriterien
Chrissi nach dem Programm:
1. Schreibt Prompts mit Rolle/Aufgabe/Kontext/Format, ohne nachzudenken
2. Fängt einen neuen Chat an, wenn ein Thema wechselt — automatisch
3. Lädt PDFs hoch und arbeitet damit selbstverständlich
4. Erkennt Halluzinationen und prüft Faktenangaben
5. Gibt keine echten Kindernamen mehr in ChatGPT ein
6. Hat ihren ersten Elternbrief mit ChatGPT-Hilfe verfasst und ist stolz darauf

## Offene Punkte für Marco-Review
1. **Akzentfarbe:** Petrol (#0F766E)? Oder lieber im Standard-Blau bleiben? Oder etwas anderes?
2. **Screenshots:** Wer macht die ChatGPT-Screenshots? Du, oder soll Chrissi das spielerisch im Programm tun (eigene Oberfläche fotografieren)?
3. **Direkt-Link zu ChatGPT mit vorausgefülltem Prompt:** Soll ich vorab prüfen, ob `chatgpt.com/?q=...` funktioniert, oder reicht reiner Copy-Button?
4. **Lektion 7 (Bilder):** Free hat seit 2024 Vision dabei — soll ich vor dem Implementieren kurz validieren, dass das in Free wirklich nutzbar ist (Limits etc.)?
5. **DALL-E-Bonus-Lektion:** Drauflegen oder bewusst weglassen?
