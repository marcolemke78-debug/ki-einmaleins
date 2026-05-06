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
      explanation: 'Das ist genau der Effekt, den wir nutzen werden — und du wirst lernen, wie du diesen "Wow"-Effekt verlässlich auslöst.'
    }
  ]
};
