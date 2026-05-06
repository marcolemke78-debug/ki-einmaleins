window.LESSON_07 = {
  id: 7,
  title: 'Lektion 7 — Bilder ins Spiel bringen',
  intro: { html: `
    <div class="warning-banner">
      <strong>⚠️ Tageslimit:</strong> Max. <strong>2 Bilder pro Tag</strong> in ChatGPT Free. Diese Lektion an einem anderen Tag als Lektion 6 machen — sonst rennst du in die Sperre.
    </div>
    <p>Foto rein, Frage stellen — das ist Multimodalität. Für dich als Sprachförderkraft <strong>besonders</strong> spannend, weil du damit Bildbeschreibungen in beliebigen Sprachen bekommst.</p>
    <p>Bild hochladen geht über die <strong>Büroklammer</strong> (gleiche Stelle wie für Dateien) oder per Drag-and-Drop.</p>
  ` },
  missions: [
    {
      type: 'live-mission',
      title: 'Mission 1: Bilderbuch-Foto erklären lassen',
      instruction: '<p>Mach ein Foto von einer Bilderbuchseite (oder nutze ein Bild aus dem Internet). Lade es in ChatGPT hoch, dann:</p>',
      promptToCopy: 'Beschreib mir, was auf diesem Bild zu sehen ist. Erkläre die Szene danach in einfacher, kindgerechter Sprache für ein 4-jähriges Kind, in maximal 5 Sätzen.',
      reflection: {
        type: 'multiple-choice',
        subjective: true,
        question: 'Wie hat die KI das Bild beschrieben?',
        options: ['Erstaunlich genau und kindgerecht', 'Sehr generisch / hat Details übersehen', 'Habe ich nicht ausprobiert'],
        correct: 0,
        explanation: 'Vision-Modelle sind 2026 enorm gut geworden. Daily-Use-Case: Sprachanlass im Morgenkreis ohne lange Vorbereitung.'
      }
    },
    {
      type: 'live-mission',
      title: 'Mission 2: Handgeschriebenen Zettel abtippen + übersetzen',
      instruction: '<p>Foto eines handgeschriebenen Zettels (eigene Notiz oder Bilderbuch-Untertitel). Hochladen, dann:</p>',
      promptToCopy: 'Tipp den Text auf dem Bild ab. Übersetz ihn danach auf Türkisch — gib beides untereinander aus, mit Zwischenüberschriften "Original" und "Türkisch".',
      reflection: {
        type: 'multiple-choice',
        subjective: true,
        question: 'Wie zuverlässig war das Abtippen?',
        options: ['Sehr genau, fast keine Fehler', 'Hat ein paar Wörter falsch erkannt', 'Habe ich nicht ausprobiert'],
        correct: 0,
        explanation: 'Bei deutlicher Handschrift sehr zuverlässig. Bei kritischen Texten lieber kurz drüberschauen — KI macht manchmal kleine Lese-Fehler.'
      }
    }
  ],
  practice: [
    {
      type: 'self-checklist',
      question: 'Bonus-Ideen für andere Tage:',
      items: [
        '"Beschreib das Bild auf Arabisch / Russisch / Englisch."',
        '"Welche 5 Fragen könnte ich Kindern dazu stellen?"',
        '"Erstell mir eine Sprachförder-Aktivität rund um dieses Bild."',
        '"Was sieht ein 3-jähriges Kind hier — was ein 6-jähriges?"'
      ],
      note: 'Bilder sind dein Sprachförder-Booster. Probiere die Bonus-Ideen morgen oder übermorgen aus.'
    },
    {
      type: 'self-checklist',
      question: 'Bevor du in Lektion 8 weitergehst:',
      items: [
        'Ich kann ein Bild hochladen (Büroklammer oder Drag-and-Drop).',
        'Ich kann nach einer Beschreibung fragen.',
        'Ich kann nach einer Übersetzung in beliebige Sprachen fragen.',
        'Ich respektiere das 2-Bilder-pro-Tag-Limit in Free.'
      ]
    }
  ]
};
