window.LESSON_08 = {
  id: 8,
  title: 'Lektion 8 — Was die KI nicht kann',
  intro: { html: `
    <p>Eine ehrliche Wahrheit: ChatGPT <em>weiß</em> eigentlich nichts. Es <em>vorhersagt</em> nur Text. Wenn es etwas nicht weiß, schreibt es trotzdem überzeugt klingenden Unsinn — das nennt man <strong>Halluzination</strong>.</p>
    <p><strong>Stand Mai 2026:</strong> Free-Modelle haben ihren Wissensschluss im <strong>August 2025</strong> — also rund 9 Monate alt. Alles, was danach passiert ist, kennt die KI nicht — und erfindet im Zweifel etwas.</p>
    <p>Das ist nicht "Schummelei", sondern eine Eigenschaft des Werkzeugs. Wenn du das weißt, kannst du dich schützen.</p>
    <h3>Die Faustregel</h3>
    <p>KI ist <strong>gut</strong> für Formulierungen, Zusammenfassungen, Stilarbeit, Brainstorming. KI ist <strong>gefährlich</strong> bei Fakten, Quellen, Daten, Personen — alles, was nachweisbar wahr oder falsch sein muss.</p>
  ` },
  missions: [
    {
      type: 'live-mission',
      title: 'Mission 1: Live-Halluzination provozieren',
      instruction: '<p>Frag ChatGPT nach einem erfundenen Buch. Schau, was passiert:</p>',
      promptToCopy: 'Was ist die Kernaussage des Buchs "Der blaue Wal" von Klaus Müller? Wann ist es erschienen?',
      reflection: {
        type: 'multiple-choice',
        subjective: true,
        question: 'Wie hat ChatGPT geantwortet?',
        options: [
          'Hat selbstbewusst Inhalt und Erscheinungsjahr erfunden',
          'Hat ehrlich gesagt: "Das Buch kenne ich nicht"',
          'Hat mehrere Klaus Müllers vorgeschlagen, war unklar'
        ],
        correct: 0,
        explanation: 'Klassische Halluzination. Modernere Modelle sagen manchmal "kenne ich nicht" — aber verlassen kannst du dich nicht drauf. Bei Fakten: immer nachprüfen.'
      }
    },
    {
      type: 'hallucination-mark',
      title: 'Mission 2: Halluzinationen erkennen',
      question: 'Die KI hat dir folgende Antwort gegeben. Klick alle Sätze an, die dir verdächtig vorkommen — drück dann "Auswertung anzeigen".',
      sentences: [
        'Bilderbücher sind ein zentrales Werkzeug der frühkindlichen Sprachförderung.',
        'Die Methode wurde 1973 von der Erzieherin Hannelore Schmidt in Hamburg entwickelt.',
        'Studien zeigen, dass dialogisches Vorlesen den Wortschatz von 4-Jährigen um durchschnittlich 47 Prozent steigert.',
        'Wichtig ist, dass Erzieher:innen offene Fragen stellen, nicht nur den Text vorlesen.',
        'Das Bilderbuch "Der Grüffelo" eignet sich besonders gut für mehrsprachige Gruppen.'
      ],
      problematic: [1, 2]
    },
    {
      type: 'live-mission',
      title: 'Mission 3: Wissens-Cutoff testen',
      instruction: '<p>ChatGPT hat einen "Wissens-Cutoff" — ab einem Datum (oft Monate alt) weiß es nichts mehr. Probier:</p>',
      promptToCopy: 'Welche pädagogischen Trends gab es im April 2026 in der deutschen Kita-Landschaft?',
      reflection: {
        type: 'multiple-choice',
        subjective: true,
        question: 'Wie hat ChatGPT reagiert?',
        options: [
          'Hat klar gesagt: aktuelle Daten habe ich nicht',
          'Hat irgendwas Generisches geschrieben, ohne auf das Datum einzugehen',
          'Hat selbstbewusst aktuelle Trends erfunden'
        ],
        correct: 0,
        explanation: 'Idealerweise sagt die KI ehrlich, dass sie keine aktuellen Daten hat. Tut sie das nicht — Vorsicht, das ist möglicherweise erfunden. Faustregel: Frischer Content braucht Webrecherche, nicht KI.'
      }
    }
  ],
  practice: [
    {
      type: 'self-checklist',
      question: 'Bevor du in Lektion 9 weitergehst:',
      items: [
        'Ich weiß: KI kann Fakten erfinden — vor allem bei Personen, Büchern, Zahlen, Quellen.',
        'Ich verifiziere Faktenangaben über andere Wege (Google, offizielle Quellen).',
        'Ich nutze KI bewusst für Formulierungen, Stil und Brainstorming — nicht als Wahrheits-Quelle.',
        'Ich erkenne den Wissens-Cutoff und frage nicht nach aktuellen Ereignissen.'
      ],
      note: 'Du bist jetzt nicht mehr "blöd, wenn was nicht klappt" — du verstehst, an welcher Stellschraube du drehen musst. Das ist der Skill.'
    }
  ]
};
