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
      ${Renderer.renderLessonPath(lesson.id)}
      <h1 class="lesson-title">${lesson.title}</h1>
      <div class="phase-tabs">${tabsHtml}</div>
      ${contentHtml}
      <div class="lesson-footer" style="margin-top:32px;">
        <button class="btn" type="button" id="mark-done-btn">Lektion als erledigt markieren ✓</button>
      </div>
    `;

    main.querySelectorAll('.lesson-path .timeline__entry').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.go, 10);
        if (typeof window.navigateTo === 'function') window.navigateTo(id);
      });
    });

    main.querySelectorAll('.phase-tab').forEach((tab) => {
      tab.addEventListener('click', () => Renderer.activatePhase(tab.dataset.phase));
    });
    document.getElementById('mark-done-btn').addEventListener('click', () => {
      window.markCurrentLessonDone();
      const btn = document.getElementById('mark-done-btn');
      btn.textContent = 'Erledigt — weiter mit der nächsten Lektion';
      btn.classList.add('is-done');
    });

    // Weiter-zu-naechster-Lektion-Button
    const nextId = lesson.id + 1;
    if (nextId < (window.LESSONS_COUNT || 10)) {
      const footer = main.querySelector('.lesson-footer');
      const nextBtn = document.createElement('button');
      nextBtn.type = 'button';
      nextBtn.className = 'btn btn--ghost';
      nextBtn.style.marginLeft = '12px';
      nextBtn.textContent = `Weiter mit Lektion ${nextId} →`;
      nextBtn.addEventListener('click', () => {
        if (typeof window.navigateTo === 'function') window.navigateTo(nextId);
      });
      footer.appendChild(nextBtn);
    }

    if (window.Exercises && window.Exercises.bindAll) window.Exercises.bindAll(main);
  },

  renderLessonPath(currentId) {
    const labels = window.LESSON_PATH_LABELS || {};
    const icons = window.LESSON_ICONS || {};
    const total = window.LESSONS_COUNT || 10;
    const entries = [];
    for (let i = 0; i < total; i++) {
      const isNow = i === currentId;
      const isDone = window.Progress && window.Progress.isDone(i);
      const cls = ['timeline__entry'];
      if (isNow) cls.push('is-now');
      if (isDone && !isNow) cls.push('is-done');
      const label = labels[i] || ('Lektion ' + i);
      entries.push(
        `<button type="button" class="${cls.join(' ')}" data-go="${i}" aria-label="Zu Lektion ${i}: ${Renderer.escapeHtml(label)}">
          <div class="timeline__dot" aria-hidden="true">${icons[i] || ''}</div>
          <div class="timeline__date">${i}</div>
          <div class="timeline__title">${Renderer.escapeHtml(label)}</div>
        </button>`
      );
    }
    return `<div class="timeline timeline--path lesson-path" role="list">${entries.join('')}</div>`;
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
