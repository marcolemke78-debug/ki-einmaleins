window.LESSON_04 = {
  id: 4,
  title: 'Lektion 4 — Prompten in der Erzieher-Praxis',
  intro: { html: `
    <p>Jetzt nutzen wir die 4 Hebel im echten Erzieher-Alltag — alle Beispiele mit fiktiven Familien (Datenschutz aus Lektion 3 sitzt ja).</p>
    <p>Du sammelst hier konkrete Vorlagen, die du direkt übernehmen und für deine Situation anpassen kannst.</p>
  ` },
  missions: [
    {
      type: 'live-mission',
      title: 'Mission 1: Elternbrief Sommerfest',
      instruction: '<p>Eine klassische Einladung. Schau, wie kompakt die KI das hinkriegt, wenn der Prompt klar ist.</p>',
      promptToCopy: 'Du bist Erzieherin in einer Kita. Schreib mir einen Elternbrief: Einladung zum Sommerfest unserer Sonnenblumen-Gruppe (4-6 Jahre) am Freitag, 12. Juli, 15-18 Uhr im Kita-Garten. Eltern und Geschwister willkommen, Picknick wäre schön (jede Familie bringt was mit). Format: maximal 8 Sätze, freundlich, mit Bitte um RSVP bis 5. Juli.',
      reflection: {
        type: 'multiple-choice',
        question: 'War der Brief direkt nutzbar oder hast du ihn umformuliert?',
        options: ['Fast 1:1 nutzbar — nur Kleinigkeiten angepasst', 'Komplett überschrieben', 'Ich habe gar nicht ausprobiert'],
        correct: 0,
        explanation: 'Genau das ist der Effekt: mit klarem Prompt liefert die KI direkt nutzbaren Text. Kein Schreibblockaden-Frust mehr.'
      }
    },
    {
      type: 'live-mission',
      title: 'Mission 2: Sprachförder-Idee zum Bilderbuch',
      instruction: '<p>Du bist Sprachförderkraft — die KI kann hier deine Ideen ergänzen, nicht ersetzen.</p>',
      promptToCopy: 'Du bist Sprachförderkraft in einer Kita. Schlag mir 5 konkrete Sprachförder-Aktivitäten zum Bilderbuch "Der Grüffelo" vor — für eine Kleingruppe von 4 Kindern, 4-5 Jahre, gemischter Sprachstand (Deutsch, Türkisch, Arabisch). Format: nummerierte Liste, je Aktivität max. 3 Sätze, mit klarem Lernziel.',
      reflection: {
        type: 'multiple-choice',
        question: 'Was war die Stärke der KI-Antwort?',
        options: ['Ideen, auf die ich selbst nicht sofort gekommen wäre', 'Sehr generisch, hat mir nichts gebracht', 'Gut als Brainstorm-Anker, weiterentwickeln muss ich selbst'],
        correct: 2,
        explanation: 'Genau die richtige Haltung — KI als Brainstorm-Partner, nicht als Ersatz für deine Fachexpertise.'
      }
    },
    {
      type: 'live-mission',
      title: 'Mission 3: Beobachtungsbogen-Notiz umformulieren',
      instruction: '<p>Aus Stichpunkten einen fließenden Text machen — anonymisierte Beispieldaten, du übersetzt das später für deine echten Notizen.</p>',
      promptToCopy: 'Du bist Erzieherin. Schreib aus diesen Stichpunkten einen sachlichen, fließenden Beobachtungstext (5-7 Sätze, neutraler Ton, in der Vergangenheitsform): "Kind 4 Jahre / Freispiel / Bauecke / mit zwei anderen Kindern / Konflikt um Bauklötze / hat Klotz weggenommen / wurde laut / nach 2 Min beruhigt / weitergespielt / nach Vorfall ruhiger".',
      reflection: {
        type: 'multiple-choice',
        question: 'Vorher Stichpunkte, jetzt fließender Text — wie schnell ging das?',
        options: ['In Sekunden, riesige Zeitersparnis', 'Hat zu viel ausgeschmückt, musste viel kürzen', 'Habe ich noch nicht ausprobiert'],
        correct: 0,
        explanation: 'Klassischer Time-Saver. Wenn die KI mal zu blumig schreibt: Format-Hebel anziehen ("nüchtern, sachlich, kurz").'
      }
    },
    {
      type: 'live-mission',
      title: 'Mission 4: Einfache Sprache — der Killer-Use-Case',
      instruction: '<p>Das ist <strong>die</strong> KI-Anwendung für Sprachförderkräfte. Eltern mit wenig Deutschkenntnissen kriegen verständliche Infos. Probier den Vorher-Nachher-Effekt:</p>',
      promptToCopy: 'Übersetze den folgenden Eltern-Infotext in einfache Sprache (kurze Sätze, einfache Wörter, keine Fachbegriffe): "Im Rahmen unserer pädagogischen Arbeit legen wir großen Wert auf die individuelle Begleitung jedes Kindes. Sollten Sie Fragen zur Entwicklung Ihres Kindes haben, kontaktieren Sie uns bitte zeitnah, damit wir gemeinsam einen Termin für ein ausführliches Entwicklungsgespräch finden können."',
      reflection: {
        type: 'multiple-choice',
        question: 'Wie war das Ergebnis im Vergleich zum Original?',
        options: ['Viel verständlicher, Eltern werden das verstehen', 'Zu vereinfacht, klang kindisch', 'War schon vorher einfach genug'],
        correct: 0,
        explanation: 'Bingo. Du kannst auch nachsteuern: "noch einfacher, max. 6-Wort-Sätze" oder "auf Türkisch übersetzen". Probier es aus.'
      }
    }
  ],
  practice: [
    {
      type: 'self-checklist',
      question: 'Antwort kopieren — drei Wege auf dem iPad:',
      items: [
        'Ich kann Text in der ChatGPT-Antwort markieren (gedrückt halten) und mit "Kopieren" in die Zwischenablage holen.',
        'Ich kann oben rechts an jeder Antwort den Kopier-Button (Symbol mit zwei Rechtecken) nutzen — kopiert die ganze Antwort.',
        'Ich kann die kopierte Antwort in Mail, Notizen oder Word einfügen (gedrückt halten + "Einsetzen").'
      ],
      note: 'Ein einziges Mal probiert — und du machst es nie wieder anders.'
    },
    {
      type: 'self-checklist',
      question: 'Bevor du in Lektion 5 weitergehst:',
      items: [
        'Ich habe mindestens 2 der 4 Missionen wirklich in ChatGPT ausprobiert.',
        'Ich erkenne, wann ich an welcher Stellschraube drehen muss (Rolle, Aufgabe, Kontext, Format).',
        'Ich weiß: einfache Sprache übersetzen ist mein Daily-Use-Case.'
      ],
      note: 'Du sammelst gerade konkrete Vorlagen für deinen Alltag — genau darum geht es.'
    }
  ]
};
