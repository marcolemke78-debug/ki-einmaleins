# KI-Einmaleins Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Web-Lernprogramm für Chrissi (Erzieherin, 48, ChatGPT-Free-Nutzerin), das ihr in 10 Lektionen einen souveränen Umgang mit ChatGPT vermittelt — mit Live-Missionen direkt im echten ChatGPT statt Trockenübungen.

**Architecture:** Vanilla HTML/CSS/JS ohne Framework und ohne Build-Tool, basiert auf der etablierten Lernprogramm-Blaupause. iPad-First (Pro 11" Querformat), GitHub Pages Deployment, Fortschritt in localStorage. Pro Lektion: Cockpit-Format mit Erklärung → Live-Mission mit Copy-Button → Reflexion → Twist → Eigene Anwendung.

**Tech Stack:** HTML5, CSS3 (Custom Properties, Flex/Grid), ES6 JavaScript, Clipboard API, localStorage, GitHub Pages. Kein Framework, kein Build-Tool, kein npm.

**Spec:** `docs/superpowers/specs/2026-05-06-ki-einmaleins-design.md` (V3)

**Test-Strategie:** Reine Vanilla-JS-Frontend-App ohne Test-Framework. Pro Task ein konkreter manueller **Browser-Akzeptanztest** (Schritte + erwartetes Verhalten), der vor dem Commit bestanden werden muss. Pflicht-Test in iPad-Safari vor Phase 4.

---

## File Structure

```
ki-einmaleins/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js                          # Navigation, LESSONS-Konstante, Init
│   ├── progress.js                     # localStorage-Fortschritt
│   ├── renderer.js                     # Lektions-Renderer mit Phasen
│   ├── exercises.js                    # Alle Übungstypen
│   ├── lessons-00-erste-5-min.js
│   ├── lessons-01-chat-fenster.js
│   ├── lessons-02-prompten.js
│   ├── lessons-03-datenschutz.js
│   ├── lessons-04-praxis.js
│   ├── lessons-05-chat-hygiene.js
│   ├── lessons-06-dateien.js
│   ├── lessons-07-bilder.js
│   ├── lessons-08-halluzinationen.js
│   └── lessons-09-was-noch-gibt.js
├── assets/
│   ├── screenshots/                    # Platzhalter, Chrissi ersetzt
│   │   └── README.md
│   └── illustrations/                  # SVGs für Lektion 1, Mini-Historie etc.
└── docs/superpowers/                   # bereits vorhanden
    ├── specs/
    └── plans/
```

**Verantwortlichkeiten:**
- `index.html` — Skeleton, Sidebar, Hauptbereich, Skript-Imports
- `css/style.css` — komplettes Styling, Petrol-Akzent, iPad-First
- `js/app.js` — LESSONS-Array (importiert aus den 10 Lektionsdateien), Navigation, Init
- `js/progress.js` — Fortschritt lesen/schreiben/zurücksetzen
- `js/renderer.js` — Lektions-Layout (Phasen-Tabs Worum geht's / Mission / Reflexion / Twist / Eigene Anwendung)
- `js/exercises.js` — Renderer für 8 Übungstypen
- `js/lessons-XX-*.js` — Lektionsdaten, jeweils `window.LESSON_XX = {...}`

---

## Phase 1 — Grundgerüst (Tasks 1-5)

### Task 1: Projekt-Skeleton + leere Dateien

**Files:**
- Create: `index.html`, `css/style.css`, `js/app.js`, `js/progress.js`, `js/renderer.js`, `js/exercises.js`, `js/lessons-00-erste-5-min.js` … `js/lessons-09-was-noch-gibt.js`, `assets/screenshots/README.md`

- [ ] **Step 1: index.html mit Skeleton anlegen**

```html
<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>KI-Einmaleins für Chrissi</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <aside class="sidebar" id="sidebar">
    <header class="sidebar__header">
      <h1>KI-Einmaleins</h1>
      <p class="sidebar__subtitle">Hi Chrissi 👋</p>
    </header>
    <div class="progress">
      <div class="progress__bar" id="progress-bar"></div>
    </div>
    <nav class="lesson-list" id="lesson-list"></nav>
    <button class="reset-btn" id="reset-btn" type="button">Fortschritt zurücksetzen</button>
  </aside>
  <main class="main" id="main">
    <p class="loading">Lade …</p>
  </main>

  <script src="js/lessons-00-erste-5-min.js"></script>
  <script src="js/lessons-01-chat-fenster.js"></script>
  <script src="js/lessons-02-prompten.js"></script>
  <script src="js/lessons-03-datenschutz.js"></script>
  <script src="js/lessons-04-praxis.js"></script>
  <script src="js/lessons-05-chat-hygiene.js"></script>
  <script src="js/lessons-06-dateien.js"></script>
  <script src="js/lessons-07-bilder.js"></script>
  <script src="js/lessons-08-halluzinationen.js"></script>
  <script src="js/lessons-09-was-noch-gibt.js"></script>
  <script src="js/progress.js"></script>
  <script src="js/exercises.js"></script>
  <script src="js/renderer.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
```

- [ ] **Step 2: Stub-Inhalt in jede Lektionsdatei**

Pro Datei (Beispiel `js/lessons-00-erste-5-min.js`):

```javascript
window.LESSON_00 = {
  id: 0,
  title: 'Lektion 0 — Erste 5 Minuten',
  intro: { html: '<p>Stub.</p>' }
};
```

Analog für 01–09 mit angepasstem Titel.

- [ ] **Step 3: Stub-Inhalt in `js/app.js`**

```javascript
const LESSONS = [
  window.LESSON_00, window.LESSON_01, window.LESSON_02, window.LESSON_03,
  window.LESSON_04, window.LESSON_05, window.LESSON_06, window.LESSON_07,
  window.LESSON_08, window.LESSON_09
];
console.log('Geladene Lektionen:', LESSONS.length);
```

- [ ] **Step 4: `assets/screenshots/README.md`**

```markdown
# Screenshots

Dieser Ordner enthält Platzhalter-Bilder. Chrissi (oder Marco) ersetzt sie durch eigene
Screenshots aus dem realen ChatGPT-Konto.

Erforderliche Dateinamen (alle 16:10 oder 4:3, PNG, max. 1600 px breit):

- `01-seitenleiste.png` — Linke Seitenleiste mit Chat-Liste
- `01-eingabefeld.png` — Eingabefeld + Mikro + Büroklammer
- `01-modell-toggle.png` — Standard-Modell + Thinking-Toggle
- `01-profilmenu.png` — Profil-Menü (Settings)
- `05-chat-umbenennen.png` — Chat-Titel im Edit-Modus
- `05-temporary-chat.png` — Temporary-Chat-Symbol
- `05-memory-settings.png` — Memory-Schalter in den Settings
- `06-buroklammer.png` — Datei-Upload-Button
- `07-bild-upload.png` — Bild-Upload-Vorschau

Solange eine Datei fehlt, zeigt die App einen beschrifteten Platzhalter.
```

- [ ] **Step 5: Manuelle Akzeptanz**

Öffne `index.html` im Browser. Erwartet:
- Sidebar links mit „KI-Einmaleins" und „Hi Chrissi 👋"
- Hauptbereich zeigt „Lade …"
- DevTools-Konsole zeigt: `Geladene Lektionen: 10`
- Keine JS-Fehler

- [ ] **Step 6: Commit**

```bash
git add index.html css/ js/ assets/
git commit -m "feat: projekt-skeleton mit 10 lektions-stubs"
```

---

### Task 2: CSS-System (iPad-First, Petrol-Akzent)

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Komplettes Stylesheet schreiben**

```css
:root {
  --accent: #0F766E;
  --accent-dark: #115E59;
  --accent-light: #99F6E4;
  --bg: #FAFAF9;
  --surface: #FFFFFF;
  --text: #1F2937;
  --text-muted: #6B7280;
  --border: #E5E7EB;
  --success: #16A34A;
  --warning: #D97706;
  --error: #DC2626;
  --radius: 12px;
  --shadow: 0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04);
  --tap-min: 44px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 48px;
  --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  padding: 0;
  font-family: var(--font);
  font-size: 17px;
  line-height: 1.55;
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
}

body {
  display: flex;
  min-height: 100vh;
}

/* === Sidebar === */
.sidebar {
  width: 320px;
  flex-shrink: 0;
  background: var(--surface);
  border-right: 1px solid var(--border);
  padding: var(--space-4) var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

.sidebar__header h1 {
  font-size: 22px;
  margin: 0 0 var(--space-1);
  color: var(--accent);
}

.sidebar__subtitle {
  margin: 0;
  color: var(--text-muted);
  font-size: 14px;
}

.progress {
  height: 8px;
  background: var(--border);
  border-radius: 4px;
  overflow: hidden;
}

.progress__bar {
  height: 100%;
  width: 0%;
  background: var(--accent);
  transition: width .3s ease;
}

.lesson-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.lesson-link {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  min-height: var(--tap-min);
  border-radius: var(--radius);
  color: var(--text);
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  border: 0;
  text-align: left;
  font: inherit;
  font-size: 15px;
}

.lesson-link:hover { background: rgba(15,118,110,0.06); }
.lesson-link.is-active { background: var(--accent-light); color: var(--accent-dark); font-weight: 600; }
.lesson-link__check {
  width: 20px; height: 20px; flex-shrink: 0;
  border-radius: 50%; border: 2px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-size: 12px;
}
.lesson-link.is-done .lesson-link__check {
  border-color: var(--success); color: white; background: var(--success);
}

.reset-btn {
  margin-top: auto;
  padding: var(--space-2) var(--space-3);
  background: transparent;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text-muted);
  cursor: pointer;
  font: inherit;
  min-height: var(--tap-min);
}
.reset-btn:hover { color: var(--error); border-color: var(--error); }

/* === Main === */
.main {
  flex: 1;
  padding: var(--space-5) var(--space-6);
  max-width: 880px;
}
.loading { color: var(--text-muted); }

.lesson-title {
  font-size: 30px;
  margin: 0 0 var(--space-4);
  color: var(--accent-dark);
}

.phase-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin-bottom: var(--space-4);
  border-bottom: 1px solid var(--border);
}
.phase-tab {
  padding: var(--space-2) var(--space-3);
  border: 0;
  background: transparent;
  color: var(--text-muted);
  font: inherit;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  min-height: var(--tap-min);
}
.phase-tab.is-active { color: var(--accent); border-bottom-color: var(--accent); font-weight: 600; }

.phase-content { display: none; }
.phase-content.is-active { display: block; }

.phase-content h2 {
  font-size: 22px;
  margin-top: 0;
  color: var(--accent-dark);
}

/* === Mission/Karte === */
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-4);
  margin-bottom: var(--space-4);
  box-shadow: var(--shadow);
}

.card--mission {
  border-left: 4px solid var(--accent);
}

.card__title {
  font-size: 18px;
  margin: 0 0 var(--space-2);
}

.card__instruction {
  color: var(--text);
  margin-bottom: var(--space-3);
}

/* === Copy-Button === */
.prompt-box {
  background: #F3F4F6;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-3);
  font-family: ui-monospace, 'SF Mono', monospace;
  font-size: 14px;
  white-space: pre-wrap;
  position: relative;
  margin-bottom: var(--space-3);
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  background: var(--accent);
  color: white;
  border: 0;
  border-radius: var(--radius);
  padding: 12px 20px;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  min-height: var(--tap-min);
}
.copy-btn:hover { background: var(--accent-dark); }
.copy-btn.is-copied { background: var(--success); }

.copy-hint {
  font-size: 14px;
  color: var(--text-muted);
  margin-top: var(--space-2);
}

/* === Buttons generisch === */
.btn {
  display: inline-block;
  padding: 12px 20px;
  background: var(--accent);
  color: white;
  border: 0;
  border-radius: var(--radius);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  min-height: var(--tap-min);
}
.btn--ghost { background: transparent; color: var(--accent); border: 1px solid var(--accent); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* === Multiple-Choice === */
.choice {
  display: block;
  width: 100%;
  text-align: left;
  padding: var(--space-3);
  margin-bottom: var(--space-2);
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  font: inherit;
  cursor: pointer;
  min-height: var(--tap-min);
}
.choice:hover { border-color: var(--accent); }
.choice.is-correct { border-color: var(--success); background: #F0FDF4; }
.choice.is-wrong { border-color: var(--error); background: #FEF2F2; }
.feedback {
  padding: var(--space-3);
  border-radius: var(--radius);
  margin-top: var(--space-2);
  font-size: 15px;
}
.feedback--correct { background: #F0FDF4; color: var(--success); }
.feedback--wrong { background: #FEF2F2; color: var(--error); }

/* === Aufklappkasten === */
details.expand {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-3);
  margin: var(--space-3) 0;
}
details.expand > summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--accent);
}

/* === Platzhalter für Screenshots === */
.screenshot-placeholder {
  background: #F3F4F6;
  border: 2px dashed var(--border);
  border-radius: var(--radius);
  padding: var(--space-5);
  color: var(--text-muted);
  text-align: center;
  font-style: italic;
  margin: var(--space-3) 0;
}

/* === iPad: Querformat als Hauptlayout === */
@media (min-width: 1024px) {
  .main { padding: var(--space-6); }
}

/* === iPad: Hochformat & kleine Tablets === */
@media (max-width: 1023px) {
  body { flex-direction: column; }
  .sidebar { width: 100%; height: auto; position: static; }
  .lesson-list { display: grid; grid-template-columns: repeat(2, 1fr); }
  .main { padding: var(--space-4); max-width: none; }
}

/* === iPhone === */
@media (max-width: 600px) {
  .lesson-list { grid-template-columns: 1fr; }
  html, body { font-size: 16px; }
}
```

- [ ] **Step 2: Manuelle Akzeptanz**

Browser auf:
- Desktop-Auflösung 1280×800: Sidebar links 320 px, Hauptbereich rechts
- Browser-DevTools auf iPad Pro 11" Querformat (1194×834) simulieren: Sidebar bleibt links
- Auf iPad-Hochformat (834×1194): Sidebar wird oben, Lektionen 2-spaltig
- iPhone 12 (390×844): Sidebar oben, Lektionen 1-spaltig

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: css-system mit petrol-akzent und ipad-first layout"
```

---

### Task 3: `js/progress.js` — localStorage-Fortschritt

**Files:**
- Modify: `js/progress.js`

- [ ] **Step 1: Implementation**

```javascript
const PROGRESS_KEY = 'ki-einmaleins:progress:v1';

const Progress = {
  read() {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY);
      return raw ? JSON.parse(raw) : { lessonsDone: [], lastLesson: null };
    } catch (e) {
      console.warn('Progress.read fehlgeschlagen', e);
      return { lessonsDone: [], lastLesson: null };
    }
  },
  write(state) {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Progress.write fehlgeschlagen', e);
    }
  },
  markDone(lessonId) {
    const s = Progress.read();
    if (!s.lessonsDone.includes(lessonId)) s.lessonsDone.push(lessonId);
    Progress.write(s);
  },
  isDone(lessonId) {
    return Progress.read().lessonsDone.includes(lessonId);
  },
  setLast(lessonId) {
    const s = Progress.read();
    s.lastLesson = lessonId;
    Progress.write(s);
  },
  getLast() {
    return Progress.read().lastLesson;
  },
  reset() {
    localStorage.removeItem(PROGRESS_KEY);
  },
  percentage(totalLessons) {
    return Math.round((Progress.read().lessonsDone.length / totalLessons) * 100);
  }
};

