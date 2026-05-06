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
