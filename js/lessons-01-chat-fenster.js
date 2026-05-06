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
      placeholder: 'Chrissi, mach hier später einen Screenshot deiner ChatGPT-Oberfläche und ersetze die Datei assets/screenshots/01-overview.png.',
      image: null,
      targets: [
        { x: 0, y: 0, w: 25, h: 100, label: 'Linke Seitenleiste mit deinen Chats' },
        { x: 30, y: 90, w: 60, h: 8, label: 'Eingabefeld unten in der Mitte' },
        { x: 35, y: 92, w: 4, h: 6, label: 'Büroklammer für Datei-Uploads' },
        { x: 85, y: 92, w: 4, h: 6, label: 'Mikrofon-Symbol zum Diktieren' },
        { x: 30, y: 5, w: 30, h: 5, label: 'Modell-Anzeige + Thinking-Toggle' },
        { x: 90, y: 5, w: 8, h: 8, label: 'Profil-Menü (deine Initialen oben rechts)' }
      ]
    },
    {
      type: 'live-mission',
      title: 'Mission: Diktieren statt tippen',
      instruction: '<p>Klick in ChatGPT auf das <strong>Mikrofon-Symbol</strong> rechts neben dem Eingabefeld. Sprech den Satz unten ein — du musst nichts tippen.</p><p>Zum Vorlesen lassen: nach der Antwort siehst du unter dem Text einen <strong>Lautsprecher</strong>. Probier ihn aus.</p>',
      promptToCopy: 'Erzähl mir in zwei Sätzen, was eine Erzieherin in einer Sprachfördergruppe typischerweise macht.',
      reflection: {
        type: 'multiple-choice',
        question: 'Wie war es, einen Prompt einzusprechen statt zu tippen?',
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
        'Ich weiß, wo der Modell- und Thinking-Schalter ist',
        'Ich habe das Profil-Menü mit den Einstellungen gefunden'
      ],
      note: 'Wenn alle Häkchen drin sind: Glückwunsch, du kennst dich aus.'
    }
  ]
};
