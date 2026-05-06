window.LESSON_00 = {
  id: 0,
  title: 'Lektion 0 — Erste 5 Minuten',
  intro: { html: `
    <p>Hi Chrissi 👋</p>
    <p>Bevor wir irgendwas erklären, machst du jetzt einfach was Lustiges mit ChatGPT — das dauert keine 2 Minuten.</p>

    <h3>Dein Lernpfad — 10 kurze Lektionen</h3>
    <div class="timeline timeline--path" role="list">
      <div class="timeline__entry is-now" role="listitem">
        <div class="timeline__dot" aria-hidden="true">✨</div>
        <div class="timeline__date">0</div>
        <div class="timeline__title">Erste 5 Min</div>
      </div>
      <div class="timeline__entry" role="listitem">
        <div class="timeline__dot" aria-hidden="true">🪟</div>
        <div class="timeline__date">1</div>
        <div class="timeline__title">Chat-Fenster</div>
      </div>
      <div class="timeline__entry" role="listitem">
        <div class="timeline__dot" aria-hidden="true">🎯</div>
        <div class="timeline__date">2</div>
        <div class="timeline__title">Prompten</div>
      </div>
      <div class="timeline__entry" role="listitem">
        <div class="timeline__dot" aria-hidden="true">🛡️</div>
        <div class="timeline__date">3</div>
        <div class="timeline__title">Datenschutz</div>
      </div>
      <div class="timeline__entry" role="listitem">
        <div class="timeline__dot" aria-hidden="true">📝</div>
        <div class="timeline__date">4</div>
        <div class="timeline__title">Praxis</div>
      </div>
      <div class="timeline__entry" role="listitem">
        <div class="timeline__dot" aria-hidden="true">🧹</div>
        <div class="timeline__date">5</div>
        <div class="timeline__title">Chat-Hygiene</div>
      </div>
      <div class="timeline__entry" role="listitem">
        <div class="timeline__dot" aria-hidden="true">📁</div>
        <div class="timeline__date">6</div>
        <div class="timeline__title">Dateien</div>
      </div>
      <div class="timeline__entry" role="listitem">
        <div class="timeline__dot" aria-hidden="true">🖼️</div>
        <div class="timeline__date">7</div>
        <div class="timeline__title">Bilder</div>
      </div>
      <div class="timeline__entry" role="listitem">
        <div class="timeline__dot" aria-hidden="true">🎭</div>
        <div class="timeline__date">8</div>
        <div class="timeline__title">Halluzinationen</div>
      </div>
      <div class="timeline__entry" role="listitem">
        <div class="timeline__dot" aria-hidden="true">🎉</div>
        <div class="timeline__date">9</div>
        <div class="timeline__title">Ausblick</div>
      </div>
    </div>
    <p style="font-size:14px;color:var(--text-muted);margin-top:-8px;">Du bist <strong style="color:var(--success);">hier</strong>. Pro Lektion 5–15 Minuten — du musst nichts an einem Stück machen.</p>

    <p>Du brauchst nur:</p>
    <ul>
      <li>Einen offenen ChatGPT-Tab (chatgpt.com)</li>
      <li>Diesen Tab hier daneben</li>
    </ul>
    <p>Klick gleich auf "Mission: Bello-Gedicht".</p>
  ` },
  missions: [
    {
      type: 'live-mission',
      title: 'Mission: Bello-Gedicht',
      instruction: '<p>Kopiere den Prompt unten, wechsel zu deinem ChatGPT-Tab, füg ihn ein — und schau, was passiert.</p>',
      promptToCopy: 'Schreib ein 4-zeiliges Gedicht über meinen Hund Bello, der Socken klaut.',
      reflection: {
        type: 'multiple-choice',
        subjective: true,
        question: 'Wie schnell kam die Antwort?',
        options: ['Super schnell, fast sofort', 'Hat ein bisschen gedauert', 'Ich hab keine Antwort bekommen'],
        correct: 0,
        explanation: 'Egal wie schnell — du hast deinen ersten Prompt durch und ChatGPT eine Antwort. Das war es schon, kein Hexenwerk.'
      }
    },
    {
      type: 'multiple-choice',
      subjective: true,
      title: 'Frage zum Ergebnis',
      question: 'Wie fandest du die Antwort?',
      options: ['Kreativer als ich dachte', 'War erwartbar', 'War sogar lustig'],
      correct: 0,
      explanation: 'Egal wie — Geschmackssache. Spannend wird es gleich, wenn du lernst, wie du diese Ergebnisse verlaesslich besser machst.'
    }
  ]
};
