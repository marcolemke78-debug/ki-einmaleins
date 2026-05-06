window.LESSON_00 = {
  id: 0,
  title: 'Lektion 0 — Erste 5 Minuten',
  intro: { html: `
    <p>Hi Chrissi 👋</p>
    <p>Bevor wir irgendwas erklären, machst du jetzt einfach was Lustiges mit ChatGPT — das dauert keine 2 Minuten.</p>
    <p style="color:var(--text-muted);font-size:15px;">Den ganzen Lernpfad siehst du oben (10 Stationen). Pro Lektion 5–15 Minuten — du musst nichts an einem Stück machen.</p>
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
