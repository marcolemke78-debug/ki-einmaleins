const LESSONS = [
  window.LESSON_00, window.LESSON_01, window.LESSON_02, window.LESSON_03,
  window.LESSON_04, window.LESSON_05, window.LESSON_06, window.LESSON_07,
  window.LESSON_08, window.LESSON_09
];

let currentLessonId = null;

function renderSidebar() {
  const list = document.getElementById('lesson-list');
  list.innerHTML = '';
  LESSONS.forEach((lesson) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lesson-link';
    if (Progress.isDone(lesson.id)) btn.classList.add('is-done');
    if (lesson.id === currentLessonId) btn.classList.add('is-active');
    btn.innerHTML = `
      <span class="lesson-link__check">${Progress.isDone(lesson.id) ? '✓' : ''}</span>
      <span class="lesson-link__title">${lesson.title}</span>
    `;
    btn.addEventListener('click', () => navigateTo(lesson.id));
    list.appendChild(btn);
  });
}

function renderProgressBar() {
  const bar = document.getElementById('progress-bar');
  bar.style.width = Progress.percentage(LESSONS.length) + '%';
}

function navigateTo(lessonId) {
  currentLessonId = lessonId;
  Progress.setLast(lessonId);
  Renderer.renderLesson(LESSONS[lessonId]);
  renderSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function init() {
  document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm('Wirklich allen Fortschritt löschen?')) {
      Progress.reset();
      currentLessonId = 0;
      navigateTo(0);
      renderProgressBar();
    }
  });

  const last = Progress.getLast();
  const startId = (last !== null && last !== undefined) ? last : 0;
  navigateTo(startId);
  renderProgressBar();
}

window.addEventListener('DOMContentLoaded', init);
window.markCurrentLessonDone = function () {
  if (currentLessonId === null) return;
  Progress.markDone(currentLessonId);
  renderSidebar();
  renderProgressBar();
};