window.Progress = Progress;
```

- [ ] **Step 2: Manuelle Akzeptanz (DevTools-Konsole)**

Browser-Konsole im offenen `index.html`:

```javascript
Progress.reset();
Progress.markDone(0);
Progress.markDone(1);
console.log(Progress.read());           // { lessonsDone: [0,1], lastLesson: null }
console.log(Progress.percentage(10));   // 20
Progress.setLast(3);
console.log(Progress.getLast());        // 3
Progress.reset();
console.log(Progress.read());           // { lessonsDone: [], lastLesson: null }
```

- [ ] **Step 3: Commit**

```bash
git add js/progress.js
git commit -m "feat: progress-modul mit localstorage-persistenz"
```

---

### Task 4: `js/app.js` — Navigation, Sidebar-Render, Init

**Files:**
- Modify: `js/app.js`

- [ ] **Step 1: Implementation**

```javascript
const LESSONS = [
  window.LESSON_00, window.LESSON_01, window.LESSON_02, window.LESSON_03,
  window.LESSON_04, window.LESSON_05, window.LESSON_06, window.LESSON_07,
  window.LESSON_08, window.LESSON_09
];

let currentLessonId = null;

function renderSidebar() {
  const list = document.getElementById('lesson-list');
  list.innerHTML = '';
  LESSONS.forEach((lesson) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lesson-link';
    if (Progress.isDone(lesson.id)) btn.classList.add('is-done');
    if (lesson.id === currentLessonId) btn.classList.add('is-active');
    btn.innerHTML = `
      <span class="lesson-link__check">${Progress.isDone(lesson.id) ? '✓' : ''}</span>
      <span class="lesson-link__title">${lesson.title}</span>
    `;
    btn.addEventListener('click', () => navigateTo(lesson.id));
    list.appendChild(btn);
  });
}

function renderProgressBar() {
  const bar = document.getElementById('progress-bar');
  bar.style.width = Progress.percentage(LESSONS.length) + '%';
}

function navigateTo(lessonId) {
  currentLessonId = lessonId;
  Progress.setLast(lessonId);
  Renderer.renderLesson(LESSONS[lessonId]);
  renderSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function init() {
  document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm('Wirklich allen Fortschritt löschen?')) {
      Progress.reset();
      currentLessonId = 0;
      navigateTo(0);
      renderProgressBar();
    }
  });

  const last = Progress.getLast();
  const startId = (last !== null && last !== undefined) ? last : 0;
  navigateTo(startId);
  renderProgressBar();
}

window.addEventListener('DOMContentLoaded', init);
window.markCurrentLessonDone = function () {
  if (currentLessonId === null) return;
  Progress.markDone(currentLessonId);
  renderSidebar();
  renderProgressBar();
};
```

- [ ] **Step 2: Manuelle Akzeptanz**

`index.html` öffnen:
- Sidebar zeigt 10 Lektionen-Buttons
- Erster Klick auf Lektion 1 markiert sie aktiv (Petrol-Hintergrund)
- DevTools-Konsole: `Progress.markDone(0); renderSidebar(); renderProgressBar();` → grünes Häkchen bei Lektion 0, Fortschrittsbalken bei 10%
- Reset-Button öffnet Confirm, dann zurück auf Lektion 0
- Reload behält letzte Lektion

- [ ] **Step 3: Commit**

```bash
git add js/app.js
git commit -m "feat: app-navigation + sidebar-render"
```

---

### Task 5: `js/renderer.js` — Lektions-Layout mit Phasen-Tabs

**Files:**
- Modify: `js/renderer.js`

- [ ] **Step 1: Implementation**

```javascript
const Renderer = {
  renderLesson(lesson) {
    const main = document.getElementById('main');
    if (!lesson) {
      main.innerHTML = '<p>Lektion nicht gefunden.</p>';
      return;
    }
    const phases = Renderer.buildPhases(lesson);
    const tabsHtml = phases.map((p, i) =>
      `<button class="phase-tab${i === 0 ? ' is-active' : ''}" data-phase="${i}" type="button">${p.label}</button>`
    ).join('');
    const contentHtml = phases.map((p, i) =>
      `<section class="phase-content${i === 0 ? ' is-active' : ''}" data-phase="${i}">${p.html}</section>`
    ).join('');

    main.innerHTML = `
      <h1 class="lesson-title">${lesson.title}</h1>
      <div class="phase-tabs">${tabsHtml}</div>
      ${contentHtml}
      <div class="lesson-footer" style="margin-top:32px;">
        <button class="btn" type="button" id="mark-done-btn">Lektion als erledigt markieren ✓</button>
      </div>
    `;

    main.querySelectorAll('.phase-tab').forEach((tab) => {
      tab.addEventListener('click', () => Renderer.activatePhase(tab.dataset.phase));
    });
    document.getElementById('mark-done-btn').addEventListener('click', () => {
      window.markCurrentLessonDone();
      const btn = document.getElementById('mark-done-btn');
      btn.textContent = 'Erledigt — weiter mit der nächsten Lektion';
      btn.classList.add('is-done');
    });

    // Übungen aktivieren (kommt in Task 6)
    if (window.Exercises && window.Exercises.bindAll) window.Exercises.bindAll(main);
  },

  buildPhases(lesson) {
    const phases = [];
    if (lesson.intro) {
      phases.push({ label: 'Worum geht\'s', html: `<div class="phase-intro">${lesson.intro.html}</div>` });
    }
    if (lesson.missions && lesson.missions.length) {
      lesson.missions.forEach((m, idx) => {
        phases.push({
          label: m.title || `Mission ${idx + 1}`,
          html: Renderer.renderMission(m, lesson.id, idx)
        });
      });
    }
    if (lesson.practice && lesson.practice.length) {
      const practiceHtml = lesson.practice.map((p, i) => Renderer.renderExercise(p, `practice-${lesson.id}-${i}`)).join('');
      phases.push({ label: 'Eigene Anwendung', html: practiceHtml });
    }
    return phases;
  },

  activatePhase(phaseIndex) {
    document.querySelectorAll('.phase-tab').forEach((t) => t.classList.toggle('is-active', t.dataset.phase === String(phaseIndex)));
    document.querySelectorAll('.phase-content').forEach((c) => c.classList.toggle('is-active', c.dataset.phase === String(phaseIndex)));
  },

  renderMission(mission, lessonId, idx) {
    const id = `mission-${lessonId}-${idx}`;
    let inner = '';
    if (mission.type === 'live-mission') {
      inner = `
        <div class="card card--mission">
          <h3 class="card__title">${mission.title || 'Mission'}</h3>
          <div class="card__instruction">${mission.instruction || ''}</div>
          ${mission.promptToCopy ? `
            <div class="prompt-box" id="${id}-prompt">${Renderer.escapeHtml(mission.promptToCopy)}</div>
            <button class="copy-btn" type="button" data-copy-from="${id}-prompt">📋 Prompt kopieren</button>
            <p class="copy-hint">Wechsle dann zu deinem ChatGPT-Tab und füge den Text ein.</p>
          ` : ''}
        </div>
        ${mission.reflection ? Renderer.renderExercise(mission.reflection, `${id}-reflection`) : ''}
      `;
    } else {
      inner = Renderer.renderExercise(mission, id);
    }
    return inner;
  },

  renderExercise(exercise, id) {
    if (!window.Exercises || !window.Exercises.render) {
      return `<div class="card">Übung „${exercise.type}" — Renderer fehlt noch (Task 6+).</div>`;
    }
    return window.Exercises.render(exercise, id);
  },

  escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
};

