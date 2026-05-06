window.LESSON_02 = {
  id: 2,
  title: 'Lektion 2 — Prompten Grundlagen: Die 4 Hebel',
  intro: { html: `
    <p><strong>Kleiner Hinweis vorab:</strong> Wir machen gleich absichtlich erst was Suboptimales — das ist der Trick, damit du den Unterschied siehst. Das hat <em>nichts</em> damit zu tun, ob du "es kannst".</p>
    <p>Du fragst ChatGPT manchmal was, und die Antwort ist enttäuschend. Das liegt fast immer daran, dass der Prompt nicht klar genug war.</p>
    <p>Es gibt vier Stellschrauben, die fast alle Antworten besser machen:</p>
    <ul>
      <li><strong>Rolle</strong> — wer soll die KI sein? ("Du bist Erzieherin…")</li>
      <li><strong>Aufgabe</strong> — was genau soll passieren? ("Schreib mir einen Elternbrief…")</li>
      <li><strong>Kontext</strong> — für wen, welche Situation? ("Eltern eines 4-jährigen Kindes mit Bauchweh…")</li>
      <li><strong>Format</strong> — wie soll die Antwort aussehen? ("Maximal 5 Sätze, freundlicher Ton")</li>
    </ul>
    <details class="expand">
      <summary>Wenn du es genau wissen willst: Warum funktioniert das?</summary>
      <p>ChatGPT ist im Kern eine Text-Vorhersage-Maschine — sie schreibt jedes Wort vorher, das wahrscheinlich als Nächstes kommen würde. Je klarer du sagst, in welche Richtung sie soll, desto präziser werden die Vorhersagen. Mit den 4 Hebeln gibst du der KI genug Kontext, dass die Vorhersagen "gut treffen".</p>
    </details>
  ` },
  missions: [
    {
      type: 'live-mission',
      title: 'Mission 1: Der schwache Prompt',
      instruction: '<p>Kopier den Prompt unten und schau, was ChatGPT dir gibt. Spoiler: nichts Berauschendes — und das ist Absicht.</p>',
      promptToCopy: 'Schreib was über Geburtstage.',
      reflection: {
        type: 'multiple-choice',
        question: 'War die Antwort konkret oder generisch?',
        options: ['Sehr generisch, allgemeines Bla', 'Konkret und nutzbar', 'Komplett am Thema vorbei'],
        correct: 0,
        explanation: 'Genau — kein Wunder. Wenig Input, wenig Richtung. Jetzt kommt der Vergleich.'
      }
    },
    {
      type: 'live-mission',
      title: 'Mission 2: Mit allen 4 Hebeln',
      instruction: '<p>Gleiches Thema, aber jetzt mit Rolle, Aufgabe, Kontext, Format. Kopier den Prompt und schau den Unterschied.</p>',
      promptToCopy: 'Du bist Erzieherin. Schreib mir 5 kreative Ideen für die Geburtstagsfeier eines 4-jährigen Kindes in einer Kita-Gruppe von 18 Kindern. Format: nummerierte Liste, je 2 Sätze pro Idee, freundlich und unkompliziert.',
      reflection: {
        type: 'prompt-comparison',
        question: 'Welcher Prompt liefert dir das nutzbarere Ergebnis?',
        prompts: [
          'Schreib was über Geburtstage.',
          'Du bist Erzieherin. Schreib mir 5 kreative Ideen für die Geburtstagsfeier eines 4-jährigen Kindes in einer Kita-Gruppe von 18 Kindern. Format: nummerierte Liste, je 2 Sätze pro Idee, freundlich und unkompliziert.'
        ],
        correct: 1,
        explanation: 'Die 4 Hebel (Rolle, Aufgabe, Kontext, Format) machen den Unterschied. Genau das übst du gleich selbst.'
      }
    }
  ],
  practice: [
    {
      type: 'prompt-toggle-demo',
      question: 'Live-Spielwiese: Schalt die 4 Hebel an und sieh zu, wie der Prompt wächst.',
      intro: 'Tipp jeden Hebel an oder aus — der Prompt-Text unten passt sich live an. Wenn du fertig bist, kopiere den Prompt und probier ihn in ChatGPT aus.',
      baseText: 'Schreib was über Geburtstage.',
      levers: [
        { label: 'Rolle', snippet: 'Du bist Erzieherin in einer Kita.' },
        { label: 'Aufgabe', snippet: 'Schreib mir 5 kreative Ideen für eine Geburtstagsfeier.' },
        { label: 'Kontext', snippet: 'Es geht um ein 4-jähriges Kind in einer Kita-Gruppe von 18 Kindern.' },
        { label: 'Format', snippet: 'Format: nummerierte Liste, je 2 Sätze pro Idee, freundlich und unkompliziert.' }
      ]
    },
    {
      type: 'prompt-builder',
      question: 'Bau dir selbst einen starken Prompt zusammen — wähl in jedem Slot die bessere Option.',
      slots: [
        {
          label: 'Rolle',
          options: ['Du bist Erzieherin in einer Kita.', 'Hi.'],
          correct: 0
        },
        {
          label: 'Aufgabe',
          options: ['Schreib was.', 'Schreib mir einen Elternbrief.'],
          correct: 1
        },
        {
          label: 'Kontext',
          options: [
            'Es geht um die Sommerfest-Einladung für unsere Kita-Gruppe der 4- bis 6-Jährigen, am 12. Juli, 15-18 Uhr, Eltern und Geschwister sind willkommen.',
            ''
          ],
          correct: 0
        },
        {
          label: 'Format',
          options: ['Egal.', 'Maximal 6 Sätze, freundlicher Ton, mit Zeit- und Ortsangabe und Bitte um RSVP.'],
          correct: 1
        }
      ]
    },
    {
      type: 'self-checklist',
      question: 'Bevor du in Lektion 3 weitergehst:',
      items: [
        'Ich habe verstanden: vier Hebel — Rolle, Aufgabe, Kontext, Format.',
        'Ich weiß, dass schwache Prompts nichts mit mir zu tun haben — sondern nur mit dem Werkzeug-Verständnis.',
        'Ich habe einmal selbst einen Prompt mit allen vier Hebeln gebaut.'
      ],
      note: 'Klasse — dieser eine Skill macht 80 Prozent des Unterschieds aus.'
    }
  ]
};
