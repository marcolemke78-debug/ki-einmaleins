window.LESSON_05 = {
  id: 5,
  title: 'Lektion 5 — Chat-Hygiene & Chat-Verwaltung',
  intro: { html: `
    <p>Hast du schon mal bemerkt, dass ChatGPT in einem langen Chat irgendwann <em>schlechter</em> wird? Antworten werden ungenauer, die KI vergisst, was am Anfang besprochen wurde?</p>
    <p>Das liegt nicht an dir. Das liegt am <strong>Kontextfenster</strong> — quasi dem Kurzzeitgedächtnis der KI. Je voller, desto schlechter die Vorhersagen.</p>
    <h3>Eine einfache Regel</h3>
    <p><strong>Ein Thema = ein Chat.</strong> Bei Themenwechsel: neuer Chat. Du bist nicht "verschwenderisch", die KI mag das.</p>
  ` },
  missions: [
    {
      type: 'live-mission',
      title: 'Mission: Den Effekt selbst spüren',
      instruction: '<p>Wenn du noch einen alten, vollen Chat hast (oder einen, in dem du schon viel hin und her gechattet hast), probier dort eine neue Frage. Dann: oben links auf "Neuer Chat", gleiche Frage. Vergleich.</p><p>Falls du keinen alten vollen Chat hast — überspring diese Mission und gehe direkt zu Teil B unten.</p>',
      promptToCopy: 'Fass mir in 3 Punkten zusammen, was wir gerade besprochen haben.',
      reflection: {
        type: 'multiple-choice',
        question: 'Hast du den Unterschied gespürt?',
        options: ['Ja, neuer Chat war deutlich klarer', 'Kein großer Unterschied', 'Habe ich nicht ausprobiert'],
        correct: 0,
        explanation: 'Genau das ist der Effekt. Mit der Regel "ein Thema = ein Chat" bleibt die KI immer scharf.'
      }
    },
    {
      type: 'multiple-choice',
      title: 'Verwaltung: Chats umbenennen, löschen, finden',
      question: 'In der Seitenleiste links: Wie benennst du einen Chat um?',
      options: [
        'Auf den Chat-Titel klicken oder doppeltippen',
        'Den Chat löschen und neu starten',
        'Geht nicht, die KI vergibt den Titel automatisch'
      ],
      correct: 0,
      explanation: 'Genau — Klick (oder Tap) auf den Titel, dann editieren. Lösch- und Archivier-Optionen gibt es im 3-Punkte-Menü neben dem Chat.'
    }
  ],
  practice: [
    {
      type: 'self-checklist',
      question: 'Profi-Tipp: Memory & Temporary Chat (entspannt)',
      items: [
        'Ich weiß, dass ChatGPT seit 2025 ein "Memory"-Feature hat — speichert Sachen aus alten Chats. Cool für privat.',
        'Für berufliche Sachen kann ich den "Temporary Chat" nutzen — wie ein Inkognito-Fenster: nichts wird gemerkt.',
        'Memory-Schalter finde ich in den Settings (Profil-Menü oben rechts → Personalization → Memory). Anlassen oder ausmachen ist deine Entscheidung.'
      ],
      note: 'Viele Profis machen Memory aus, aber kein Muss. Wichtig ist nur: für berufliche Daten Temporary Chat nutzen, dann gibt es keine Überraschungen.'
    },
    {
      type: 'self-checklist',
      question: 'Bevor du in Lektion 6 weitergehst:',
      items: [
        'Ich verstehe: lange Chats werden schlechter (Kontextfenster).',
        'Ein Thema = ein Chat. Bei Themenwechsel: neuer Chat.',
        'Ich kann Chats umbenennen und löschen.',
        'Ich kenne den Temporary-Chat-Modus für Berufliches.'
      ]
    }
  ]
};
