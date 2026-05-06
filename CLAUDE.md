# KI-Einmaleins für Chrissi — Projekt-Kontext

## Worum geht's

Web-Lernprogramm, das Chrissi (Marcos Frau, 48, Erzieherin + Sprachförderkraft, ChatGPT-Free-Nutzerin) den souveränen Umgang mit ChatGPT vermittelt. Zielgerät: **iPad Pro 11" Querformat**.

**Live:** https://marcolemke78-debug.github.io/ki-einmaleins/
**Repo:** https://github.com/marcolemke78-debug/ki-einmaleins
**Lokaler Test:** `cd ~/Desktop/ki-einmaleins && python3 -m http.server 8765` → http://localhost:8765/

## Stand 2026-05-06

Projekt ist deployed und mit Chrissi am iPad erfolgreich getestet. 30 Commits auf `main`. Drei Reviewer-Runs (Inhalt, Code-Quality, Faktencheck) sind durchgelaufen, alle 🔴 Kritisch + 🟡 Wichtig-Befunde gefixt.

## Architektur

- Vanilla HTML / CSS / JS, **kein Framework, kein Build-Tool, kein npm**
- Fortschritt in localStorage (`Progress`-Modul)
- Petrol-Akzentfarbe `#0F766E`
- Deployment via GitHub Pages (Pflicht-Test in iPad-Safari)

## Dateistruktur

```
index.html
css/style.css                            # alles CSS
js/app.js                                # Navigation, Sidebar, LESSONS-Array
js/progress.js                           # localStorage-Persistenz
js/renderer.js                           # Lektions-Layout, Phasen-Tabs, Lernpfad
js/exercises.js                          # 9 Übungstypen + Renderer
js/lessons-00-erste-5-min.js             # Lektion 0
js/lessons-01-chat-fenster.js            # Lektion 1
js/lessons-02-prompten.js                # Lektion 2
js/lessons-03-datenschutz.js             # Lektion 3
js/lessons-04-praxis.js                  # Lektion 4
js/lessons-05-chat-hygiene.js            # Lektion 5
js/lessons-06-dateien.js                 # Lektion 6
js/lessons-07-bilder.js                  # Lektion 7
js/lessons-08-halluzinationen.js         # Lektion 8
js/lessons-09-was-noch-gibt.js           # Lektion 9
assets/illustrations/                    # SVG-Schemas (z.B. ChatGPT-Interface)
assets/screenshots/                      # Platzhalter, Chrissi ergänzt eigene
docs/superpowers/specs/                  # Design-Spec V3 — Quelle der Wahrheit für Inhalte
docs/superpowers/plans/                  # 27-Task-Implementation-Plan
```

## Übungstypen (in `js/exercises.js`)

| Typ | Datenfelder |
|---|---|
| `multiple-choice` | `question`, `options`, `correct`, `explanation`, optional `subjective: true` |
| `prompt-comparison` | zwei `prompts`, `correct`, `explanation` |
| `prompt-builder` | `slots: [{label, options, correct}]` |
| `interface-find` | `image`, `targets: [{x,y,w,h,label}]`, optional `placeholder` |
| `hallucination-mark` | `sentences`, `problematic` (Indices) |
| `data-decision` | `cases: [{text, correct: 'rein'\|'anonymisieren'\|'gar-nicht', explanation}]` |
| `self-checklist` | `items[]`, optional `note` |
| `prompt-toggle-demo` | `baseText`, `levers: [{label, snippet}]` — Live-Hebel-Demo |
| `finale-card` | `title`, `body`, `signature` — Abschluss-Karte mit 4 Hebeln |

Lektionsdaten-Schema:
```javascript
window.LESSON_XX = {
  id: NUMBER,
  title: 'Lektion X — Titel',
  intro: { html: '...' },        // Phase 1, immer
  missions: [...],                // Phase 2/4, optional — Live-Missionen
  practice: [...]                 // Phase 5, optional — eigene Anwendung
};
```

## Wichtige Konventionen

- **Anrede an Chrissi:** Du-Form, persönlich, herzlich. Kein „Du musst", kein juristisches Drohgebärden in Lektion 3.
- **Pädagogische Regel:** Bei subjektiven Reflexionen IMMER `subjective: true` setzen — sonst wird Chrissis ehrliche Antwort als „falsch" markiert.
- **Datenschutz:** ALLE Beispiele mit fiktiven Familien (Familie Müller, Bello, Sonnenblumen-Gruppe). Keine echten Namen.
- **Anführungszeichen:** Im Code (HTML-Strings, JS) **nur gerade** Quotes (`"`, `'`). Pre-commit-Hook blockiert typografische („ " ' ').
- **Commits:** Deutsch, lowercase Prefix (`feat:`, `fix:`, `docs:`, `chore:`). Co-author-Footer mit Claude.
- **Em-dashes vermeiden** in Außentexten (Marcos globale Regel).
- **iPad-First:** Layout auf 1194×834 optimiert. Touch-Targets ≥ 44 px. `100dvh` mit `100vh`-Fallback.
- **Tageslimit ChatGPT Free:** 3 Datei-Uploads / 24h, max. 2 Bilder. Lektionen 6 + 7 explizit auf zwei Tage verteilen.

## Häufige Aufgaben

**Neue Lektion / Inhalt erweitern:**
- Datei `js/lessons-XX-*.js` editieren, Schema oben einhalten.
- Spec in `docs/superpowers/specs/...design.md` ist Quelle der Wahrheit.

**Neuer Übungstyp:**
- In `js/exercises.js` `render_NAME` + `bindNAME` ergänzen, in `bindAll` registrieren.
- CSS-Klassen in `css/style.css` ans Ende anhängen.

**Screenshots ergänzen:**
- Chrissi (oder Marco) macht echte ChatGPT-Screenshots, legt sie nach `assets/screenshots/` mit den in `assets/screenshots/README.md` dokumentierten Dateinamen.
- Dann: `git add assets/screenshots/ && git commit -m "feat: echte chatgpt-screenshots ergaenzt" && git push`.

**Live-Stand prüfen:**
```bash
gh api repos/marcolemke78-debug/ki-einmaleins/pages/builds/latest | python3 -c "import sys,json; d=json.load(sys.stdin); print('Pages:', d.get('status'), '| commit:', (d.get('commit') or '')[:7])"
```

## Faktencheck-Stand Mai 2026

- ChatGPT Free Default: **GPT-5.5 Instant** + Thinking-Toggle (kein Modell-Dropdown)
- Wissens-Cutoff Free: **August 2025**
- ChatGPT Plus: **23 €/Monat** (Deutschland)
- Memory in Free: **abgespeckte Variante**, „Temporary Chat" verfügbar
- Datei-Limit Free: **3/24h, max. 2 Bilder**
- AVV: ChatGPT Free hat **keinen** AVV → für berufliche personenbezogene Daten ungeeignet

Wenn Faktenstand sich ändert, in den jeweiligen Lektionsdateien anpassen.

## Backlog-Notizen

- Hard-coded Farben (`#F0FDF4`, `#FEF2F2` etc.) könnten in Custom Properties migriert werden — wäre Maintainability-Verbesserung
- DALL-E-Bonus-Lektion bewusst weggelassen — kann als Lektion 10 ergänzt werden, falls Chrissi das später will