window.Renderer = Renderer;
```

- [ ] **Step 2: Stub `js/exercises.js` damit nichts crasht**

```javascript
window.Exercises = {
  render(exercise, id) {
    return `<div class="card">[Übung „${exercise.type}" Stub – kommt in Task 6+]</div>`;
  },
  bindAll(scope) { /* noop */ }
};
```

- [ ] **Step 3: Lektion 0 mit Mini-Inhalt füllen, damit Phasen sichtbar sind**

`js/lessons-00-erste-5-min.js`:

```javascript
window.LESSON_00 = {
  id: 0,
  title: 'Lektion 0 — Erste 5 Minuten',
  intro: { html: '<p>Hi Chrissi, lass uns direkt loslegen.</p>' },
  missions: [
    {
      type: 'live-mission',
      title: 'Mission: Bello-Gedicht',
      instruction: 'Kopiere den Prompt, geh zu ChatGPT, schau was passiert.',
      promptToCopy: 'Schreib ein 4-zeiliges Gedicht über meinen Hund Bello, der Socken klaut.'
    }
  ]
};
```

- [ ] **Step 4: Manuelle Akzeptanz**

`index.html` öffnen, Lektion 0 anklicken:
- Titel „Lektion 0 — Erste 5 Minuten" wird angezeigt
- Phasen-Tabs: „Worum geht's" und „Mission: Bello-Gedicht"
- Erster Tab aktiv, Klick wechselt zu Mission
- Mission zeigt Prompt-Box + Copy-Button (noch ohne Funktion)
- „Lektion als erledigt markieren" → Häkchen in Sidebar

- [ ] **Step 5: Commit**

```bash
git add js/renderer.js js/exercises.js js/lessons-00-erste-5-min.js
git commit -m "feat: renderer mit phasen-tabs + mission-layout"
```

---

## Phase 2 — Übungstypen (Tasks 6-13)

### Task 6: `exercises.js` Grundgerüst + `multiple-choice` + Copy-Button

**Files:**
- Modify: `js/exercises.js`

- [ ] **Step 1: Implementation**

```javascript
const Exercises = {
  render(exercise, id) {
    const fn = Exercises[`render_${exercise.type.replace(/-/g, '_')}`];
    if (!fn) return `<div class="card">Unbekannter Übungstyp: ${exercise.type}</div>`;
    return fn(exercise, id);
  },

  bindAll(scope) {
    // Copy-Buttons
    scope.querySelectorAll('.copy-btn').forEach((btn) => {
      btn.addEventListener('click', () => Exercises.copyFromTarget(btn));
    });
    // Multiple-Choice
    scope.querySelectorAll('[data-exercise="multiple-choice"]').forEach((root) => {
      Exercises.bindMultipleChoice(root);
    });
  },

  copyFromTarget(btn) {
    const targetId = btn.dataset.copyFrom;
    const el = document.getElementById(targetId);
    if (!el) return;
    const text = el.textContent;
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = '✓ Kopiert!';
      btn.classList.add('is-copied');
      setTimeout(() => {
        btn.textContent = '📋 Prompt kopieren';
        btn.classList.remove('is-copied');
      }, 2200);
    }).catch(() => {
      alert('Kopieren ging nicht. Markier den Text manuell und kopier ihn mit Cmd+C.');
    });
  },

  // === multiple-choice ===
  render_multiple_choice(ex, id) {
    const choices = ex.options.map((opt, i) =>
      `<button class="choice" type="button" data-index="${i}">${opt}</button>`
    ).join('');
    return `
      <div class="card" data-exercise="multiple-choice"
           data-correct="${ex.correct}"
           data-explanation="${Renderer.escapeHtml(ex.explanation || '')}">
        ${ex.question ? `<h3 class="card__title">${ex.question}</h3>` : ''}
        <div class="choices">${choices}</div>
        <div class="feedback" hidden></div>
      </div>
    `;
  },

  bindMultipleChoice(root) {
    const correct = parseInt(root.dataset.correct, 10);
    const explanation = root.dataset.explanation;
    const feedback = root.querySelector('.feedback');
    root.querySelectorAll('.choice').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (root.dataset.locked === 'true') return;
        root.dataset.locked = 'true';
        const i = parseInt(btn.dataset.index, 10);
        if (i === correct) {
          btn.classList.add('is-correct');
          feedback.className = 'feedback feedback--correct';
          feedback.hidden = false;
          feedback.innerHTML = '✓ ' + (explanation || 'Richtig!');
        } else {
          btn.classList.add('is-wrong');
          root.querySelectorAll('.choice')[correct].classList.add('is-correct');
          feedback.className = 'feedback feedback--wrong';
          feedback.hidden = false;
          feedback.innerHTML = explanation || 'Schau nochmal hin.';
        }
      });
    });
  }
};

window.Exercises = Exercises;
```

- [ ] **Step 2: Lektion 0 um Reflexion ergänzen**

In `js/lessons-00-erste-5-min.js`, Mission-Reflection ergänzen:

```javascript
window.LESSON_00 = {
  id: 0,
  title: 'Lektion 0 — Erste 5 Minuten',
  intro: { html: '<p>Hi Chrissi, lass uns direkt loslegen.</p>' },
  missions: [
    {
      type: 'live-mission',
      title: 'Mission: Bello-Gedicht',
      instruction: 'Kopiere den Prompt, geh zu ChatGPT, schau was passiert.',
      promptToCopy: 'Schreib ein 4-zeiliges Gedicht über meinen Hund Bello, der Socken klaut.',
      reflection: {
        type: 'multiple-choice',
        question: 'Wie schnell kam die Antwort?',
        options: ['Super schnell, fast sofort', 'Hat ein bisschen gedauert', 'Ich hab keine Antwort bekommen'],
        correct: 0,
        explanation: 'Genau — KI ist beeindruckend schnell. Das wird gleich noch wichtig.'
      }
    }
  ]
};
```

- [ ] **Step 3: Manuelle Akzeptanz**

- Copy-Button klicken → Text in Zwischenablage, Button-Text wird „✓ Kopiert!"
- Multiple-Choice: richtige Antwort → grün; falsche → rot + richtige wird grün hervorgehoben
- Zweiter Klick passiert nichts mehr (locked)

- [ ] **Step 4: Commit**

```bash
git add js/exercises.js js/lessons-00-erste-5-min.js
git commit -m "feat: exercises-grundgeruest + multiple-choice + copy-button"
```

---

### Task 7: Übungstyp `prompt-comparison`

**Files:**
- Modify: `js/exercises.js`

- [ ] **Step 1: Renderer + Bind**

In `Exercises.bindAll`:
```javascript
scope.querySelectorAll('[data-exercise="prompt-comparison"]').forEach((root) => {
  Exercises.bindPromptComparison(root);
});
```

In `Exercises`:
```javascript
render_prompt_comparison(ex, id) {
  const cards = ex.prompts.map((p, i) =>
    `<button class="prompt-card" type="button" data-index="${i}">
      <div class="prompt-card__label">Prompt ${String.fromCharCode(65 + i)}</div>
      <div class="prompt-card__text">${Renderer.escapeHtml(p)}</div>
    </button>`
  ).join('');
  return `
    <div class="card" data-exercise="prompt-comparison"
         data-correct="${ex.correct}"
         data-explanation="${Renderer.escapeHtml(ex.explanation || '')}">
      ${ex.question ? `<h3 class="card__title">${ex.question}</h3>` : ''}
      <div class="prompt-grid">${cards}</div>
      <div class="feedback" hidden></div>
    </div>
  `;
},

