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
