const Exercises = {
  render(exercise, id) {
    const fn = Exercises[`render_${exercise.type.replace(/-/g, '_')}`];
    if (!fn) return `<div class="card">Unbekannter Uebungstyp: ${exercise.type}</div>`;
    return fn(exercise, id);
  },

  bindAll(scope) {
    scope.querySelectorAll('.copy-btn').forEach((btn) => {
      btn.addEventListener('click', () => Exercises.copyFromTarget(btn));
    });
    scope.querySelectorAll('[data-exercise="multiple-choice"]').forEach((root) => {
      Exercises.bindMultipleChoice(root);
    });
    scope.querySelectorAll('[data-exercise="prompt-comparison"]').forEach((root) => {
      Exercises.bindPromptComparison(root);
    });
    scope.querySelectorAll('[data-exercise="prompt-builder"]').forEach((root) => {
      Exercises.bindPromptBuilder(root);
    });
    scope.querySelectorAll('[data-exercise="interface-find"]').forEach((root) => {
      Exercises.bindInterfaceFind(root);
    });
    scope.querySelectorAll('[data-exercise="hallucination-mark"]').forEach((root) => {
      Exercises.bindHallucinationMark(root);
    });
    scope.querySelectorAll('[data-exercise="data-decision"]').forEach((root) => {
      Exercises.bindDataDecision(root);
    });
  },

  copyFromTarget(btn) {
    const targetId = btn.dataset.copyFrom;
    const el = document.getElementById(targetId);
    if (!el) return;
    const text = el.textContent;
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = '✓ Kopiert!';
      btn.classList.add('is-copied');
      setTimeout(() => {
        btn.textContent = '📋 Prompt kopieren';
        btn.classList.remove('is-copied');
      }, 2200);
    }).catch(() => {
      alert('Kopieren ging nicht. Markier den Text manuell und kopier ihn mit Cmd+C.');
    });
  },

  render_multiple_choice(ex, id) {
    const choices = ex.options.map((opt, i) =>
      `<button class="choice" type="button" data-index="${i}">${opt}</button>`
    ).join('');
    return `
      <div class="card" data-exercise="multiple-choice"
           data-correct="${ex.correct}"
           data-explanation="${Renderer.escapeHtml(ex.explanation || '')}">
        ${ex.question ? `<h3 class="card__title">${ex.question}</h3>` : ''}
        <div class="choices">${choices}</div>
        <div class="feedback" hidden></div>
      </div>
    `;
  },

  render_prompt_comparison(ex, id) {
    const cards = ex.prompts.map((p, i) =>
      `<button class="prompt-card" type="button" data-index="${i}">
        <div class="prompt-card__label">Prompt ${String.fromCharCode(65 + i)}</div>
        <div class="prompt-card__text">${Renderer.escapeHtml(p)}</div>
      </button>`
    ).join('');
    return `
      <div class="card" data-exercise="prompt-comparison"
           data-correct="${ex.correct}"
           data-explanation="${Renderer.escapeHtml(ex.explanation || '')}">
        ${ex.question ? `<h3 class="card__title">${ex.question}</h3>` : ''}
        <div class="prompt-grid">${cards}</div>
        <div class="feedback" hidden></div>
      </div>
    `;
  },

  bindPromptComparison(root) {
    const correct = parseInt(root.dataset.correct, 10);
    const explanation = root.dataset.explanation;
    const feedback = root.querySelector('.feedback');
    root.querySelectorAll('.prompt-card').forEach((card) => {
      card.addEventListener('click', () => {
        if (root.dataset.locked === 'true') return;
        root.dataset.locked = 'true';
        const i = parseInt(card.dataset.index, 10);
        const correctEl = root.querySelectorAll('.prompt-card')[correct];
        correctEl.classList.add('is-correct');
        if (i === correct) {
          feedback.className = 'feedback feedback--correct';
          feedback.innerHTML = '✓ ' + (explanation || 'Richtig!');
        } else {
          card.classList.add('is-wrong');
          feedback.className = 'feedback feedback--wrong';
          feedback.innerHTML = explanation || 'Schau dir Prompt ' + String.fromCharCode(65 + correct) + ' nochmal an.';
        }
        feedback.hidden = false;
      });
    });
  },

  render_prompt_builder(ex, id) {
    const slotsHtml = ex.slots.map((slot, sIdx) => {
      const opts = slot.options.map((opt, oIdx) =>
        `<button class="builder-option" type="button" data-slot="${sIdx}" data-option="${oIdx}">${Renderer.escapeHtml(opt)}</button>`
      ).join('');
      return `
        <div class="builder-slot" data-slot="${sIdx}">
          <div class="builder-slot__label">${slot.label}</div>
          <div class="builder-slot__chosen" data-chosen></div>
          <div class="builder-slot__options">${opts}</div>
        </div>
      `;
    }).join('');
    return `
      <div class="card" data-exercise="prompt-builder" data-correct='${JSON.stringify(ex.slots.map((s) => s.correct))}'>
        ${ex.question ? `<h3 class="card__title">${ex.question}</h3>` : ''}
        ${slotsHtml}
        <div class="builder-result" hidden>
          <div class="builder-result__label">Dein Prompt:</div>
          <div class="prompt-box" data-result></div>
          <button class="copy-btn" type="button" data-copy-from-builder>📋 Diesen Prompt kopieren</button>
        </div>
        <button class="btn" type="button" data-builder-check>Prompt zusammensetzen</button>
        <div class="feedback" hidden></div>
      </div>
    `;
  },

  bindPromptBuilder(root) {
    const correct = JSON.parse(root.dataset.correct);
    const chosen = correct.map(() => null);

    root.querySelectorAll('.builder-option').forEach((btn) => {
      btn.addEventListener('click', () => {
        const s = parseInt(btn.dataset.slot, 10);
        const o = parseInt(btn.dataset.option, 10);
        chosen[s] = { o, text: btn.textContent };
        const slotEl = root.querySelector(`.builder-slot[data-slot="${s}"]`);
        slotEl.querySelector('[data-chosen]').textContent = btn.textContent;
        slotEl.querySelectorAll('.builder-option').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
      });
    });

    root.querySelector('[data-builder-check]').addEventListener('click', () => {
      if (chosen.some((c) => c === null)) {
        alert('Wähl bitte für jeden Baustein eine Option.');
        return;
      }
      const allCorrect = chosen.every((c, i) => c.o === correct[i]);
      const feedback = root.querySelector('.feedback');
      const resultBox = root.querySelector('.builder-result');
      const result = chosen.map((c) => c.text).join(' ');
      resultBox.querySelector('[data-result]').textContent = result;
      resultBox.hidden = false;
      feedback.hidden = false;
      feedback.className = 'feedback ' + (allCorrect ? 'feedback--correct' : 'feedback--wrong');
      feedback.innerHTML = allCorrect
        ? '✓ Genau diese Bausteine ergeben einen starken Prompt — kopier ihn dir und probier ihn aus.'
        : 'Fast! Schau dir die Bausteine nochmal an — manche passen besser zu Erzieher-Alltag.';
    });

    root.querySelector('[data-copy-from-builder]').addEventListener('click', (e) => {
      const text = root.querySelector('[data-result]').textContent;
      navigator.clipboard.writeText(text).then(() => {
        e.currentTarget.textContent = '✓ Kopiert!';
        setTimeout(() => { e.currentTarget.textContent = '📋 Diesen Prompt kopieren'; }, 2200);
      });
    });
  },

  render_interface_find(ex, id) {
    const targets = ex.targets.map((t, i) =>
      `<button class="hotspot" type="button" data-target="${i}"
        style="left:${t.x}%;top:${t.y}%;width:${t.w}%;height:${t.h}%"
        aria-label="${Renderer.escapeHtml(t.label)}"></button>`
    ).join('');
    const checklist = ex.targets.map((t, i) =>
      `<li data-target="${i}">${Renderer.escapeHtml(t.label)}</li>`
    ).join('');
    const imgHtml = ex.image
      ? `<img src="${ex.image}" alt="ChatGPT-Screenshot" class="hotspot-image" />`
      : `<div class="screenshot-placeholder">📸 Hier kommt dein ChatGPT-Screenshot hin.<br><small>${ex.placeholder || 'Bild fehlt noch.'}</small></div>`;
    return `
      <div class="card" data-exercise="interface-find">
        ${ex.question ? `<h3 class="card__title">${ex.question}</h3>` : ''}
        <div class="hotspot-wrap">
          ${imgHtml}
          ${ex.image ? targets : ''}
        </div>
        <ol class="hotspot-checklist">${checklist}</ol>
        <div class="feedback" hidden></div>
      </div>
    `;
  },

  bindInterfaceFind(root) {
    const total = root.querySelectorAll('.hotspot-checklist li').length;
    let found = 0;
    root.querySelectorAll('.hotspot').forEach((spot) => {
      spot.addEventListener('click', () => {
        if (spot.classList.contains('is-found')) return;
        spot.classList.add('is-found');
        const idx = spot.dataset.target;
        const li = root.querySelector(`.hotspot-checklist li[data-target="${idx}"]`);
        if (li) li.classList.add('is-found');
        found += 1;
        if (found === total) {
          const fb = root.querySelector('.feedback');
          fb.className = 'feedback feedback--correct';
          fb.innerHTML = '✓ Du hast alle Knöpfe gefunden — du kennst dich aus!';
          fb.hidden = false;
        }
      });
    });
  },

  render_hallucination_mark(ex, id) {
    const sentencesHtml = ex.sentences.map((s, i) =>
      `<span class="halluc-sentence" data-index="${i}">${Renderer.escapeHtml(s)}</span> `
    ).join('');
    return `
      <div class="card" data-exercise="hallucination-mark"
           data-problematic='${JSON.stringify(ex.problematic)}'
           data-reasons='${JSON.stringify(ex.reasons || ['erfunden', 'unbelegt', 'widerspricht Wissen'])}'>
        ${ex.question ? `<h3 class="card__title">${ex.question}</h3>` : ''}
        <p class="halluc-text">${sentencesHtml}</p>
        <p class="copy-hint">Klick alle Satze an, die dir verdachtig vorkommen.</p>
        <button class="btn" type="button" data-halluc-check>Auswertung anzeigen</button>
        <div class="feedback" hidden></div>
      </div>
    `;
  },

  bindHallucinationMark(root) {
    const problematic = JSON.parse(root.dataset.problematic);
    const selected = new Set();

    root.querySelectorAll('.halluc-sentence').forEach((s) => {
      s.addEventListener('click', () => {
        const i = parseInt(s.dataset.index, 10);
        if (selected.has(i)) {
          selected.delete(i); s.classList.remove('is-selected');
        } else {
          selected.add(i); s.classList.add('is-selected');
        }
      });
    });

    root.querySelector('[data-halluc-check]').addEventListener('click', () => {
      const sentences = root.querySelectorAll('.halluc-sentence');
      let correctCount = 0;
      sentences.forEach((s, i) => {
        const isProblem = problematic.includes(i);
        const wasSelected = selected.has(i);
        s.classList.remove('is-selected');
        if (isProblem && wasSelected) { s.classList.add('is-correct'); correctCount += 1; }
        else if (isProblem && !wasSelected) { s.classList.add('is-missed'); }
        else if (!isProblem && wasSelected) { s.classList.add('is-wrong'); }
      });
      const fb = root.querySelector('.feedback');
      fb.hidden = false;
      fb.className = 'feedback ' + (correctCount === problematic.length ? 'feedback--correct' : 'feedback--wrong');
      fb.innerHTML = `Du hast ${correctCount} von ${problematic.length} Halluzinationen erkannt. Grun = richtig markiert, Gelb = ubersehen, Rot = falschlich markiert.`;
    });
  },

  render_data_decision(ex, id) {
    const casesHtml = ex.cases.map((c, i) =>
      `<div class="data-case" data-case="${i}" data-correct="${c.correct}"
            data-explanation="${Renderer.escapeHtml(c.explanation || '')}">
        <div class="data-case__text">${Renderer.escapeHtml(c.text)}</div>
        <div class="data-case__buttons">
          <button class="btn btn--ghost data-decision-btn" type="button" data-choice="rein">Darf so rein</button>
          <button class="btn btn--ghost data-decision-btn" type="button" data-choice="anonymisieren">Anonymisieren</button>
          <button class="btn btn--ghost data-decision-btn" type="button" data-choice="gar-nicht">Lieber gar nicht</button>
        </div>
        <div class="feedback" hidden></div>
      </div>`
    ).join('');
    return `
      <div class="card" data-exercise="data-decision">
        ${ex.question ? `<h3 class="card__title">${ex.question}</h3>` : ''}
        ${casesHtml}
      </div>
    `;
  },

  bindDataDecision(root) {
    root.querySelectorAll('.data-case').forEach((c) => {
      const correct = c.dataset.correct;
      const explanation = c.dataset.explanation;
      const fb = c.querySelector('.feedback');
      c.querySelectorAll('.data-decision-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (c.dataset.locked === 'true') return;
          c.dataset.locked = 'true';
          const choice = btn.dataset.choice;
          if (choice === correct) {
            btn.classList.add('is-correct');
            fb.className = 'feedback feedback--correct';
            fb.innerHTML = '✓ Genau — das hast du längst im Gefühl. Profi-Reflex.';
          } else {
            btn.classList.add('is-wrong');
            c.querySelector(`[data-choice="${correct}"]`).classList.add('is-correct');
            fb.className = 'feedback feedback--wrong';
            fb.innerHTML = explanation || 'Schau nochmal hin — was würdest du auch deiner Kollegin nicht über Familie X erzählen?';
          }
          fb.hidden = false;
        });
      });
    });
  },

  bindMultipleChoice(root) {
    const correct = parseInt(root.dataset.correct, 10);
    const explanation = root.dataset.explanation;
    const feedback = root.querySelector('.feedback');
    root.querySelectorAll('.choice').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (root.dataset.locked === 'true') return;
        root.dataset.locked = 'true';
        const i = parseInt(btn.dataset.index, 10);
        if (i === correct) {
          btn.classList.add('is-correct');
          feedback.className = 'feedback feedback--correct';
          feedback.hidden = false;
          feedback.innerHTML = '✓ ' + (explanation || 'Richtig!');
        } else {
          btn.classList.add('is-wrong');
          root.querySelectorAll('.choice')[correct].classList.add('is-correct');
          feedback.className = 'feedback feedback--wrong';
          feedback.hidden = false;
          feedback.innerHTML = explanation || 'Schau nochmal hin.';
        }
      });
    });
  }
};

window.Exercises = Exercises;
