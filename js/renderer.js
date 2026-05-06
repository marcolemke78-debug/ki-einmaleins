const Renderer = {
  renderLesson(lesson) {
    const main = document.getElementById('main');
    if (!lesson) {
      main.innerHTML = '<p>Lektion nicht gefunden.</p>';
      return;
    }
    const phases = Renderer.buildPhases(lesson);
    const tabsHtml = phases.map((p, i) =>
      `<button class="phase-tab${i === 0 ? ' is-active' : ''}" data-phase="${i}" type="button">${p.label}</button>`
    ).join('');
    const contentHtml = phases.map((p, i) =>
      `<section class="phase-content${i === 0 ? ' is-active' : ''}" data-phase="${i}">${p.html}</section>`
    ).join('');

    main.innerHTML = `
      <h1 class="lesson-title">${lesson.title}</h1>
      <div class="phase-tabs">${tabsHtml}</div>
      ${contentHtml}
      <div class="lesson-footer" style="margin-top:32px;">
        <button class="btn" type="button" id="mark-done-btn">Lektion als erledigt markieren ✓</button>
      </div>
    `;

    main.querySelectorAll('.phase-tab').forEach((tab) => {
      tab.addEventListener('click', () => Renderer.activatePhase(tab.dataset.phase));
    });
    document.getElementById('mark-done-btn').addEventListener('click', () => {
      window.markCurrentLessonDone();
      const btn = document.getElementById('mark-done-btn');
      btn.textContent = 'Erledigt — weiter mit der nächsten Lektion';
      btn.classList.add('is-done');
    });

    if (window.Exercises && window.Exercises.bindAll) window.Exercises.bindAll(main);
  },

  buildPhases(lesson) {
    const phases = [];
    if (lesson.intro) {
      phases.push({ label: 'Worum geht\'s', html: `<div class="phase-intro">${lesson.intro.html}</div>` });
    }
    if (lesson.missions && lesson.missions.length) {
      lesson.missions.forEach((m, idx) => {
        phases.push({
          label: m.title || `Mission ${idx + 1}`,
          html: Renderer.renderMission(m, lesson.id, idx)
        });
      });
    }
    if (lesson.practice && lesson.practice.length) {
      const practiceHtml = lesson.practice.map((p, i) => Renderer.renderExercise(p, `practice-${lesson.id}-${i}`)).join('');
      phases.push({ label: 'Eigene Anwendung', html: practiceHtml });
    }
    return phases;
  },

  activatePhase(phaseIndex) {
    document.querySelectorAll('.phase-tab').forEach((t) => t.classList.toggle('is-active', t.dataset.phase === String(phaseIndex)));
    document.querySelectorAll('.phase-content').forEach((c) => c.classList.toggle('is-active', c.dataset.phase === String(phaseIndex)));
  },

  renderMission(mission, lessonId, idx) {
    const id = `mission-${lessonId}-${idx}`;
    let inner = '';
    if (mission.type === 'live-mission') {
      inner = `
        <div class="card card--mission">
          <h3 class="card__title">${mission.title || 'Mission'}</h3>
          <div class="card__instruction">${mission.instruction || ''}</div>
          ${mission.promptToCopy ? `
            <div class="prompt-box" id="${id}-prompt">${Renderer.escapeHtml(mission.promptToCopy)}</div>
            <button class="copy-btn" type="button" data-copy-from="${id}-prompt">📋 Prompt kopieren</button>
            <p class="copy-hint">Wechsle dann zu deinem ChatGPT-Tab und füge den Text ein.</p>
          ` : ''}
        </div>
        ${mission.reflection ? Renderer.renderExercise(mission.reflection, `${id}-reflection`) : ''}
      `;
    } else {
      inner = Renderer.renderExercise(mission, id);
    }
    return inner;
  },

  renderExercise(exercise, id) {
    if (!window.Exercises || !window.Exercises.render) {
      return `<div class="card">Uebung "${exercise.type}" -- Renderer fehlt noch (Task 6+).</div>`;
    }
    return window.Exercises.render(exercise, id);
  },

  escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
};

window.Renderer = Renderer;