bindPromptComparison(root) {
  const correct = parseInt(root.dataset.correct, 10);
  const explanation = root.dataset.explanation;
  const feedback = root.querySelector('.feedback');
  root.querySelectorAll('.prompt-card').forEach((card) => {
    card.addEventListener('click', () => {
      if (root.dataset.locked === 'true') return;
      root.dataset.locked = 'true';
      const i = parseInt(card.dataset.index, 10);
      const correctEl = root.querySelectorAll('.prompt-card')[correct];
      correctEl.classList.add('is-correct');
      if (i === correct) {
        feedback.className = 'feedback feedback--correct';
        feedback.innerHTML = '✓ ' + (explanation || 'Richtig!');
      } else {
        card.classList.add('is-wrong');
        feedback.className = 'feedback feedback--wrong';
        feedback.innerHTML = explanation || 'Schau dir Prompt ' + String.fromCharCode(65 + correct) + ' nochmal an.';
      }
      feedback.hidden = false;
    });
  });
}
```

- [ ] **Step 2: CSS ergänzen** (in `css/style.css`)

```css
.prompt-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}
.prompt-card {
  text-align: left;
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-3);
  cursor: pointer;
  font: inherit;
}
.prompt-card:hover { border-color: var(--accent); }
.prompt-card.is-correct { border-color: var(--success); background: #F0FDF4; }
.prompt-card.is-wrong { border-color: var(--error); background: #FEF2F2; }
.prompt-card__label { font-weight: 600; color: var(--accent); margin-bottom: var(--space-1); }
.prompt-card__text { font-family: ui-monospace, monospace; font-size: 14px; }
@media (max-width: 1023px) { .prompt-grid { grid-template-columns: 1fr; } }
```

- [ ] **Step 3: Manuelle Akzeptanz**

In Lektion 0 temporär hinzufügen:
```javascript
practice: [
  { type: 'prompt-comparison',
    question: 'Welcher Prompt liefert vermutlich besseres Ergebnis?',
    prompts: ['Schreib was über Geburtstage', 'Schreib mir als Erzieherin einen 5-Satz-Elternbrief zur Bauchwehepidemie in unserer Sonnenblumen-Gruppe, freundlich, klar.'],
    correct: 1,
    explanation: 'Genau! Rolle, Aufgabe, Kontext, Format machen den Unterschied.' }
]
```

Test: Klick auf Prompt A → rot, Prompt B → grün, Klick B → grün, Erklärung erscheint.

Danach den Test-Eintrag wieder entfernen — Lektion 0 hat in der finalen Form keine `practice`.

- [ ] **Step 4: Commit**

```bash
git add js/exercises.js css/style.css
git commit -m "feat: uebungstyp prompt-comparison"
```

---

### Task 8: Übungstyp `prompt-builder`

**Files:**
- Modify: `js/exercises.js`, `css/style.css`

- [ ] **Step 1: Renderer**

```javascript
render_prompt_builder(ex, id) {
  // ex.slots: [{ key: 'rolle', label: 'Rolle', options: ['...', '...'], correct: 0 }, ...]
  const slotsHtml = ex.slots.map((slot, sIdx) => {
    const opts = slot.options.map((opt, oIdx) =>
      `<button class="builder-option" type="button" data-slot="${sIdx}" data-option="${oIdx}">${Renderer.escapeHtml(opt)}</button>`
    ).join('');
    return `
      <div class="builder-slot" data-slot="${sIdx}">
        <div class="builder-slot__label">${slot.label}</div>
        <div class="builder-slot__chosen" data-chosen></div>
        <div class="builder-slot__options">${opts}</div>
      </div>
    `;
  }).join('');
  return `
    <div class="card" data-exercise="prompt-builder" data-correct='${JSON.stringify(ex.slots.map((s) => s.correct))}'>
      ${ex.question ? `<h3 class="card__title">${ex.question}</h3>` : ''}
      ${slotsHtml}
      <div class="builder-result" hidden>
        <div class="builder-result__label">Dein Prompt:</div>
        <div class="prompt-box" data-result></div>
        <button class="copy-btn" type="button" data-copy-from-builder>📋 Diesen Prompt kopieren</button>
      </div>
      <button class="btn" type="button" data-builder-check>Prompt zusammensetzen</button>
      <div class="feedback" hidden></div>
    </div>
  `;
}
```

- [ ] **Step 2: Bind**

```javascript
// in bindAll
scope.querySelectorAll('[data-exercise="prompt-builder"]').forEach((root) => {
  Exercises.bindPromptBuilder(root);
});
```

```javascript
bindPromptBuilder(root) {
  const correct = JSON.parse(root.dataset.correct);
  const chosen = correct.map(() => null);

  root.querySelectorAll('.builder-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      const s = parseInt(btn.dataset.slot, 10);
      const o = parseInt(btn.dataset.option, 10);
      chosen[s] = { o, text: btn.textContent };
      const slotEl = root.querySelector(`.builder-slot[data-slot="${s}"]`);
      slotEl.querySelector('[data-chosen]').textContent = btn.textContent;
      slotEl.querySelectorAll('.builder-option').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });

  root.querySelector('[data-builder-check]').addEventListener('click', () => {
    if (chosen.some((c) => c === null)) {
      alert('Wähl bitte für jeden Baustein eine Option.');
      return;
    }
    const allCorrect = chosen.every((c, i) => c.o === correct[i]);
    const feedback = root.querySelector('.feedback');
    const resultBox = root.querySelector('.builder-result');
    const result = chosen.map((c) => c.text).join(' ');
    resultBox.querySelector('[data-result]').textContent = result;
    resultBox.hidden = false;
    feedback.hidden = false;
    feedback.className = 'feedback ' + (allCorrect ? 'feedback--correct' : 'feedback--wrong');
    feedback.innerHTML = allCorrect
      ? '✓ Genau diese Bausteine ergeben einen starken Prompt — kopier ihn dir und probier ihn aus.'
      : 'Fast! Schau dir die Bausteine nochmal an — manche passen besser zu Erzieher-Alltag.';
  });

  root.querySelector('[data-copy-from-builder]').addEventListener('click', (e) => {
    const text = root.querySelector('[data-result]').textContent;
    navigator.clipboard.writeText(text).then(() => {
      e.currentTarget.textContent = '✓ Kopiert!';
      setTimeout(() => { e.currentTarget.textContent = '📋 Diesen Prompt kopieren'; }, 2200);
    });
  });
}
```

- [ ] **Step 3: CSS**

```css
.builder-slot { margin-bottom: var(--space-3); }
.builder-slot__label { font-weight: 600; color: var(--accent); margin-bottom: var(--space-1); }
.builder-slot__chosen {
  min-height: 36px; padding: 8px 12px; background: #F3F4F6;
  border-radius: var(--radius); margin-bottom: var(--space-2); font-style: italic; color: var(--text-muted);
}
.builder-slot__chosen:not(:empty) { color: var(--text); font-style: normal; }
.builder-slot__options { display: flex; flex-wrap: wrap; gap: var(--space-2); }
.builder-option {
  padding: 8px 14px; border: 1.5px solid var(--border); border-radius: var(--radius);
  background: var(--surface); font: inherit; cursor: pointer; min-height: var(--tap-min);
}
.builder-option.is-active { border-color: var(--accent); background: var(--accent-light); }
.builder-result { margin-top: var(--space-3); }
.builder-result__label { font-weight: 600; margin-bottom: var(--space-1); }
```

- [ ] **Step 4: Akzeptanz** — testen mit temporärer Übung in Lektion 0:

```javascript
{ type: 'prompt-builder',
  question: 'Setz einen Prompt aus Rolle, Aufgabe, Kontext, Format zusammen.',
  slots: [
    { label: 'Rolle', options: ['Du bist Erzieherin.', 'Hi.'], correct: 0 },
    { label: 'Aufgabe', options: ['Schreib was', 'Schreib mir einen Elternbrief.'], correct: 1 },
    { label: 'Kontext', options: ['Es geht um eine Bauchwehepidemie in der Sonnenblumen-Gruppe.', ''], correct: 0 },
    { label: 'Format', options: ['Egal', 'Maximal 5 Sätze, freundlicher Ton.'], correct: 1 }
  ]
}
```

Erwartet: Auswahl pro Slot → Klick „Prompt zusammensetzen" → fertiger Prompt + Copy-Button.

- [ ] **Step 5: Commit**

```bash
git add js/exercises.js css/style.css
git commit -m "feat: uebungstyp prompt-builder"
```

---

### Task 9: Übungstyp `interface-find` (Hotspots auf Screenshot)

**Files:**
- Modify: `js/exercises.js`, `css/style.css`

- [ ] **Step 1: Renderer**

```javascript
render_interface_find(ex, id) {
  // ex.image: pfad oder null (dann placeholder); ex.targets: [{ x, y, w, h, label, hint }]
  const targets = ex.targets.map((t, i) =>
    `<button class="hotspot" type="button" data-target="${i}"
      style="left:${t.x}%;top:${t.y}%;width:${t.w}%;height:${t.h}%"
      aria-label="${Renderer.escapeHtml(t.label)}"></button>`
  ).join('');
  const checklist = ex.targets.map((t, i) =>
    `<li data-target="${i}">${Renderer.escapeHtml(t.label)}</li>`
  ).join('');
  const imgHtml = ex.image
    ? `<img src="${ex.image}" alt="ChatGPT-Screenshot" class="hotspot-image" />`
    : `<div class="screenshot-placeholder">📸 Hier kommt dein ChatGPT-Screenshot hin.<br><small>${ex.placeholder || 'Bild fehlt noch.'}</small></div>`;
  return `
    <div class="card" data-exercise="interface-find">
      ${ex.question ? `<h3 class="card__title">${ex.question}</h3>` : ''}
      <div class="hotspot-wrap">
        ${imgHtml}
        ${ex.image ? targets : ''}
      </div>
      <ol class="hotspot-checklist">${checklist}</ol>
      <div class="feedback" hidden></div>
    </div>
  `;
}
```

- [ ] **Step 2: Bind**

```javascript
// in bindAll
scope.querySelectorAll('[data-exercise="interface-find"]').forEach((root) => {
  Exercises.bindInterfaceFind(root);
});
```

```javascript
bindInterfaceFind(root) {
  const total = root.querySelectorAll('.hotspot-checklist li').length;
  let found = 0;
  root.querySelectorAll('.hotspot').forEach((spot) => {
    spot.addEventListener('click', () => {
      if (spot.classList.contains('is-found')) return;
      spot.classList.add('is-found');
      const idx = spot.dataset.target;
      const li = root.querySelector(`.hotspot-checklist li[data-target="${idx}"]`);
      if (li) li.classList.add('is-found');
      found += 1;
      if (found === total) {
        const fb = root.querySelector('.feedback');
        fb.className = 'feedback feedback--correct';
        fb.innerHTML = '✓ Du hast alle Knöpfe gefunden — du kennst dich aus!';
        fb.hidden = false;
      }
    });
  });
}
```

- [ ] **Step 3: CSS**

```css
.hotspot-wrap { position: relative; margin-bottom: var(--space-3); }
.hotspot-image { width: 100%; display: block; border-radius: var(--radius); }
.hotspot {
  position: absolute; background: rgba(15,118,110,0.15);
  border: 2px dashed var(--accent); border-radius: 8px;
  cursor: pointer; padding: 0;
}
.hotspot:hover { background: rgba(15,118,110,0.3); }
.hotspot.is-found { background: rgba(22,163,74,0.3); border-color: var(--success); }
.hotspot-checklist { padding-left: 24px; }
.hotspot-checklist li { padding: 4px 0; }
.hotspot-checklist li.is-found { text-decoration: line-through; color: var(--success); }
```

- [ ] **Step 4: Akzeptanz**

Mit Stub-Bild (`placeholder`-Mode) testen — Hotspots werden ohne Bild nicht gerendert, Checkliste schon. Mit Test-Bild (z. B. einer beliebigen PNG-Datei) und Test-Targets prüfen: Klick auf Hotspot → grün, Checkliste streicht durch.

- [ ] **Step 5: Commit**

```bash
git add js/exercises.js css/style.css
git commit -m "feat: uebungstyp interface-find mit hotspot-overlay"
```

---

### Task 10: Übungstyp `hallucination-mark`

**Files:**
- Modify: `js/exercises.js`, `css/style.css`

- [ ] **Step 1: Renderer**

```javascript
render_hallucination_mark(ex, id) {
  // ex.sentences: ['...', '...']; ex.problematic: [1, 3]
  // ex.reasons: ['erfunden', 'unbelegt', 'widerspricht Wissen']
  const sentencesHtml = ex.sentences.map((s, i) =>
    `<span class="halluc-sentence" data-index="${i}">${Renderer.escapeHtml(s)}</span> `
  ).join('');
  return `
    <div class="card" data-exercise="hallucination-mark"
         data-problematic='${JSON.stringify(ex.problematic)}'
         data-reasons='${JSON.stringify(ex.reasons || ['erfunden', 'unbelegt', 'widerspricht Wissen'])}'>
      ${ex.question ? `<h3 class="card__title">${ex.question}</h3>` : ''}
      <p class="halluc-text">${sentencesHtml}</p>
      <p class="copy-hint">Klick alle Sätze an, die dir verdächtig vorkommen.</p>
      <button class="btn" type="button" data-halluc-check>Auswertung anzeigen</button>
      <div class="feedback" hidden></div>
    </div>
  `;
}
```

- [ ] **Step 2: Bind**

```javascript
// in bindAll
scope.querySelectorAll('[data-exercise="hallucination-mark"]').forEach((root) => {
  Exercises.bindHallucinationMark(root);
});
```

```javascript
bindHallucinationMark(root) {
  const problematic = JSON.parse(root.dataset.problematic);
  const selected = new Set();

  root.querySelectorAll('.halluc-sentence').forEach((s) => {
    s.addEventListener('click', () => {
      const i = parseInt(s.dataset.index, 10);
      if (selected.has(i)) {
        selected.delete(i); s.classList.remove('is-selected');
      } else {
        selected.add(i); s.classList.add('is-selected');
      }
    });
  });

  root.querySelector('[data-halluc-check]').addEventListener('click', () => {
    const sentences = root.querySelectorAll('.halluc-sentence');
    let correctCount = 0;
    sentences.forEach((s, i) => {
      const isProblem = problematic.includes(i);
      const wasSelected = selected.has(i);
      s.classList.remove('is-selected');
      if (isProblem && wasSelected) { s.classList.add('is-correct'); correctCount += 1; }
      else if (isProblem && !wasSelected) { s.classList.add('is-missed'); }
      else if (!isProblem && wasSelected) { s.classList.add('is-wrong'); }
    });
    const fb = root.querySelector('.feedback');
    fb.hidden = false;
    fb.className = 'feedback ' + (correctCount === problematic.length ? 'feedback--correct' : 'feedback--wrong');
    fb.innerHTML = `Du hast ${correctCount} von ${problematic.length} Halluzinationen erkannt. Grün = richtig markiert, Gelb = übersehen, Rot = fälschlich markiert.`;
  });
}
```

- [ ] **Step 3: CSS**

```css
.halluc-text { line-height: 2; font-size: 17px; }
.halluc-sentence { cursor: pointer; padding: 2px 4px; border-radius: 4px; transition: background .15s; }
.halluc-sentence:hover { background: rgba(15,118,110,0.1); }
.halluc-sentence.is-selected { background: var(--accent-light); }
.halluc-sentence.is-correct { background: #BBF7D0; }
.halluc-sentence.is-missed { background: #FEF08A; }
.halluc-sentence.is-wrong { background: #FECACA; }
```

- [ ] **Step 4: Akzeptanz**

Test mit:
```javascript
{ type: 'hallucination-mark',
  question: 'Welche Sätze hat ChatGPT vermutlich erfunden?',
  sentences: ['Bello ist ein Hund.', 'Er lebt in Köln.', 'Sein Lieblingsbuch ist „Pfötchen-Logik" von Hans Zimmer.', 'Hunde mögen Spielzeug.'],
  problematic: [2] }
```

Klick auf Satz 2, dann „Auswertung" → Satz 2 grün.

- [ ] **Step 5: Commit**

```bash
git add js/exercises.js css/style.css
git commit -m "feat: uebungstyp hallucination-mark"
```

---

### Task 11: Übungstyp `data-decision`

**Files:**
- Modify: `js/exercises.js`, `css/style.css`

- [ ] **Step 1: Renderer**

```javascript
render_data_decision(ex, id) {
  // ex.cases: [{ text, correct: 'rein'|'anonymisieren'|'gar-nicht', explanation }]
  const casesHtml = ex.cases.map((c, i) =>
    `<div class="data-case" data-case="${i}" data-correct="${c.correct}"
          data-explanation="${Renderer.escapeHtml(c.explanation || '')}">
      <div class="data-case__text">${Renderer.escapeHtml(c.text)}</div>
      <div class="data-case__buttons">
        <button class="btn btn--ghost data-decision-btn" type="button" data-choice="rein">Darf so rein</button>
        <button class="btn btn--ghost data-decision-btn" type="button" data-choice="anonymisieren">Anonymisieren</button>
        <button class="btn btn--ghost data-decision-btn" type="button" data-choice="gar-nicht">Lieber gar nicht</button>
      </div>
      <div class="feedback" hidden></div>
    </div>`
  ).join('');
  return `
    <div class="card" data-exercise="data-decision">
      ${ex.question ? `<h3 class="card__title">${ex.question}</h3>` : ''}
      ${casesHtml}
    </div>
  `;
}
```

- [ ] **Step 2: Bind**

```javascript
// in bindAll
scope.querySelectorAll('[data-exercise="data-decision"]').forEach((root) => {
  Exercises.bindDataDecision(root);
});
```

```javascript
bindDataDecision(root) {
  root.querySelectorAll('.data-case').forEach((c) => {
    const correct = c.dataset.correct;
    const explanation = c.dataset.explanation;
    const fb = c.querySelector('.feedback');
    c.querySelectorAll('.data-decision-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (c.dataset.locked === 'true') return;
        c.dataset.locked = 'true';
        const choice = btn.dataset.choice;
        if (choice === correct) {
          btn.classList.add('is-correct');
          fb.className = 'feedback feedback--correct';
          fb.innerHTML = '✓ Genau — das hast du längst im Gefühl. Profi-Reflex.';
        } else {
          btn.classList.add('is-wrong');
          c.querySelector(`[data-choice="${correct}"]`).classList.add('is-correct');
          fb.className = 'feedback feedback--wrong';
          fb.innerHTML = explanation || 'Schau nochmal hin — was würdest du auch deiner Kollegin nicht über Familie X erzählen?';
        }
        fb.hidden = false;
      });
    });
  });
}
```

- [ ] **Step 3: CSS**

```css
.data-case { padding: var(--space-3); border: 1px solid var(--border); border-radius: var(--radius); margin-bottom: var(--space-3); }
.data-case__text { font-style: italic; margin-bottom: var(--space-2); padding: var(--space-2); background: #F3F4F6; border-radius: 8px; }
.data-case__buttons { display: flex; flex-wrap: wrap; gap: var(--space-2); }
.data-decision-btn.is-correct { background: var(--success); color: white; border-color: var(--success); }
.data-decision-btn.is-wrong { background: #FEF2F2; color: var(--error); border-color: var(--error); }
```

- [ ] **Step 4: Akzeptanz**

Test mit einem Case → richtige Entscheidung grün, falsche Entscheidung rot + richtige hervorgehoben.

- [ ] **Step 5: Commit**

```bash
git add js/exercises.js css/style.css
git commit -m "feat: uebungstyp data-decision"
```

---

### Task 12: Übungstyp `self-checklist`

**Files:**
- Modify: `js/exercises.js`, `css/style.css`

- [ ] **Step 1: Renderer**

```javascript
render_self_checklist(ex, id) {
  // ex.items: ['Hast du eine Rolle vergeben?', '...']
  const items = ex.items.map((it, i) =>
    `<label class="checklist-item">
      <input type="checkbox" data-index="${i}" />
      <span>${Renderer.escapeHtml(it)}</span>
    </label>`
  ).join('');
  return `
    <div class="card" data-exercise="self-checklist">
      ${ex.question ? `<h3 class="card__title">${ex.question}</h3>` : ''}
      <div class="checklist">${items}</div>
      ${ex.note ? `<p class="copy-hint">${ex.note}</p>` : ''}
    </div>
  `;
}
```

- [ ] **Step 2: CSS**

```css
.checklist-item {
  display: flex; align-items: center; gap: var(--space-2);
  padding: var(--space-2); min-height: var(--tap-min); cursor: pointer;
}
.checklist-item input { width: 22px; height: 22px; accent-color: var(--accent); }
```

Kein Bind nötig — Checkboxen funktionieren nativ. (`bindAll` ignoriert diesen Typ einfach.)

- [ ] **Step 3: Akzeptanz**

In Lektion 0 testweise eine `self-checklist` einfügen, anhaken, gut.

- [ ] **Step 4: Commit**

```bash
git add js/exercises.js css/style.css
git commit -m "feat: uebungstyp self-checklist"
```

---

### Task 13: Übungstypen-Smoke-Test

**Files:**
- Modify: `js/lessons-00-erste-5-min.js` (temporäres Debug-Lektions-Setup, danach revertieren)

- [ ] **Step 1: Lektion 0 temporär als „alle Übungstypen" befüllen**, alle 7 Übungstypen rendern lassen, Browser-Test.

- [ ] **Step 2: Akzeptanz**

Alle Übungstypen erscheinen ohne Crash, lassen sich ohne JS-Fehler in der Konsole bedienen.

- [ ] **Step 3: Lektion 0 zurücksetzen** auf „Erste 5 Minuten"-Inhalt aus Task 6.

- [ ] **Step 4: Commit (nur falls Fixes nötig)**

```bash
git add js/exercises.js css/style.css
git commit -m "chore: smoke-test alle uebungstypen"
```

---

## Phase 3 — Lektionsdaten (Tasks 14-23)

Pro Lektion ein Task. Inhalte aus der Spec übernehmen (`docs/superpowers/specs/2026-05-06-ki-einmaleins-design.md`, Abschnitt „Lektionen").

**Generelles Schema pro Lektion:**

```javascript
window.LESSON_XX = {
  id: XX,
  title: 'Lektion XX — Titel',
  intro: { html: `<p>Erklärtext, max 1 Bildschirm.</p>` },
  missions: [
    { type: 'live-mission', title: '...', instruction: '...', promptToCopy: '...', reflection: { type: 'multiple-choice', ... } },
    { type: 'live-mission', title: '...', instruction: '...', promptToCopy: '...', reflection: { type: 'prompt-comparison', ... } }
  ],
  practice: [
    { type: 'self-checklist', question: '...', items: [...] }
  ]
};
```

**Pro Task:**
1. Datei vollständig nach Spec füllen
2. Lektion im Browser durchklicken: alle Phasen, alle Missionen, alle Übungen funktionieren
3. „Lektion als erledigt markieren" testen
4. Commit

---

### Task 14: Lektion 0 — „Erste 5 Minuten"

**File:** `js/lessons-00-erste-5-min.js`

Spec-Abschnitt: **Lektion 0**

- [ ] **Step 1: Inhalt schreiben** (eine Mission Bello-Gedicht + Reflexion mit 2 MC-Fragen).

```javascript
window.LESSON_00 = {
  id: 0,
  title: 'Lektion 0 — Erste 5 Minuten',
  intro: { html: `
    <p>Hi Chrissi 👋</p>
    <p>Bevor wir irgendwas erklären, machst du jetzt einfach was Lustiges mit ChatGPT — das dauert keine 2 Minuten.</p>
    <p>Du brauchst:</p>
    <ul>
      <li>Einen offenen ChatGPT-Tab (chatgpt.com)</li>
      <li>Diesen Tab hier daneben</li>
    </ul>
    <p>Klick gleich auf „Mission: Bello-Gedicht".</p>
  ` },
  missions: [
    {
      type: 'live-mission',
      title: 'Mission: Bello-Gedicht',
      instruction: `<p>Kopiere den Prompt unten, wechsel zu deinem ChatGPT-Tab, füg ihn ein — und schau, was passiert.</p>`,
      promptToCopy: 'Schreib ein 4-zeiliges Gedicht über meinen Hund Bello, der Socken klaut.',
      reflection: {
        type: 'multiple-choice',
        question: 'Wie schnell kam die Antwort?',
        options: ['Super schnell, fast sofort', 'Hat ein bisschen gedauert', 'Ich hab keine Antwort bekommen'],
        correct: 0,
        explanation: 'Genau — KI ist beeindruckend schnell. Das wird gleich noch wichtig.'
      }
    },
    {
      type: 'multiple-choice',
      title: 'Frage zum Ergebnis',
      question: 'Hat dich was an der Antwort überrascht?',
      options: ['Ja, war kreativer als ich dachte', 'Nein, war erwartbar', 'War sogar lustig'],
      correct: 0,
      explanation: 'Das ist genau der Effekt, den wir nutzen werden — und du wirst lernen, wie du diesen „Wow"-Effekt verlässlich auslöst.'
    }
  ]
};
```

- [ ] **Step 2: Browser-Test**: Mission durchklicken, Reflexion testen.
- [ ] **Step 3: Commit**: `git add js/lessons-00-erste-5-min.js && git commit -m "feat: lektion 0 — erste 5 minuten"`

---

### Task 15: Lektion 1 — „Das Chat-Fenster verstehen"

**File:** `js/lessons-01-chat-fenster.js`

Spec-Abschnitt: **Lektion 1**

Inhalt:
- Intro zur Tour-Idee
- `interface-find`-Übung (mit Platzhalter-Bildern, beschriftet — Chrissi ersetzt später)
- Mini-Mission „Diktieren statt Tippen": Mikrofon-Symbol erklären, Anleitung
- Mini-Mission „Vorlesen": Lautsprecher-Symbol erklären

```javascript
window.LESSON_01 = {
  id: 1,
  title: 'Lektion 1 — Das Chat-Fenster verstehen',
  intro: { html: `
    <p>Bevor wir richtig prompten, lernst du in 5 Minuten, wo bei ChatGPT was ist. Damit du nichts mehr suchst.</p>
    <p>Mach ChatGPT in einem zweiten Tab auf — schau parallel hin.</p>
  ` },
  missions: [
    {
      type: 'interface-find',
      title: 'Die wichtigsten Knöpfe',
      question: 'Mach in deinem ChatGPT-Tab die folgenden Stellen einmal sichtbar — und hak sie unten ab.',
      placeholder: 'Chrissi, mach hier später einen Screenshot deiner ChatGPT-Oberfläche und ersetze die Datei `assets/screenshots/01-overview.png`.',
      image: null,
      targets: [
        { x: 0, y: 0, w: 25, h: 100, label: 'Linke Seitenleiste mit deinen Chats' },
        { x: 30, y: 90, w: 60, h: 8, label: 'Eingabefeld unten in der Mitte' },
        { x: 35, y: 92, w: 4, h: 6, label: 'Büroklammer für Datei-Uploads' },
        { x: 85, y: 92, w: 4, h: 6, label: 'Mikrofon-Symbol zum Diktieren' },
        { x: 30, y: 5, w: 30, h: 5, label: 'Modell-Anzeige + „Thinking"-Toggle' },
        { x: 90, y: 5, w: 8, h: 8, label: 'Profil-Menü (deine Initialen oben rechts)' }
      ]
    },
    {
      type: 'live-mission',
      title: 'Mission: Diktieren statt tippen',
      instruction: `<p>Klick in ChatGPT auf das <strong>Mikrofon-Symbol</strong> rechts neben dem Eingabefeld. Sprech den Satz unten ein — du musst nichts tippen.</p><p>Zum Vorlesen lassen: nach der Antwort siehst du unter dem Text einen <strong>Lautsprecher</strong>. Probier ihn aus.</p>`,
      promptToCopy: 'Erzähl mir in zwei Sätzen, was eine Erzieherin in einer Sprachfördergruppe typischerweise macht.',
      reflection: {
        type: 'multiple-choice',
        question: 'Wie war\'s, einen Prompt einzusprechen statt zu tippen?',
        options: ['Praktisch, viel schneller', 'Komisch, ich tipp lieber', 'Hat nicht funktioniert (mal in den Browser-Einstellungen schauen)'],
        correct: 0,
        explanation: 'Diktieren spart viel Zeit — gerade unterwegs am iPad. Du kannst es jederzeit nutzen.'
      }
    }
  ],
  practice: [
    {
      type: 'self-checklist',
      question: 'Hast du alle Knöpfe wirklich gesehen?',
      items: [
        'Ich habe die Seitenleiste gefunden',
        'Ich weiß, wo das Eingabefeld ist',
        'Ich habe die Büroklammer für Dateien entdeckt',
        'Ich habe das Mikrofon-Symbol gefunden',
        'Ich weiß, wo der Modell- und „Thinking"-Schalter ist',
        'Ich habe das Profil-Menü mit den Einstellungen gefunden'
      ],
      note: 'Wenn alle Häkchen drin sind: Glückwunsch, du kennst dich aus.'
    }
  ]
};
```

- [ ] **Step 1: Datei schreiben** (siehe oben).
- [ ] **Step 2: Browser-Test**: alle Phasen durchklicken, Hotspot-Übung mit Platzhalter macht keinen Crash, Checkliste anhakbar.
- [ ] **Step 3: Commit**: `git add js/lessons-01-chat-fenster.js && git commit -m "feat: lektion 1 — chat-fenster verstehen"`

---

### Task 16: Lektion 2 — „Prompten Grundlagen: Die 4 Hebel"

**File:** `js/lessons-02-prompten.js`

Spec-Abschnitt: **Lektion 2**

Inhalt:
- Intro mit Vorab-Hinweis: „Wir machen gleich erst absichtlich was Suboptimales — das ist der Trick"
- Mini-Theorie als Aufklappkasten („Warum funktionieren bessere Prompts besser?")
- Mission 1 (live-mission): schlechter Prompt → enttäuschende Antwort, Reflexion (multiple-choice)
- Mission 2 (live-mission): gleicher Inhalt mit allen 4 Hebeln, Reflexion (prompt-comparison)
- Practice: prompt-builder + self-checklist

Nutze konkrete Erzieher-Beispiele (Geburtstage, Sommerfest, Bauchwehepidemie). Reflexion-Multiple-Choice gibt jeweils genau die „aha"-Pointe.

- [ ] **Step 1: Datei schreiben**: ca. 80-130 Zeilen mit obiger Struktur. Wichtig: Vorab-Hinweis prominent im Intro.
- [ ] **Step 2: Browser-Test**.
- [ ] **Step 3: Commit**: `git commit -m "feat: lektion 2 — prompten grundlagen"`

---

### Task 17: Lektion 3 — „Du als Profi: Datenschutz"

**File:** `js/lessons-03-datenschutz.js`

Spec-Abschnitt: **Lektion 3** (mit dem motivierenden Profi-Ton, *nicht* Verbots-Liste)

Inhalt:
- Intro mit der Profi-Eröffnung: „Du gehst täglich mit sensiblen Infos um — das hast du längst im Gefühl."
- Drei Profi-Regeln als HTML-Liste
- AVV-Hintergrund als Aufklappkasten (`<details class="expand">`)
- `data-decision`-Übung mit 5-6 realistischen Fällen (anonymisierte Beobachtungsbogen-Notiz, voll personalisierte Notiz, generische Sprachförder-Idee, etc.)
- Schlusssatz

```javascript
window.LESSON_03 = {
  id: 3,
  title: 'Lektion 3 — Du als Profi: Datenschutz',
  intro: { html: `
    <p>Hi Chrissi, du gehst täglich mit sensiblen Infos um — Beobachtungsbögen, Familiengeschichten, Entwicklungsstände. Da hast du längst ein Bauchgefühl: <em>„das geht / das geht nicht"</em>. Genau dieses Gefühl ist auch hier dein bester Kompass.</p>
    <h3>Drei einfache Profi-Regeln</h3>
    <ol>
      <li><strong>Echte Namen bleiben draußen.</strong> Statt „Lara M., 4 Jahre, Eltern getrennt" einfach „ein 4-jähriges Kind, dessen Eltern sich kürzlich getrennt haben". Reicht für jeden Prompt.</li>
      <li><strong>Einmal beim Träger nachfragen.</strong> Manche Kitas haben klare Hausregeln zu KI. Frag einmal kurz nach — dann weißt du Bescheid.</li>
      <li><strong>Profi-Modus für Berufliches:</strong> Memory aus + „Temporary Chat" (Lektion 5 zeigt wie). Wie ein Gespräch, das nach dem Schließen vergessen ist.</li>
    </ol>
    <details class="expand">
      <summary>Wenn du es genau wissen willst: Warum Free streng zu sehen ist</summary>
      <p>ChatGPT Free hat keinen Auftragsverarbeitungsvertrag (AVV) mit deinem Träger — das ist die rechtliche Form, die für berufliche personenbezogene Daten nötig wäre. Konsequenz: Beruflich nur fiktive oder vollständig anonymisierte Inhalte. Mit „echte Namen draußen" bist du auf der sicheren Seite.</p>
    </details>
  ` },
  missions: [
    {
      type: 'data-decision',
      title: 'Üben: Was darf rein?',
      question: 'Pro Beispiel: Darf so rein, anonymisieren, oder lieber gar nicht?',
      cases: [
        { text: 'Wie kann ich Lara M. (4) fördern, deren Eltern sich gerade getrennt haben?', correct: 'anonymisieren', explanation: 'Lara M. ist ein konkreter Name. Anonymisieren auf „ein 4-jähriges Kind, dessen Eltern sich kürzlich getrennt haben" — die KI kann genauso gut antworten.' },
        { text: 'Wie kann ich ein 4-jähriges Kind sprachlich fördern, dessen Eltern sich kürzlich getrennt haben?', correct: 'rein', explanation: 'Genau! Anonymisiert, kein Name, keine Identifizierung. Profi-Stil.' },
        { text: 'Hier ist der komplette Beobachtungsbogen von Familie Yilmaz für Yusuf, 5 Jahre, mit Diagnose Z.', correct: 'gar-nicht', explanation: 'Voller Bogen mit Namen + Familie + Diagnose: das gehört nicht in ChatGPT Free, auch nicht „nur kurz". Fass es selbst zusammen, anonymisiere — dann darf es ggf. rein.' },
        { text: 'Schreib mir 5 Sprachförder-Ideen rund um das Bilderbuch „Der Grüffelo".', correct: 'rein', explanation: 'Keine personenbezogenen Daten, freie Bahn.' },
        { text: 'Mein Kollege Markus Bauer wirkt seit Wochen überlastet — wie spreche ich ihn an?', correct: 'anonymisieren', explanation: 'Auch Kolleginnen sind personenbezogen. Besser: „Wie spreche ich eine Kollegin an, die seit Wochen überlastet wirkt?"' },
        { text: 'Übersetze diesen anonymen Eltern-Infozettel in einfache Sprache: [Text ohne Namen].', correct: 'rein', explanation: 'Perfekt — kein personenbezogener Inhalt, klar fürs Prompten.' }
      ]
    }
  ],
  practice: [
    {
      type: 'self-checklist',
      question: 'Bevor du Lektion 4 startest:',
      items: [
        'Ich nehme echte Namen raus, bevor ich was eingebe.',
        'Ich frag bei Gelegenheit beim Träger nach KI-Regeln.',
        'Für berufliche Themen nutze ich Temporary Chat (zeig ich dir in Lektion 5).'
      ],
      note: 'Mit dieser Haltung gehen wir jetzt gemeinsam in deine Erzieher-Praxis — du hast nichts zu verlieren, nur Werkzeug-Sicherheit zu gewinnen.'
    }
  ]
};
```

- [ ] **Step 1: Datei schreiben** (s.o.).
- [ ] **Step 2: Browser-Test**: data-decision durchklicken, Aufklappkasten öffnet/schließt, Checkliste haket.
- [ ] **Step 3: Commit**: `git commit -m "feat: lektion 3 — datenschutz als profi-haltung"`

---

### Task 18: Lektion 4 — „Erzieher-Alltag"

**File:** `js/lessons-04-praxis.js`

Spec-Abschnitt: **Lektion 4**

Inhalt:
- Intro: „Jetzt nutzen wir die 4 Hebel im echten Alltag — alle Beispiele mit fiktiven Familien."
- 4-5 Live-Missionen:
  1. Elternbrief Sommerfest-Einladung (live-mission, Reflexion MC)
  2. Sprachförder-Idee zum Bilderbuch „Der Grüffelo" (live-mission, Reflexion MC)
  3. Beobachtungsbogen-Notiz umformulieren (live-mission mit anonymisiertem Bsp, Reflexion MC)
  4. **Sub-Mission „Übersetzung in einfache Sprache"** (live-mission mit Vorher-Nachher, dann Aufgabe an Chrissi: eigenen Brief in einfache Sprache)
  5. **Sub-Mission „Antwort kopieren":** Anleitung in 3 Wegen (Dreipunkt-Kopieren-Knopf, Markieren+Cmd+C, Bei iPad: gedrückt halten)
- Practice: prompt-builder mit Erzieher-Bausteinen + self-checklist

- [ ] **Step 1**: Datei schreiben (~150-180 Zeilen, viele Missionen).
- [ ] **Step 2**: Browser-Test, alle 4-5 Missionen durchklicken.
- [ ] **Step 3**: Commit: `git commit -m "feat: lektion 4 — prompten in der erzieher-praxis"`

---

### Task 19: Lektion 5 — „Chat-Hygiene & Chat-Verwaltung"

**File:** `js/lessons-05-chat-hygiene.js`

Spec-Abschnitt: **Lektion 5** (Teil A + Teil B)

Inhalt:
- Intro mit Kontextfenster-Analogie („Kurzzeitgedächtnis der KI")
- Teil A:
  - live-mission: gleichen Prompt in altem überladenem Chat vs. neuem Chat → Unterschied spüren, Reflexion MC
- Teil B:
  - Anleitung mit Aufklappkästen: Chat umbenennen, löschen, archivieren, finden
  - **Memory & Temporary Chat als entspannter Profi-Tipp** (nicht streng), mit interface-find-Übung (Schalter im Settings-Menü) — Platzhalter-Bilder
- Practice: self-checklist mit „Wann mach ich neuen Chat?"-Reflexionsfragen

- [ ] **Step 1**: Datei schreiben (~140 Zeilen).
- [ ] **Step 2**: Browser-Test.
- [ ] **Step 3**: Commit: `git commit -m "feat: lektion 5 — chat-hygiene und verwaltung"`

---

### Task 20: Lektion 6 — „Mit Dateien arbeiten"

**File:** `js/lessons-06-dateien.js`

Spec-Abschnitt: **Lektion 6**

Inhalt:
- **Limit-Banner ganz oben:** „⚠️ Free hat 3 Datei-Uploads/24 h gesamt, max. 2 Bilder. Diese Lektion + Lektion 7 zusammen brauchen mehr — verteile sie auf zwei Tage."
- Intro: Datei-Upload erklärt
- Mission 1 (live-mission): PDF eines fiktiven anonymen Elternbriefs hochladen → „fass zusammen" + „übersetze in einfache Sprache"
- Mission 2 (live-mission): Word-Dokument hochladen → „verbessere Stil und Klarheit", Antwort rauskopieren
- Sub-Mission „Antwort speichern": Konkrete Anleitung iPad-Files-App
- Practice: self-checklist „Was eignet sich für Datei-Upload?"

> Hinweis: Da Chrissi keine echten Beruf-PDFs nutzen soll, geben wir ihr ein Mini-Beispiel-PDF mit (`assets/illustrations/beispiel-elternbrief.pdf` — 1 Seite fiktiver Brief). Falls keins existiert, Anleitung „Erstell dir kurz ein Word-Dokument mit dem Text X und exportier es als PDF."

- [ ] **Step 1**: Datei schreiben (~120 Zeilen) inkl. prominenten Limit-Banner als CSS-Klasse `.warning-banner`.
- [ ] **Step 2**: CSS ergänzen falls Banner-Klasse fehlt:
```css
.warning-banner {
  background: #FEF3C7; border-left: 4px solid var(--warning);
  padding: var(--space-3); border-radius: var(--radius); margin-bottom: var(--space-4);
}
```
- [ ] **Step 3**: Browser-Test.
- [ ] **Step 4**: Commit: `git commit -m "feat: lektion 6 — mit dateien arbeiten"`

---

### Task 21: Lektion 7 — „Bilder ins Spiel bringen"

**File:** `js/lessons-07-bilder.js`

Spec-Abschnitt: **Lektion 7**

Inhalt:
- Limit-Banner: „Max. 2 Bilder/Tag in Free. Mach Lektion 6 + 7 nicht am gleichen Tag."
- Intro: Multimodalität als Erzieher-Werkzeug, Sprachförder-Bezug
- Mission 1 (live-mission): Foto eines (eigenen) Bilderbuchs hochladen → „Was ist hier zu sehen? Erkläre für ein 4-jähriges Kind."
- Mission 2 (live-mission): Foto eines handgeschriebenen Zettels → „Tippe das ab" + „Übersetze auf Türkisch."
- Reflexionen MC nach jeder Mission
- Practice: self-checklist mit Erzieher-Anwendungsfällen für Bilder-Prompts

- [ ] **Step 1**: Datei schreiben (~100 Zeilen).
- [ ] **Step 2**: Browser-Test.
- [ ] **Step 3**: Commit: `git commit -m "feat: lektion 7 — bilder im chat"`

---

### Task 22: Lektion 8 — „Halluzinationen"

**File:** `js/lessons-08-halluzinationen.js`

Spec-Abschnitt: **Lektion 8**

Inhalt:
- Intro: KI ist Text-Vorhersage, nicht Wahrheit
- Mission 1 (live-mission): „Frag ChatGPT nach dem Buch ‚Der blaue Wal von Klaus Müller'." → Halluzination live, Reflexion MC: „Hat es etwas erfunden?"
- Mission 2 (hallucination-mark): Beispieltext (von uns vorgegeben), Chrissi markiert verdächtige Sätze
- Mission 3 (live-mission): „Frag nach einem Ereignis nach dem Wissens-Cutoff" → KI weiß es nicht / antwortet vage
- Practice: self-checklist mit „Wann muss ich Fakten prüfen?"

- [ ] **Step 1**: Datei schreiben (~100 Zeilen) mit konkretem Halluzinations-Text in Mission 2.
- [ ] **Step 2**: Browser-Test.
- [ ] **Step 3**: Commit: `git commit -m "feat: lektion 8 — halluzinationen erkennen"`

---

### Task 23: Lektion 9 — „Was es noch gibt + Mini-Historie + Abschluss"

**File:** `js/lessons-09-was-noch-gibt.js`

Spec-Abschnitt: **Lektion 9**

Inhalt:
- Intro: Glückwunsch, Übergang
- Mini-Historie als HTML-Block: November 2022 ChatGPT-Launch, 2024 Multimodal, 2025/26 Agenten
- HTML-Block: Claude / Gemini / Copilot ohne Wertung, kurz beschrieben
- Aufklappkasten: „Wann lohnt ChatGPT Plus?"
- Practice: self-checklist „Was du jetzt kannst" (Bestätigung der Erfolgskriterien)
- **Abschluss-Karte** mit großer Visualisierung der 4 Hebel (Rolle/Aufgabe/Kontext/Format) und Text „Du hast's drauf, Chrissi! 💚"

```javascript
// Beispiel-Snippet für Abschluss-Block:
intro: { html: `
  <p>Glückwunsch — du hast die wichtigsten 80 % gemeistert. Hier noch ein kompakter Ausblick.</p>
` },
missions: [
  {
    type: 'multiple-choice',
    title: 'Mini-Historie',
    question: 'Wann startete ChatGPT öffentlich?',
    options: ['November 2022', 'Januar 2020', '2024'],
    correct: 0,
    explanation: 'Genau — Nov 2022 war der „ChatGPT-Moment". Seitdem ging's rasant.'
  }
],
practice: [
  {
    type: 'self-checklist',
    question: 'Das hast du jetzt drauf:',
    items: [
      'Ich schreibe Prompts mit Rolle, Aufgabe, Kontext und Format.',
      'Ich starte einen neuen Chat, wenn ich das Thema wechsle.',
      'Ich lade Dateien hoch und arbeite damit selbstverständlich.',
      'Ich erkenne Halluzinationen und prüfe Faktenangaben.',
      'Ich behandle Berufsdaten als Profi: anonymisiert oder fiktiv.',
      'Ich fühle mich sicher mit ChatGPT — es ist ein Werkzeug, kein Mysterium.'
    ],
    note: 'Du hast’s drauf, Chrissi! 💚'
  }
]
```

- [ ] **Step 1**: Datei schreiben (~100-120 Zeilen) inklusive Abschluss-Karte.
- [ ] **Step 2**: Browser-Test, Abschluss-Karte sichtbar nach allen Phasen.
- [ ] **Step 3**: Commit: `git commit -m "feat: lektion 9 — ausblick und abschluss"`

---

## Phase 4 — Polish & Deployment (Tasks 24-27)

### Task 24: Sidebar-Bonus & UI-Politur

**Files:**
- Modify: `css/style.css`, `js/app.js`

- [ ] **Step 1: Sidebar-Header mit Petrol-Akzent + Anti-Sticky-Bug-Fix**
- [ ] **Step 2: „Nächste Lektion"-Button im `lesson-footer` (rechts neben „erledigt markieren")**:

```javascript
// In Renderer.renderLesson nach Mark-Done-Button-Append:
const nextId = lesson.id + 1;
if (nextId < LESSONS.length) {
  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn btn--ghost';
  nextBtn.style.marginLeft = '12px';
  nextBtn.textContent = `Weiter mit Lektion ${nextId} →`;
  nextBtn.addEventListener('click', () => navigateTo(nextId));
  document.querySelector('.lesson-footer').appendChild(nextBtn);
}
```

(Im aktuellen Renderer-Stand `mark-done-btn`-Append-Logik anpassen — `lesson-footer` muss vorm Button-Append schon existieren, ist im Beispiel oben so.)

- [ ] **Step 3: Browser-Test**: Navigation per „Weiter"-Button, Fortschritts-Häkchen aktualisiert sich.
- [ ] **Step 4: Commit**: `git commit -m "feat: weiter-zu-naechster-lektion-button"`

---

### Task 25: Mobile-Polish auf iPhone (Sekundär-Use-Case)

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1**: In Browser-DevTools iPhone 12/15 simulieren, alle 10 Lektionen durchgehen, Layout-Bugs in `style.css` fixen (Wrap-Probleme, zu große Kacheln).
- [ ] **Step 2: Commit**: `git commit -m "fix: mobile-polish und kleine layout-fixes"`

---

### Task 26: Pflicht-Test auf iPad-Safari

**Files:**
- Keine — Test-Phase

- [ ] **Step 1: GitHub-Repo anlegen** (siehe Task 27 für Details — ggf. vorziehen).
- [ ] **Step 2: GitHub Pages aktivieren**.
- [ ] **Step 3: Auf Chrissis iPad Pro 11" (oder Marcos iPad) Safari öffnen, URL aufrufen, alle 10 Lektionen durchklicken, alle Übungstypen testen, Copy-Buttons testen** (`navigator.clipboard` braucht HTTPS — mit GitHub Pages gegeben).
- [ ] **Step 4: Bugs in `style.css`/`exercises.js` fixen** (häufig: `position: fixed`-Probleme, Touch-Events, iOS-spezifisches `flex`).
- [ ] **Step 5: Re-Deploy + erneut testen**.
- [ ] **Step 6: Commit**: `git commit -m "fix: ipad-safari-kompatibilitaet"` (falls Fixes nötig).

---

### Task 27: GitHub-Repo + Pages-Deployment

**Files:**
- Create: `README.md`

- [ ] **Step 1: README.md schreiben**:

```markdown
# KI-Einmaleins für Chrissi

Web-Lernprogramm zum souveränen Umgang mit ChatGPT — 10 kurze Lektionen, Live-Missionen direkt im echten ChatGPT.

**Live:** https://marcolemke78-debug.github.io/ki-einmaleins/

## Für wen?

Für ChatGPT-Erstnutzer:innen, die sich „blöd" fühlen, wenn was nicht klappt — und entdecken wollen, dass es am Werkzeug-Verständnis liegt, nicht an ihnen.

## Aufbau

10 Lektionen, je 5–15 Min:
- 0 Erste 5 Minuten
- 1 Das Chat-Fenster verstehen
- 2 Prompten Grundlagen: Die 4 Hebel
- 3 Du als Profi: Datenschutz
- 4 Prompten in der Erzieher-Praxis
- 5 Chat-Hygiene & Chat-Verwaltung
- 6 Mit Dateien arbeiten
- 7 Bilder ins Spiel bringen
- 8 Was die KI nicht kann
- 9 Was es noch gibt + Mini-Historie

## Tech

Vanilla HTML/CSS/JS, kein Build-Tool. Optimiert für iPad Pro 11".
```

- [ ] **Step 2: GitHub-Repo erstellen** (manuell oder via `gh`):
```bash
cd ~/Desktop/ki-einmaleins
gh repo create marcolemke78-debug/ki-einmaleins --public --source=. --remote=origin
git push -u origin main
```

- [ ] **Step 3: GitHub Pages aktivieren**:
GitHub-Repo → Settings → Pages → Source: branch `main`, folder `/` → Save.
Warten 1-2 Min, URL `https://marcolemke78-debug.github.io/ki-einmaleins/` erreichbar.

- [ ] **Step 4: Live-Test**: URL öffnen (Mac + iPad-Safari), Lektion 0 durchklicken, Copy-Button testen (HTTPS = clipboard funktioniert).

- [ ] **Step 5: Commit + Push**:
```bash
git add README.md
git commit -m "docs: readme + erste version live"
git push
```

---

## Wichtige Hinweise für Implementierende

1. **Reihenfolge der `<script>`-Tags in `index.html` ist wichtig**: alle `lessons-XX-*.js` zuerst (befüllen `window.LESSON_XX`), dann `progress.js`, `exercises.js`, `renderer.js`, `app.js`.
2. **Nicht jeden CSS-Snippet in eigenen Task auslagern** — wenn Task X CSS braucht, darin ergänzen. CSS-Datei wird im Verlauf wachsen, das ist ok.
3. **Bei Verwirrung über Lektionsinhalte**: immer in die Spec schauen (`docs/superpowers/specs/2026-05-06-ki-einmaleins-design.md`). Die Spec ist die Quelle der Wahrheit für alle Inhalte.
4. **Kein Test-Framework** — pro Task manueller Browser-Akzeptanztest reicht.
5. **Bei Übungstypen-Bugs**: in `js/exercises.js` debuggen, der gemeinsame `Exercises.bindAll`-Mechanismus kann tückisch sein bei dynamischem `innerHTML` (Event-Bindings müssen nach jedem `renderLesson`-Aufruf neu gesetzt werden — der Code erledigt das automatisch).
6. **Datenschutz-Lektion 3 Tonalität streng beibehalten**: motivierend, Profi-orientiert, *kein* Verbots-Katalog. Wenn beim Schreiben Sätze klingen wie „Du musst …", umformulieren.
7. **Frequente Commits**: Pro Task mindestens ein Commit. Lieber zu viele kleine als wenige große.
