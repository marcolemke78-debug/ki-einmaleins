window.LESSON_03 = {
  id: 3,
  title: 'Lektion 3 — Du als Profi: Datenschutz',
  intro: { html: `
    <p>Hi Chrissi, du gehst täglich mit sensiblen Infos um — Beobachtungsbögen, Familiengeschichten, Entwicklungsstände. Da hast du längst ein Bauchgefühl: <em>"das geht / das geht nicht"</em>. Genau dieses Gefühl ist auch hier dein bester Kompass.</p>
    <h3>Drei einfache Profi-Regeln</h3>
    <ol>
      <li><strong>Echte Namen bleiben draußen.</strong> Statt "Lara M., 4 Jahre, Eltern getrennt" einfach "ein 4-jähriges Kind, dessen Eltern sich kürzlich getrennt haben". Reicht für jeden Prompt — die KI antwortet genauso gut.</li>
      <li><strong>Einmal beim Träger nachfragen.</strong> Manche Kitas haben klare Hausregeln zu KI. Frag einmal kurz nach — dann weißt du Bescheid und musst nicht jedes Mal überlegen.</li>
      <li><strong>Profi-Modus für Berufliches:</strong> Memory aus + "Temporary Chat" (zeig ich dir in Lektion 5). Wie ein Gespräch, das nach dem Schließen vergessen ist.</li>
    </ol>
    <details class="expand">
      <summary>Wenn du es genau wissen willst: Warum Free streng zu sehen ist</summary>
      <p>ChatGPT Free hat keinen Auftragsverarbeitungsvertrag (AVV) mit deinem Träger — das ist die rechtliche Form, die für berufliche personenbezogene Daten nötig wäre. Konsequenz: Beruflich nur fiktive oder vollständig anonymisierte Inhalte. Mit "echte Namen draußen" bist du auf der sicheren Seite.</p>
    </details>
  ` },
  missions: [
    {
      type: 'data-decision',
      title: 'Üben: Was darf rein?',
      question: 'Pro Beispiel: Darf so rein, anonymisieren, oder lieber gar nicht?',
      cases: [
        {
          text: 'Wie kann ich Lara M. (4) fördern, deren Eltern sich gerade getrennt haben?',
          correct: 'anonymisieren',
          explanation: 'Lara M. ist ein konkreter Name. Anonymisieren auf "ein 4-jähriges Kind, dessen Eltern sich kürzlich getrennt haben" — die KI kann genauso gut antworten.'
        },
        {
          text: 'Wie kann ich ein 4-jähriges Kind sprachlich fördern, dessen Eltern sich kürzlich getrennt haben?',
          correct: 'rein',
          explanation: 'Genau! Anonymisiert, kein Name, keine Identifizierung. Profi-Stil.'
        },
        {
          text: 'Hier ist der komplette Beobachtungsbogen von Familie Yilmaz für Yusuf, 5 Jahre, mit Diagnose Z.',
          correct: 'gar-nicht',
          explanation: 'Voller Bogen mit Namen, Familie und Diagnose: das gehört nicht in ChatGPT Free, auch nicht "nur kurz". Fass es selbst zusammen, anonymisiere — dann darf das Ergebnis ggf. rein.'
        },
        {
          text: 'Schreib mir 5 Sprachförder-Ideen rund um das Bilderbuch "Der Grüffelo".',
          correct: 'rein',
          explanation: 'Keine personenbezogenen Daten, freie Bahn.'
        },
        {
          text: 'Mein Kollege Markus Bauer wirkt seit Wochen überlastet — wie spreche ich ihn an?',
          correct: 'anonymisieren',
          explanation: 'Auch Kolleg:innen sind personenbezogen. Besser: "Wie spreche ich eine Kollegin an, die seit Wochen überlastet wirkt?"'
        },
        {
          text: 'Übersetze diesen anonymen Eltern-Infozettel in einfache Sprache: [Text ohne Namen].',
          correct: 'rein',
          explanation: 'Perfekt — kein personenbezogener Inhalt, klar fürs Prompten.'
        }
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
