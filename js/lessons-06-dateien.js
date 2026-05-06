window.LESSON_06 = {
  id: 6,
  title: 'Lektion 6 — Mit Dateien arbeiten',
  intro: { html: `
    <div class="warning-banner">
      <strong>⚠️ Wichtig vorab:</strong> ChatGPT Free erlaubt nur <strong>3 Datei-Uploads pro 24 Stunden insgesamt</strong> (Dateien + Bilder kombiniert, max. 2 Bilder). Diese Lektion und Lektion 7 zusammen brauchen mehr — verteile sie auf <strong>zwei Tage</strong>.
    </div>
    <p>Endlich der Pain-Point: Wie kriege ich ein PDF in ChatGPT, lasse es zusammenfassen oder umarbeiten?</p>
    <p>Ganz einfach: <strong>Büroklammer</strong> im Eingabefeld → Datei auswählen → Frage stellen.</p>
    <p>In dieser Lektion zwei Missionen — pro Sitzung max. 2, der Rest am nächsten Tag.</p>
  ` },
  missions: [
    {
      type: 'live-mission',
      title: 'Mission 1: PDF zusammenfassen + in einfache Sprache übersetzen',
      instruction: '<p>Du brauchst ein <em>fiktives</em> oder <em>anonymisiertes</em> PDF — z.B. einen alten Eltern-Infozettel ohne echte Namen. Falls du keins hast: erstell schnell ein Word-Dokument mit ein paar Absätzen Beispieltext und exportier als PDF.</p><p>Klick auf die Büroklammer in ChatGPT, lade die Datei hoch, dann diesen Prompt:</p>',
      promptToCopy: 'Fass mir das PDF in maximal 5 Sätzen zusammen. Übersetze die Zusammenfassung danach in einfache Sprache (kurze Sätze, keine Fachbegriffe) — als zweiten Block unter der ersten Zusammenfassung.',
      reflection: {
        type: 'multiple-choice',
        question: 'Wie war das?',
        options: ['Gigantische Zeitersparnis', 'Hat das PDF gar nicht "verstanden"', 'Habe ich nicht ausprobiert'],
        correct: 0,
        explanation: 'Das ist der Daily-Use-Case. Beobachtungsbögen anonymisieren, hochladen, zusammenfassen — passt fast immer.'
      }
    },
    {
      type: 'live-mission',
      title: 'Mission 2: Word-Dokument verbessern',
      instruction: '<p>Lad ein Word-Dokument hoch (eigener Text, keine echten Namen). Lass die KI den Stil verbessern, dann kopier den Text raus zurück in dein Word.</p>',
      promptToCopy: 'Verbessere den Text aus dem hochgeladenen Dokument in Klarheit und Stil. Behalt den Inhalt 1:1 — nur Formulierungen und Satzstruktur dürfen sich ändern. Gib mir den überarbeiteten Text als reinen Fließtext zurück, ohne Kommentar.',
      reflection: {
        type: 'multiple-choice',
        question: 'Wie war die Stil-Überarbeitung?',
        options: ['Klar besser, übernehme ich so', 'Hat den Inhalt verändert (sollte sie nicht)', 'Hat alles gleich gelassen'],
        correct: 0,
        explanation: 'Wenn die KI den Inhalt verändert: Format-Hebel anziehen ("Inhalt 1:1 beibehalten, nur Stil"). Probier auch "freundlicher" oder "knackiger".'
      }
    }
  ],
  practice: [
    {
      type: 'self-checklist',
      question: 'Was du jetzt kannst:',
      items: [
        'PDF hochladen über die Büroklammer.',
        'Zusammenfassung anfordern (mit Format-Vorgabe).',
        'In einfache Sprache übersetzen lassen.',
        'Word-Dokument hochladen, verbessern lassen, Text rauskopieren.',
        'Ich respektiere das Tageslimit (3 Uploads / 24 h, davon max. 2 Bilder).'
      ],
      note: 'Bonus-Idee für morgen: "Schreib mir basierend auf diesem PDF eine kurze Antwort an die Eltern."'
    }
  ]
};
