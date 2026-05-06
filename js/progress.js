const PROGRESS_KEY = 'ki-einmaleins:progress:v1';

const Progress = {
  read() {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY);
      return raw ? JSON.parse(raw) : { lessonsDone: [], lastLesson: null };
    } catch (e) {
      console.warn('Progress.read fehlgeschlagen', e);
      return { lessonsDone: [], lastLesson: null };
    }
  },
  write(state) {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Progress.write fehlgeschlagen', e);
    }
  },
  markDone(lessonId) {
    const s = Progress.read();
    if (!s.lessonsDone.includes(lessonId)) s.lessonsDone.push(lessonId);
    Progress.write(s);
  },
  isDone(lessonId) {
    return Progress.read().lessonsDone.includes(lessonId);
  },
  setLast(lessonId) {
    const s = Progress.read();
    s.lastLesson = lessonId;
    Progress.write(s);
  },
  getLast() {
    return Progress.read().lastLesson;
  },
  reset() {
    localStorage.removeItem(PROGRESS_KEY);
  },
  percentage(totalLessons) {
    return Math.round((Progress.read().lessonsDone.length / totalLessons) * 100);
  }
};

window.Progress = Progress;
