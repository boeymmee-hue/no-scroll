'use strict';

const practiceRoute = [85, 89, 93, 97, 86, 90];

function initDailyPlan() {
  const choices = $('.hour-choices');
  const stops = $('#daily-stops');
  const dice = $('#route-dice');
  const lessons = new Map(BOOKS.map(book => [book.id, book]));
  const options = TOPICS.filter(topic => !topic.kids && !topic.project)
    .map(topic => topic.chapters.map(id => lessons.get(id))
      .filter(book => book.minutes === 30 && book.waiting === '無'))
    .filter(chapters => chapters.length);
  let hours = 2;
  let route = practiceRoute.map(id => lessons.get(id));
  let previous = [];

  function showRoute() {
    const chapters = route.slice(0, hours * 2);
    const minutes = chapters.reduce((sum, book) => sum + book.minutes, 0);
    previous = chapters;
    for (const option of choices.querySelectorAll('[data-hours]')) {
      option.setAttribute('aria-pressed', Number(option.dataset.hours) === hours);
    }
    $('#daily-summary').textContent = `${chapters.length} 站 · 約 ${minutes} 分鐘`;
    stops.innerHTML = chapters.map(book => `
      <li>
        <button type="button" data-practice="${book.id}">
          <span class="route-category">${escapeText(book.category)} · ${book.minutes} 分鐘</span>
          <strong>${escapeText(book.title)}</strong>
          <span class="route-arrow" data-route-status aria-hidden="true">↗</span>
        </button>
      </li>`).join('');
    updateDailyProgress();
  }

  choices.addEventListener('click', event => {
    const choice = event.target.closest('[data-hours]');
    if (!choice) return;
    hours = Number(choice.dataset.hours);
    showRoute();
  });
  dice.addEventListener('click', () => {
    const pool = options.map(chapters => chapters.filter(book => !previous.includes(book)))
      .filter(chapters => chapters.length);
    route = Array.from({ length: practiceRoute.length }, () => {
      const [chapters] = pool.splice(Math.floor(Math.random() * pool.length), 1);
      return chapters[Math.floor(Math.random() * chapters.length)];
    });
    showRoute();
    toast(`⚄ 抽到 ${previous.length} 個新練習，約 ${hours} 小時。`);
    if (!document.body.classList.contains('motion-off')) {
      const face = dice.querySelector('svg');
      for (const animation of face.getAnimations()) animation.cancel();
      face.animate([
        { transform: 'rotate(0)' },
        { transform: 'translateY(-5px) rotate(180deg)' },
        { transform: 'rotate(360deg)' }
      ], { duration: 350, easing: 'ease-out' });
    }
  });
  stops.addEventListener('click', event => {
    const chapter = event.target.closest('[data-practice]');
    if (chapter) openBook(Number(chapter.dataset.practice));
  });
  showRoute();
}

function updateDailyProgress() {
  for (const stop of document.querySelectorAll('[data-practice]')) {
    const book = BOOKS.find(item => item.id === Number(stop.dataset.practice));
    const done = complete(book);
    stop.querySelector('[data-route-status]').textContent = done ? '✓' : '↗';
    stop.setAttribute('aria-label', `${book.title}，${book.minutes} 分鐘${done ? '，已完成' : ''}`);
  }
}

function skillCheckPanel(book) {
  if (!book.check) return '';
  return `<section class="skill-check"><span aria-hidden="true">✓</span><div><h3>完成標準</h3><p>${escapeText(book.check)}</p></div></section>`;
}

function skillExamplePanel(book) {
  if (!book.example) return '';
  const title = escapeText(book.exampleTitle || '程式範例');
  return `<section class="skill-example"><h3>${title}</h3><pre tabindex="0" aria-label="${title}">${escapeText(book.example)}</pre></section>`;
}
